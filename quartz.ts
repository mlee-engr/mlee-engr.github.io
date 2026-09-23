import {
  loadQuartzConfig,
  loadQuartzLayout,
} from "./quartz/plugins/loader/config-loader"

import { componentRegistry } from "./quartz/components/registry"

import PdfViewer from "./quartz/components/PdfViewer"

componentRegistry.register(
  "PdfViewer",
  PdfViewer,
  "local",
)

const config = await loadQuartzConfig()

export default config

export const layout = await loadQuartzLayout()