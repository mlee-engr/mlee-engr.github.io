import {
  loadQuartzConfig,
  loadQuartzLayout,
} from "./quartz/plugins/loader/config-loader"

import PdfViewer from "./quartz/components/PdfViewer"
import { componentRegistry } from "./quartz/components/registry"

const config = await loadQuartzConfig()

export default config

// Register the component so Quartz collects its CSS and client-side resources.
componentRegistry.register(
  "PdfViewer",
  PdfViewer,
  "local",
)

const layout = await loadQuartzLayout()

layout.byPageType.content = {
  ...layout.byPageType.content,
  afterBody: [
    ...(layout.byPageType.content?.afterBody ?? []),
    componentRegistry.instantiate(PdfViewer),
  ],
}

export { layout }