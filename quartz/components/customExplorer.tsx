import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "./types"

import OverflowListFactory from "./OverflowList"
import { classNames } from "../util/lang"
import style from "./styles/customExplorer.scss"

// @ts-expect-error - Inline script loaded as text by esbuild plugin
import script from "./scripts/customExplorer.inline.ts"

interface FileTrieNode {
  slugSegment?: string
  slugSegments?: string[]
  displayName?: string
  isFolder: boolean
  data: Record<string, unknown> | null
  children: FileTrieNode[]
}

const customExplorerSort = (
  a: FileTrieNode,
  b: FileTrieNode,
): number => {
  const topLevelOrder: Record<string, number> = {
    "my-projects": 0,
    "work-experience": 1,
    "skills-and-certifications": 2,
    "interests-and-hobbies": 3,
    "lifelong-learning": 4,
  }

  const aSlug = a.slugSegments?.join("/") ?? ""
  const bSlug = b.slugSegments?.join("/") ?? ""

  if (
    a.slugSegments?.length === 1 &&
    b.slugSegments?.length === 1
  ) {
    const aOrder = topLevelOrder[aSlug]
    const bOrder = topLevelOrder[bSlug]

    if (aOrder !== undefined && bOrder !== undefined) {
      return aOrder - bOrder
    }

    if (aOrder !== undefined) {
      return -1
    }

    if (bOrder !== undefined) {
      return 1
    }
  }

  if (a.isFolder !== b.isFolder) {
    return a.isFolder ? -1 : 1
  }

  return (a.displayName ?? "").localeCompare(
    b.displayName ?? "",
    undefined,
    {
      numeric: true,
      sensitivity: "base",
    },
  )
}

const customExplorerFilter = (
  node: FileTrieNode,
): boolean => {
  const slug = node.slugSegments?.join("/") ?? ""

  return (
    node.slugSegment !== "tags" &&
    !(node.isFolder && slug === "projects")
  )
}

const defaultOptions = {
  title: "Explorer",
  folderDefaultState: "collapsed" as const,
  folderClickBehavior: "link" as const,
  useSavedState: true,
}

let numCustomExplorers = 0

function concatenateResources(
  ...resources: (string | undefined)[]
): string {
  return resources
    .filter((r): r is string => !!r)
    .join("\n")
}

export default (() => {
  const {
    OverflowList,
    overflowListAfterDOMLoaded,
  } = OverflowListFactory()

  const CustomExplorer: QuartzComponent = (
    props: QuartzComponentProps,
  ) => {
    const displayClass = (
      props as {
        displayClass?: "mobile-only" | "desktop-only"
      }
    ).displayClass

    const id = `custom-explorer-${numCustomExplorers++}`

    return (
      <div
        class={classNames(
          displayClass,
          "explorer",
          "nav-files-container",
        )}
        data-behavior={defaultOptions.folderClickBehavior}
        data-collapsed={defaultOptions.folderDefaultState}
        data-savestate={defaultOptions.useSavedState}
        data-data-fns={JSON.stringify({
          order: ["filter", "sort"],
          sortFn: customExplorerSort.toString(),
          filterFn: customExplorerFilter.toString(),
        })}
      >
        <button
          type="button"
          class="explorer-toggle mobile-explorer hide-until-loaded"
          data-mobile={true}
          aria-controls={id}
          aria-label="Explorer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>

        <button
          type="button"
          class="title-button explorer-toggle desktop-explorer"
          data-mobile={false}
          aria-expanded={true}
        >
          <h2>{defaultOptions.title}</h2>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="5 8 14 8"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="fold"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        <div
          id={id}
          class="explorer-content"
          aria-expanded={false}
          role="group"
        >
          <OverflowList class="explorer-ul" />
        </div>

        <template id="template-file">
          <li>
            <a
              href="#"
              class="nav-file-title tree-item-self"
            />
          </li>
        </template>

        <template id="template-folder">
          <li>
            <div class="folder-container nav-folder-title tree-item-self">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="5 8 14 8"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="folder-icon nav-folder-collapse-indicator collapse-icon"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>

              <div>
                <button class="folder-button">
                  <span class="folder-title" />
                </button>
              </div>
            </div>

            <div class="folder-outer">
              <ul class="content tree-item-children" />
            </div>
          </li>
        </template>
      </div>
    )
  }

  CustomExplorer.css = style

  CustomExplorer.afterDOMLoaded = concatenateResources(
    script,
    overflowListAfterDOMLoaded,
  )

  return CustomExplorer
}) satisfies QuartzComponentConstructor