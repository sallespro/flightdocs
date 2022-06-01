import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import BackgroundSlider from 'gatsby-image-background-slider'
import { useStaticQuery } from "gatsby"
import Icon from "../assets/logo-svg.svg";
import Video from "../components/video"

const IndexPage = () => (

  <Layout>
    <div className="hidden sm:flex flex-col items-end h-auto">
      <div className="bg-black inset-0 z-0  px-4">
      </div>
      <div className="flex m-16 justify-end">
      {/* <Video
          videoSourceURL='https://www.youtube.com/embed/ge6vvCDKDr4'
          videoTitle={'title video'}
        /> */}
        <div className="w-1/2  bg-transparent p-5  rounded">
          <div className="grid items-center">
              <Icon />
              <h3 className="pt-1 mb-2 text-2xl text-center font-paci text-blue-100">Flight Docs</h3>
              <p className="mb-4 text-sm text-gray-700  text-center">
             Nova série de vídeo documentários sobre vôo livre
              </p>
              <hr className="mb-6 border-t" />
              <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Assistir trailer
                  </button>
                </div>
              {/* <p class="mb-4 text-sm text-gray-700  text-center">
              Este episódio é protagonizado por Hemerson R. Souza, instrutor de vôo livre que nos convida a conhecer um Estado brasileiro e conta sua história de vida no vôo, com belos exemplos de pessoas e lugares a se conhecer.
              </p> */}
            </div>
              <div className="text-center">
                <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="./index.html">
                </a>
              </div>
          </div>
  
      </div>

      {/* <div className="py-24 justify-end" >
          <h1 className="text-white  font-semibold text-6xl font-sans">
            Minas Flying Trips
          </h1>
        </div> */}
      {/* <div className="py-16">
          <p className="text-white mt-1 justify-end">
            Maio/2022
          </p>
        </div> */}

    </div>


    <BackgroundSlider
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile (filter: {sourceInstanceName: {eq: "backgrounds"}}){
            nodes {
              relativePath
              childImageSharp {
                fluid (maxWidth: 1920, quality: 100){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `)}
      initDelay={2}
      transition={4}
      duration={8}
      style={{
        transform: "rotate(0deg) scale(1)",
      }}

    />

    {/* {pages.map((page, index) => (
      <>
        <Link key={index} to={page.path}>
          {page.path}
        </Link>
        <br />
      </>
    ))} */}
  </Layout>
)

export default IndexPage

// export const query = graphql`
//   query IndexPageQuery {
//     # allSitePage(filter: { path: { regex: "/services/" } }) {
//     allSitePage(sort: { fields: path, order: ASC }) {
//       nodes {
//         path
//       }
//     }
//   }
// `
