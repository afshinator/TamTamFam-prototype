import React from "react"
import { withRouter, NavLink } from "react-router-dom"

function Navi() {
  return (
    <div className="border border-gray-300 shadow-xl">
      <div className="flex">
        <NavLink to="/" className="ml-8 mr-8 ">
          Home
        </NavLink>
        <div className="divider">|</div>
        <NavLink to="/login" className="ml-8 mr-8">
          login
        </NavLink>
        <div className="divider">|</div>
      </div>
    </div>
  )
}

export default withRouter(Navi)
