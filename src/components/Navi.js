import React from "react"
import { withRouter, NavLink } from "react-router-dom"
import { FirebaseContext } from "../firebase"
import titleImg from "../assets/title2.png"
import useMedia from "./../utils/useMedia"

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

const HamburgerIcon = () => {
  return (
    <svg
      className="w-3 h-3 fill-current"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  )
}

const MenuLink = (props) => {
  return (
    <li className="mr-3">
      <NavLink
        className="inline-block px-4 py-2 no-underline"
        to={props.to || "#"}
      >
        {props.children}
      </NavLink>
    </li>
  )
}

function Navi(props) {
  const { user, firebase } = React.useContext(FirebaseContext)
  const [menuToggle, setMenuToggle] = React.useState(false)
  const widthState = useMedia(
    // Media queries
    [
      "(min-width: 1280px)",
      "(min-width: 1024px)",
      "(min-width: 768px)",
      "(min-width: 640px)",
      "(min-width: 320px)",
    ],
    // associated value (relates to above media queries by array index)
    [0, 1, 2, 3, 4],
    2 // default value
  )

  console.log("widthState ", widthState)

  return (
    <nav className="z-10 flex flex-wrap items-center justify-between w-full p-3 ">
      <SiteLogo src={titleImg} />

      <div className="block">
        <button
          onClick={() => {
            setMenuToggle((m) => !m)
          }}
          className="flex items-center px-3 py-2 border rounded text-grey\
           border-grey-dark hover:text-white hover:border-white"
        >
          <HamburgerIcon />
        </button>
      </div>

      <div
        className="flex-grow w-full pt-6 md:flex md:items-center md:w-auto md:block md:pt-0"
        id="nav-content"
      >
        <ul className="items-center justify-end flex-1 list-reset lg:flex">
          <MenuLink to="#">First Thing</MenuLink>
          <MenuLink to="#">@nd Thing</MenuLink>

          {user ? (
            <>
              <div className="mx-3">{user.displayName}</div>
              <div className="mx-3" onClick={() => firebase.logout()}>
                logout
              </div>
            </>
          ) : (
            <NavLink to="/login" className="mx-3">
              login
            </NavLink>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navi)
