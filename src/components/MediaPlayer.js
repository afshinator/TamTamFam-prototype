import React from "react"
import ReactPlayer from "react-player"

const MediaPlayer = ({
  mediaType,
  active,
  autoplay,
  endCallback,
  progressCallback,
}) => {
  return (
    <>
      <section style={{ position: "relative" }}>
        <ReactPlayer
          // width="100%"
          // height="100%"
          style={{ position: "absolute", top: "0", left: "0" }}
          // playing={autoplay}
          controls={true}
          url={active[mediaType]}
          // onEnded={endCallback}
          // onProgress={progressCallback}
        />
      </section>
    </>
  )
}

export default MediaPlayer
