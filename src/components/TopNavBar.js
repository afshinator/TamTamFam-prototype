import React from "react"
import { withRouter, NavLink } from "react-router-dom"
import { FirebaseContext } from "../firebase"
import titleImg from "../assets/title2.png"

const SiteLogo = ({ src }) => {
  return (
    <div className="flex items-center mr-6 text-white flex-no-shrink">
      <NavLink
        className="ml-3 text-white no-underline hover:text-white hover:no-underline"
        to="/"
      >
        <img src={src} width="130px" alt="TamTamFam" />
      </NavLink>
    </div>
  )
}

const contentClasses ="flex-grow w-full pt-6 lg:flex lg:items-center lg:w-auto lg:block lg:pt-0"

const TopNavBar = (props) => {
  const [menuToggle, setMenuToggle] = React.useState(false)

  return (
    <header className="fixed top-0 z-10 flex flex-wrap items-center justify-between w-full p-2">
      <div className="flex items-center flex-shrink-0 mr-6 text-white">
        <NavLink
          className="text-white no-underline hover:text-white hover:no-underline"
          to={"#"}
        >
          {/* <span className="pl-2 text-2xl">
            <i className="em em-grinning"></i> Brand McBrandface
          </span> */}
          <SiteLogo src={titleImg} />
        </NavLink>
      </div>

      <div className="block lg:hidden">
        <button
          id="nav-toggle"
          className="flex items-center px-3 py-2 text-gray-500 border border-gray-600 rounded hover:text-white hover:border-white"
          onClick={()=>{setMenuToggle(!menuToggle)}}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <nav
        className={ menuToggle ? contentClasses : `${contentClasses} hidden`}
        id="nav-content"
      >
        <ul className="items-center justify-end flex-1 list-reset lg:flex">
          <li className="mr-3">
            <NavLink
              className="inline-block px-4 py-2 text-white no-underline"
              to="#"
            >
              Active
            </NavLink>
          </li>
          <li className="mr-3">
            <NavLink
              className="inline-block px-4 py-2 text-gray-600 no-underline hover:text-gray-200 hover:text-underline"
              to="#"
            >
              link
            </NavLink>
          </li>
          <li className="mr-3">
            <NavLink
              className="inline-block px-4 py-2 text-gray-600 no-underline hover:text-gray-200 hover:text-underline"
              to="#"
            >
              link
            </NavLink>
          </li>
          <li className="mr-3">
            <NavLink
              className="inline-block px-4 py-2 text-gray-600 no-underline hover:text-gray-200 hover:text-underline"
              to="#"
            >
              link
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default withRouter(TopNavBar)
