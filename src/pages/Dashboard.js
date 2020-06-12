import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { FirebaseContext } from "../firebase"
import { useSpring, animated } from "react-spring"
import ReactPlayer from "react-player"
import Draggable from "react-draggable"
import Emoji from 'a11y-react-emoji'
import styled, { css } from 'styled-components'
import Navi from "../components/Navi"
import MediaPlayer from "../components/MediaPlayer"

const StyledEmoji = styled(({ isSpinning, ...props }) => <Emoji {...props} />)`
    font-size: 32px;

    ${props => props.isSpinning && css`
        animation: spinning 1s linear infinite;
    `}
`

export default function Landing() {
  const { user } = React.useContext(FirebaseContext)
  const { t } = useTranslation(["landing"])
  const [s, setS] = useState(null)

  useEffect(() => {
    return () => {}
  }, [])

  const data = { video: "https://www.youtube.com/watch?v=UahWEszdezo" }
  return (
    <>
      <Navi />
      <div id="playerTarget" className="w-1/2 h-48"></div>
      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}
      >
        <div>
          <div className="handle">

          <StyledEmoji isSpinning={true} symbol="✋🏼" label="move" />
          </div>
          <MediaPlayer mediaType="video" active={data} />
        </div>
      </Draggable>
    </>
  )
}
