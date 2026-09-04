// @ts-nocheck

import * as pdfjsLib from "pdfjs-dist"

pdfjsLib.GlobalWorkerOptions.workerSrc = "/static/pdfjs/pdf.worker.mjs"

async function renderPDF() {
  console.log("PDF VIEWER SCRIPT LOADED")

  const viewers = document.querySelectorAll(".pdf-viewer")
  console.log("PDF viewers found:", viewers.length)

  for (const viewer of viewers) {
    // Prevent multiple renderPDF() calls from rendering the same viewer
    if (
      viewer.getAttribute("data-pdf-rendered") === "true" ||
      viewer.getAttribute("data-pdf-rendering") === "true"
    ) {
      continue
    }

    const pdfUrl = viewer.getAttribute("data-pdf")

    if (!pdfUrl) {
      console.warn("PDF viewer has no data-pdf attribute")
      continue
    }

    // Set this BEFORE any await so another renderPDF() call can't start
    // rendering the same viewer.
    viewer.setAttribute("data-pdf-rendering", "true")

    console.log("Loading PDF:", pdfUrl)

    try {
      const pdf = await pdfjsLib.getDocument({ url: pdfUrl }).promise

      console.log(`PDF loaded: ${pdf.numPages} pages`)

      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
        const page = await pdf.getPage(pageNumber)

        const unscaledViewport = page.getViewport({ scale: 1 })

        const containerWidth = viewer.clientWidth

        if (containerWidth === 0) {
          console.warn("PDF viewer has zero width")
          continue
        }

        const scale = containerWidth / unscaledViewport.width
        const viewport = page.getViewport({ scale })

        const canvas = document.createElement("canvas")
        const context = canvas.getContext("2d")

        if (!context) {
          console.error("Could not get canvas context")
          continue
        }

        const pixelRatio = window.devicePixelRatio || 1

        canvas.width = Math.floor(viewport.width * pixelRatio)
        canvas.height = Math.floor(viewport.height * pixelRatio)

        canvas.style.width = `${viewport.width}px`
        canvas.style.height = `${viewport.height}px`

        context.setTransform(
          pixelRatio,
          0,
          0,
          pixelRatio,
          0,
          0,
        )

        viewer.appendChild(canvas)

        await page.render({
          canvasContext: context,
          viewport,
        }).promise

        console.log(`Rendered PDF page ${pageNumber}/${pdf.numPages}`)
      }

      viewer.setAttribute("data-pdf-rendered", "true")
      viewer.removeAttribute("data-pdf-rendering")

      console.log("PDF rendering complete")
    } catch (error) {
      console.error("PDF.js error:", error)

      viewer.removeAttribute("data-pdf-rendering")
      viewer.removeAttribute("data-pdf-rendered")

      viewer.innerHTML = `
        <p>Unable to load PDF.</p>
        <p>
          <a href="${pdfUrl}" target="_blank">
            Open PDF
          </a>
        </p>
      `
    }
  }
}

document.addEventListener("nav", renderPDF)
document.addEventListener("render", renderPDF)

renderPDF()