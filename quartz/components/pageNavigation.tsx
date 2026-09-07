import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/pageNavigation.scss"

const navigation = [
  {
    title: "Home",
    slug: "/",
  },
  {
    title: "Work Experience", 
    slug: "/",
  },
  {
    title: "Skills",
    slug: "/",
  },
]

const pageNavigation: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  // Get the actual slug from the file
  const currentSlug = fileData.slug ?? ""
  
  // Extract just the page name (remove directory path)
  const currentPage = currentSlug.split('/').pop() || currentSlug

  // Find the navigation item that matches either full slug or page name
  const currentIndex = navigation.findIndex(
    (page) => {
      // Match by full slug OR by the last part of the slug
      const pageName = page.slug.split('/').pop() || page.slug
      return page.slug === currentSlug || pageName === currentPage
    }
  )

  if (currentIndex === -1) {
    return null
  }

  const previous = currentIndex > 0
    ? navigation[currentIndex - 1]
    : null

  const next = currentIndex < navigation.length - 1
    ? navigation[currentIndex + 1]
    : null

  return (
    <nav class="page-navigation" aria-label="Page navigation">
      <div class="page-navigation__previous">
        {previous && (
          <a href={`/${previous.slug}/`}>
            <span class="page-navigation__arrow">←</span>
            <span class="page-navigation__label">
              {previous.title}
            </span>
          </a>
        )}
      </div>

      <div class="page-navigation__next">
        {next && (
          <a href={`/${next.slug}/`}>
            <span class="page-navigation__label">
              {next.title}
            </span>
            <span class="page-navigation__arrow">→</span>
          </a>
        )}
      </div>
    </nav>
  )
}

pageNavigation.css = style

export default (() => pageNavigation) satisfies QuartzComponentConstructor