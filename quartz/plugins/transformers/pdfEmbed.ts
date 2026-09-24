import { QuartzTransformerPlugin } from "../types"
import rehypeRaw from "rehype-raw"

const PdfEmbed: QuartzTransformerPlugin = () => ({
  name: "PdfEmbed",

  textTransform(_ctx, src) {
    const regex =
      /<PdfEmbed\s+src=["']([^"']+)["'](?:\s+title=["']([^"']*)["'])?(?:\s+zoom=["']?(\d+)["']?)?(?:\s+aspectRatio=["']([^"']+)["'])?(?:\s+hideDownload=["']?(true|false)["']?)?\s*\/?>/g

    return src.replace(
      regex,
      (_match, srcPath, title, zoom, aspectRatio, hideDownload) => {
        const finalTitle = title || "Document"
        const finalZoom = zoom || "95"
        const finalAspect = aspectRatio || "8.5 / 11"
        const hideDownloadBtn = hideDownload === "true"
        const pdfUrl = `${srcPath}#toolbar=0&navpanes=0&scrollbar=0&view=FitH&zoom=${finalZoom}`

        const headerStyle = hideDownloadBtn
          ? `display: flex; justify-content: center; align-items: center; padding: 0.75rem 1rem; background-color: var(--lightgray); border-bottom: 1px solid var(--gray); gap: 1rem; flex-wrap: wrap;`
          : `display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 1rem; background-color: var(--lightgray); border-bottom: 1px solid var(--gray); gap: 1rem; flex-wrap: wrap;`

        const titleStyle = `font-family: 'Calibri', 'DM Sans', Arial, sans-serif; font-weight: 600; color: var(--darkgray); font-size: 1.25rem; line-height: 1.3;`

        const downloadBtn = hideDownloadBtn
          ? ""
          : `<div class="pdf-embed__actions" style="display: flex; gap: 0.5rem;">
<a href="${srcPath}" download class="pdf-embed__btn pdf-embed__btn--primary" style="font-family: 'Calibri', 'DM Sans', Arial, sans-serif; background-color: #7b5ea7 !important; color: #ffffff !important; padding: 0.5rem 1.1rem; border-radius: 4px; font-size: 1.25rem; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 0.35rem; white-space: nowrap; line-height: 1.3;">⬇ Download</a>
</div>`

        return `<div class="pdf-embed" style="width: 100%; margin: 1rem auto; border: 2px solid var(--gray); border-radius: 6px; box-sizing: border-box; overflow: hidden; background-color: var(--light);">
<div class="pdf-embed__header" style="${headerStyle}">
<span class="pdf-embed__title" style="${titleStyle}">${finalTitle}</span>
${downloadBtn}
</div>
<iframe src="${pdfUrl}" class="pdf-embed__frame" style="width: 100%; border: none; display: block; aspect-ratio: ${finalAspect};"></iframe>
</div>`
      },
    )
  },

  htmlPlugins() {
    return [rehypeRaw]
  },

  externalResources() {
    return {
      css: [
        {
          inline: true,
          content: `
.pdf-embed__btn--primary:hover {
  opacity: 0.85;
}

@media (max-width: 600px) {
  .pdf-embed__header {
    padding: 0.6rem 0.75rem !important;
  }
  .pdf-embed__title {
    font-size: 1rem !important;
  }
  .pdf-embed__btn--primary {
    padding: 0.4rem 0.85rem !important;
    font-size: 1rem !important;
  }
}
          `,
        },
      ],
      js: [],
    }
  },
})

export default PdfEmbed