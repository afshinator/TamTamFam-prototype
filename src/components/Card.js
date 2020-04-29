import React, { useState, useRef, useEffect } from "react"
import { useSpring, animated } from "react-spring"
import pointUp from "../assets/arrow-thick-to-top.svg"

const ToggleHeightButton = () => {
  return (
    <div className="absolute top-0 left-0">
      <img src={pointUp} className="" alt="collapse me" />
    </div>
  )
}

const Card = (props) => {
  const [collapsed, setCollapsed] = useState(false)
  const [height, setHeight] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight)
    }
    console.log("->>", height)
  }, [ref.current])

  const collapseStyleProps = useSpring({
    opacity: 1, from: {opacity: 0}
  })

  return (
    <animated.section
      className="relative max-w-md p-3 m-6 overflow-hidden bg-orange-300 opacity-0"
      style={collapseStyleProps}
      ref={ref}
    >
      <div className="w-full">
        <h1
          className="text-2xl text-blue-700"
          onClick={() => {
            setCollapsed(!collapsed)
          }}
        >
          {props.title}
        </h1>
        <div className="">{props.children}</div>
      </div>
      <ToggleHeightButton />
    </animated.section>
  )
}

export default Card

/*
    <div className="flex max-w-md p-6 m-6 bg-gray-100 rounded-lg rounded-t-none shadow-xl">
      <div className="pt-1 ml-6">
        <h1 className="text-2xl leading-tight text-blue-700">{props.title || "Generic card"}</h1>
        <p className="text-base leading-normal text-gray-700">{props.children}</p>
      </div>
    </div>
*/
