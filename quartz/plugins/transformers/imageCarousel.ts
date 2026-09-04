import { QuartzTransformerPlugin } from "../../plugins/types"
import rehypeRaw from "rehype-raw"

const ImageCarousel: QuartzTransformerPlugin = () => ({
  name: "ImageCarousel",

  textTransform(_ctx, src) {
    const regex =
      /<ImageCarousel\s+images=["']([^"']+)["']\s+captions=["']([^"']+)["'](?:\s+width=["']([^"']+)["'])?\s*\/?>/g

    return src.replace(regex, (_match, imageList, captionList, width) => {
      const images = imageList
        .split(",")
        .map((image: string) => image.trim())
        .filter(Boolean)

      const captions = captionList
        .split(";")
        .map((caption: string) => caption.trim())

      if (images.length === 0) {
        return ""
      }

      const imageTags = images
        .map(
          (image: string, index: number) =>
            `<img class="carousel-image${index === 0 ? " active" : ""}" src="${image}" alt="" />`,
        )
        .join("\n")

      const captionTags = captions
        .map(
          (caption: string, index: number) =>
            `<span class="carousel-caption-item${index === 0 ? " active" : ""}">${caption}</span>`,
        )
        .join("")

      const widthStyle = width ? ` style="width: ${width};"` : ""

      return `<div class="image-carousel"${widthStyle}>
<button class="carousel-button carousel-prev" type="button" aria-label="Previous image">❮</button>
<div class="carousel-track">
${imageTags}
</div>
<button class="carousel-button carousel-next" type="button" aria-label="Next image">❯</button>
<div class="carousel-caption">${captionTags}</div>
</div>`
    })
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
.image-carousel {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 2rem auto;
  overflow: hidden;
}

.carousel-track {
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-image {
  display: none;
  width: 100%;
  height: 500px;
  object-fit: contain;
}

.carousel-image.active {
  display: block;
}

.carousel-image.active {
  display: block;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 40px;
  height: 50px;
  border: none;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
}

.carousel-button:hover {
  background: rgba(0, 0, 0, 0.75);
}

.carousel-prev {
  left: 10px;
}

.carousel-next {
  right: 10px;
}

.carousel-caption {
  text-align: center;
  margin-top: 8px;
  font-size: 1rem;
}

.carousel-caption-item {
  display: none;
}

.carousel-caption-item.active {
  display: inline;
}
          `,
        },
      ],

      js: [
        {
          contentType: "inline",
          loadTime: "afterDOMReady",
          script: `
const initImageCarousels = () => {
  document.querySelectorAll(".image-carousel").forEach((carousel) => {
    if (carousel.dataset.carouselInitialized === "true") {
      return
    }

    const images = carousel.querySelectorAll(".carousel-image")
    const prev = carousel.querySelector(".carousel-prev")
    const next = carousel.querySelector(".carousel-next")
    const captions = carousel.querySelectorAll(".carousel-caption-item")

    if (!images.length || !prev || !next || !captions.length) {
      return
    }

    carousel.dataset.carouselInitialized = "true"

    let current = 0

    function showImage(index) {
      current = (index + images.length) % images.length

      images.forEach((image, i) => {
        image.classList.toggle("active", i === current)
      })

      captions.forEach((caption, i) => {
        caption.classList.toggle("active", i === current)
      })
    }

    prev.addEventListener("click", () => {
      showImage(current - 1)
    })

    next.addEventListener("click", () => {
      showImage(current + 1)
    })

    showImage(0)
  })
}

initImageCarousels()

document.addEventListener("nav", initImageCarousels)
          `,
        },
      ],
    }
  },
})

export default ImageCarousel