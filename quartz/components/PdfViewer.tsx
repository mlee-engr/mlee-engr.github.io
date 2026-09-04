import type { QuartzComponent, QuartzComponentConstructor } from "./types"
import script from "./scripts/pdfViewer.inline"

const PdfViewer: QuartzComponent = () => {
  return <></>
}

PdfViewer.afterDOMLoaded = script

PdfViewer.css = `
  .pdf-viewer {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    border: 2px solid var(--gray);
    border-radius: 6px;
    box-sizing: border-box;
    overflow: hidden;
  }

  .pdf-viewer canvas {
    display: block;
    width: 100% !important;
    height: auto !important;
    max-width: 100%;
    margin: 0;
    box-sizing: border-box;
  }
`

export default (() => PdfViewer) satisfies QuartzComponentConstructor