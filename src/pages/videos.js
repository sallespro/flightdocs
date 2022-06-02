import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Video from "../components/video"

import Layout from "../components/Layout"

export default () => {
  
  const playlist = [
    { title: "1", videoSourceURL: "https://www.youtube.com/embed/Mj_XXjZy4DQ", name: 'Ka\'a Potyra - 1', description: 'Designed by Good Goods, Inc.' },
    { title: "2", videoSourceURL: "https://www.youtube.com/embed/Wsb_c7RhM_c", name: 'Ka\'a Potyra - 2', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
    { title: "3", videoSourceURL: "https://www.youtube.com/embed/xsNqINonLtQ", name: 'Lift da Brava - 3', description: '6.25" x 3.55" x 1.15"' },
    { title: "4", videoSourceURL: "https://www.youtube.com/embed/6xPymUx3oHw", name: 'Caputira Blues - 4', description: '6.25" x 3.55" x 1.15"' },
    { title: "5", videoSourceURL: "https://www.youtube.com/embed/KXRvTo7nlNI", name: 'Caputira Volare - 5', description: '6.25" x 3.55" x 1.15"' },
    { title: "6", videoSourceURL: "https://www.youtube.com/embed/VPZSjeNeHhU", name: 'Caputira Hiphop - 6', description: '6.25" x 3.55" x 1.15"' },
    
  ]

  return (
    <Layout>
      <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 p-8 ">
      <section className="bg-white dark:bg-gray-900">
      { playlist.map( (video , index) => (
      
     
        <div className="container flex items-center px-4 py-12 mx-auto">
          <div className="flex justify-center p-8">
                     <Video
          videoSourceURL={video.videoSourceURL}
          videoTitle={video.videoTitle}
        />
          </div>

          <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
            <div className="p-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"> 
              {video.name}</h2>
              <p className="mt-6 text-gray-700 ">
                  {video.title}
              </p>
            </div>
          </div>
        </div>
      
    ) )}
    </section>
      </div>
    </Layout>
  )
}
