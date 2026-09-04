import { readFile } from "node:fs/promises"
import path from "node:path"
import { pathToFileURL } from "node:url"
import yaml from "yaml"

import type { QuartzConfig } from "../../cfg"
import type { QuartzPluginData } from "../../plugins/vfile"
import type { PluginTypes } from "../../plugins/types"
import { componentRegistry } from "../../components/registry"

type PluginCategory = "transformer" | "filter" | "emitter" | "pageType"

type PluginEntry = {
  source: string
  enabled?: boolean
  order?: number
  layout?: unknown
  [key: string]: unknown
}

type PluginManifest = {
  name?: string
  category?: PluginCategory
  entrypoint?: string
  main?: string
  components?: Record<string, unknown>
  [key: string]: unknown
}

function pascalCase(value: string) {
  return value
    .split(/[-_./]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("")
}

async function readPluginsJson() {
  const configPath = path.join(process.cwd(), "quartz.config.yaml")
  const source = await readFile(configPath, "utf8")
  return yaml.parse(source) as {
    plugins?: PluginEntry[]
    [key: string]: unknown
  }
}

async function resolvePlugin(source: string) {
  if (source.startsWith(".") || source.startsWith("/")) {
    const resolved = path.resolve(process.cwd(), source)
    return {
      module: await import(pathToFileURL(resolved).href),
      manifest: {} as PluginManifest,
    }
  }

  const packageJsonUrl = import.meta.resolve(`${source}/package.json`)
  const packageJson = JSON.parse(
    await readFile(new URL(packageJsonUrl), "utf8"),
  )

  const manifestPath = packageJson.quartzPluginManifest
    ? path.resolve(
        path.dirname(new URL(packageJsonUrl).pathname),
        packageJson.quartzPluginManifest,
      )
    : undefined

  const manifest = manifestPath
    ? (JSON.parse(await readFile(manifestPath, "utf8")) as PluginManifest)
    : ({} as PluginManifest)

  const entrypoint =
    manifest.entrypoint ??
    manifest.main ??
    packageJson.module ??
    packageJson.main

  if (!entrypoint) {
    throw new Error(`Could not determine entrypoint for plugin ${source}`)
  }

  const entrypointPath = path.resolve(
    path.dirname(new URL(packageJsonUrl).pathname),
    entrypoint,
  )

  return {
    module: await import(pathToFileURL(entrypointPath).href),
    manifest,
  }
}

function findFactory(module: Record<string, unknown>, category: PluginCategory) {
  if (typeof module.default === "function") {
    return module.default
  }

  if (typeof module.plugin === "function") {
    return module.plugin
  }

  const functions = Object.values(module).filter(
    (value): value is (...args: never[]) => unknown =>
      typeof value === "function",
  )

  if (functions.length === 1) {
    return functions[0]
  }

  throw new Error(
    `Could not find ${category} factory in plugin module. Available exports: ${Object.keys(module).join(", ")}`,
  )
}

async function instantiate(
  items: PluginEntry[],
  expectedCategory: PluginCategory,
) {
  const instances: unknown[] = []

  for (const item of items) {
    if (item.enabled === false) {
      continue
    }

    const { module, manifest } = await resolvePlugin(item.source)

    if (manifest.category && manifest.category !== expectedCategory) {
      continue
    }

    const factory = findFactory(module, expectedCategory)

    const options = Object.fromEntries(
      Object.entries(item).filter(
        ([key]) =>
          !["source", "enabled", "order", "layout"].includes(key),
      ),
    )

    const instance = factory(
      Object.keys(options).length > 0 ? options : undefined,
    )

    instances.push(instance)
  }

  return instances
}

export async function loadQuartzConfig(): Promise<QuartzConfig> {
  const json = await readPluginsJson()

  const enabledEntries = (json.plugins ?? []).filter(
    (entry) => entry.enabled !== false,
  )

  const transformers = enabledEntries
    .filter((entry) => entry.order !== undefined)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

  const pluginEntries = {
    transformers: transformers.filter(
      (entry) => entry.source.includes("transformer"),
    ),
    filters: enabledEntries.filter((entry) =>
      entry.source.includes("filter"),
    ),
    emitters: enabledEntries.filter((entry) =>
      entry.source.includes("emitter"),
    ),
    pageTypes: enabledEntries.filter((entry) =>
      entry.source.includes("pageType"),
    ),
  }

  const builtinPlugins = await import("../index")

  // ImageCarousel is a built-in/local transformer, so explicitly
  // instantiate it here rather than registering it in quartz.config.yaml.
  const builtinTransformers: unknown[] = [
    builtinPlugins.ImageCarousel(),
  ]

  const builtinEmitters = [
    builtinPlugins.ComponentResources(),
    builtinPlugins.Assets(),
    builtinPlugins.Static(),
  ]

  const builtinPageTypes = [
    builtinPlugins.PageTypes.NotFoundPageType(),
  ]

  const plugins: PluginTypes = {
    transformers: [
      ...builtinTransformers,
      ...(await instantiate(pluginEntries.transformers, "transformer")),
    ],
    filters: await instantiate(pluginEntries.filters, "filter"),
    emitters: [
      ...builtinEmitters,
      ...(await instantiate(pluginEntries.emitters, "emitter")),
    ],
    pageTypes: [
      ...(await instantiate(pluginEntries.pageTypes, "pageType")),
      ...builtinPageTypes,
    ],
  }

  return {
    ...json,
    plugins,
  } as QuartzConfig
}

export async function loadQuartzLayout() {
  const json = await readPluginsJson()

  const layout = {
    byPageType: {
      "404": {
        beforeBody: [],
        left: [],
        right: [],
        afterBody: [],
      },
      content: {
        beforeBody: [],
        left: [],
        right: [],
        afterBody: [],
      },
      folder: {
        beforeBody: [],
        left: [],
        right: [],
        afterBody: [],
      },
      tag: {
        beforeBody: [],
        left: [],
        right: [],
        afterBody: [],
      },
      canvas: {
        beforeBody: [],
        left: [],
        right: [],
        afterBody: [],
      },
      bases: {
        beforeBody: [],
        left: [],
        right: [],
        afterBody: [],
      },
    },
    groups: {},
  }

  for (const entry of json.plugins ?? []) {
    if (entry.enabled === false || !entry.layout) {
      continue
    }

    const pluginName = pascalCase(entry.source.split("/").pop() ?? "")

    const plugin = componentRegistry.get(pluginName)

    if (!plugin) {
      continue
    }

    const layoutConfig = entry.layout as Record<string, unknown>

    if (layoutConfig.position) {
      const position = layoutConfig.position as
        | "beforeBody"
        | "left"
        | "right"
        | "afterBody"

      const pageTypes = [
        "content",
        "folder",
        "tag",
        "canvas",
        "bases",
      ] as const

      for (const pageType of pageTypes) {
        layout.byPageType[pageType][position].push(
          componentRegistry.instantiate(plugin),
        )
      }
    }
  }

  return layout
}