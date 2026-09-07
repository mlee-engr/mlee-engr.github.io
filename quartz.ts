import {
  loadQuartzConfig,
  loadQuartzLayout,
} from "./quartz/plugins/loader/config-loader"

import { componentRegistry } from "./quartz/components/registry"

import ProfileSidebar from "./quartz/components/profileSidebar"
import PdfViewer from "./quartz/components/PdfViewer"
import pageNavigation from "./quartz/components/pageNavigation"

componentRegistry.register(
  "ProfileSidebar",
  ProfileSidebar,
  "local",
)

componentRegistry.register(
  "PdfViewer",
  PdfViewer,
  "local",
)

componentRegistry.register(
  "PageNavigation",
  pageNavigation,
  "local",
)

const config = await loadQuartzConfig()

export default config

export const layout = await loadQuartzLayout()