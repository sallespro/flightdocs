import React from "react"

const Video = ({ videoSourceURL, videoTitle, ...props }) => (
  <div className="video">
    <iframe
      src={videoSourceURL}
      title={videoTitle}
      //allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      width="640" height="360"
      allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video