import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import pointUp from "../assets/arrow-thick-to-top.svg"

const colors = require("../tailwind.config")
  .theme.extend.colors
// import { styled } from "styled-components"

const COLLAPSED_HEIGHT = 50

const OPACITY_RANGE = {
  opacity: 1,
  from: { opacity: 0 },
  config: { duration: 150 },
}

const Card = (props) => {
  const [collapsed, setCollapsed] = useState(false)
  let animRangeProps = useSpring(OPACITY_RANGE)

  const CollapseButton = () => {
    const [state, toggle] = useState(true)

    return (
      <button className="absolute top-0 left-0 w-5 rounded-sm opacity-25 hover:opacity-50">
        <img
          src={pointUp}
          className=""
          alt="collapse me"
          onClick={() => {
            setCollapsed(!collapsed)
            toggle(!state)
          }}
        />
      </button>
    )
  }

  // height is not animated with Spring
  animRangeProps.maxHeight = collapsed ? COLLAPSED_HEIGHT : 1000
  animRangeProps.transition = "max-height 0.3s ease-out"

  return (
    <animated.section
      className="relative max-w-md max-h-screen p-3 m-6 overflow-hidden rounded-sm appCard"
      style={animRangeProps}
    >
      <div className="w-full">
        <h3 className="text-2xl ">{props.title}</h3>
        <div className="cardContent">{props.children}</div>
      </div>
      <CollapseButton />
    </animated.section>
  )
}

export default Card
