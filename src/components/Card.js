import React from "react"

const Card = (props) => {
  return (
    <section className="flex max-w-md p-3 m-6">
      <div className="w-full">
        <h1 className="text-2xl leading-tight text-blue-700">{props.title || "Generic card"}</h1>
        <div className="">{props.children}</div>
      </div>
    </section>
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
