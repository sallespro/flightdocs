import React from "react"
import SEO from "./SEO"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import usePathList from "../hooks/usePathList"
import useSiteMetadata from "../hooks/useSiteMetadata"
import Video from "../components/video"
import { useStaticQuery } from "gatsby"

const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
  { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
]

const MarkdownLayout = ({ children, data }) => {
  const pages = usePathList()
  const { title } = useSiteMetadata()
  const pics = data.allFile.edges

  return (
    <>
      <SEO />
      <header>
        <nav className="bg-white shadow">
          <div className="container mx-auto px-6 py-3 ">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold text-gray-700">
                  <div className="inline text-gray-700 text-xl font-bold">
                    {title}
                  </div>
                </div>

                <div className="flex md:hidden">
                  <button
                    type="button"
                    className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                    aria-label="toggle menu"
                  >
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="hidden -mx-4 md:flex md:items-center">
                <Link
                  className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-red-600"
                  to="/"
                >
                  home
                </Link>

                {pages.map((page, index) => (
                  <div key={index}>
                    <Link
                      className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-red-600"
                      to={page.path}
                    >
                      {page.path.replace(/^\/|\/$/g, "")}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* <div className="hidden lg:flex flex-col w-full login_img_section
          items-center justify-end">
        <div className="bg-black inset-0 z-0  px-4">
        </div>
        <div className="py-24 " >
          <h1 className=" text-white  font-semibold text-4xl font-sans">
          {data.mdx.frontmatter.title}
          </h1>
        </div>
        <div className="py-64">
          <p className="text-white mt-1 justify-end">
            Alto Jequitibá-MG, Maio/2022
          </p>
        </div>
      </div> */}

      <section className="bg-white dark:bg-gray-900">
        <div className="container flex items-center px-4 py-12 mx-auto">
          <div className="flex justify-center p-8">
            {/* <Img
              key={data.mdx.frontmatter.image.childImageSharp.fluid.src}
              fluid={data.mdx.frontmatter.image.childImageSharp.fluid}
              alt="images"
            /> */}
            {/* <img className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover"
              src="https://drive.cloudbot.com.br/fly/moeda-flight-selfie_HD.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=conector%2F20220525%2F%2Fs3%2Faws4_request&X-Amz-Date=20220525T231625Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=4fcae1991ec2df058780d6748788b0c3d0753bbf9ec63c9f64d15c3e34d30d93" alt="" />
               */}
                     <Video
          videoSourceURL={data.mdx.frontmatter.videoSourceURL}
          videoTitle={data.mdx.frontmatter.videoTitle}
        />
          </div>

          <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
            <div className="p-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"> {data.mdx.frontmatter.title}</h2>
              <p className="mt-6 text-gray-700 ">
                  {data.mdx.frontmatter.videoTitle}
              </p>
            </div>
          </div>
        </div>
      </section>


     

      {/* <Video
          videoSourceURL={data.mdx.frontmatter.videoSourceURL}
          videoTitle={data.mdx.frontmatter.videoTitle}
        /> */}



      {children}
      {/* <footer className="py-2 text-center text-gray-600 text-xs">
         &copy; 2021 - salles pro services
        </footer> */}
    </>
  )
}
export default MarkdownLayout

export const pageQuery = graphql`

  query PostQuery($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        videoSourceURL
        videoTitle
      }
    }
    allFile(
    filter: {
      extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
      absolutePath: { regex: "/(jpeg)/" }
    }
  ) {
    totalCount
    edges {
      node {
        name
        ...squareImage
        # childImageSharp {
        #   fluid(maxWidth: 915, quality: 70) {
        #     aspectRatio
        #     ...GatsbyImageSharpFluid_withWebp
        #   }
        # }
      }
    }
  }
  file(relativePath: { eq: "about.jpg" }) {
    ...squareImage
    # childImageSharp {
    #   fluid {
    #     base64
    #     aspectRatio
    #     src
    #     srcSet
    #     sizes
    #   }
    # }
  }
    site {
      siteMetadata {
        title
      }
    }
  }
`
