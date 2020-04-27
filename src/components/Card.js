import React from "react"
import styled from "styled-components"



const Card = (props) => {

    return (
        <div className="flex max-w-md p-6 m-6 bg-gray-100 rounded-lg shadow-xl">
        <div className="pt-1 ml-6">
          <h1 className="text-2xl leading-tight text-blue-700">
            { props.title || "Generic card"}
          </h1>
          <p className="text-base leading-normal text-gray-700">
            { props.children }
          </p>
        </div>
      </div>
    )
}

export default Card