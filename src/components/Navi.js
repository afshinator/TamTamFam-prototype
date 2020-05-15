import React from "react"
import { withRouter, NavLink } from "react-router-dom"
import { FirebaseContext } from "../firebase"
import titleImg from "../assets/site-title.png"

function Navi(props) {
  const { user, firebase } = React.useContext(FirebaseContext)
  const [menuToggle, setMenuToggle] = React.useState(false)

  // https://github.com/tailwindtoolbox/Responsive-Header/blob/master/responsive-header_v0.html

  return (
    <nav className="z-10 flex flex-wrap items-center justify-between w-full p-6 ">
      <div className="flex items-center mr-6 text-white flex-no-shrink">
        <NavLink
          className="text-white no-underline hover:text-white hover:no-underline"
          to="/"
        >
          <img src={titleImg} width="220px" alt="TamTamFam" />
        </NavLink>
      </div>

      <div className="block lg:hidden">
        <button
          onClick={() => {
            setMenuToggle((m) => !m)
          }}
          className="flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-white hover:border-white"
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

      {/* {menuToggle ? ( */}
      <div
        className="flex-grow hidden w-full pt-6 lg:flex lg:items-center lg:w-auto lg:block lg:pt-0"
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
          {user && (
            <li className="mr-3">
              <NavLink to="/create" className="k">
                some page
              </NavLink>
            </li>
          )}

          <li className="mr-3">
            <NavLink
              className="inline-block px-4 py-2 no-underline text-grey-dark hover:text-grey-lighter hover:text-underline"
              to="#"
            >
              link
            </NavLink>
          </li>
          {user ? (
            <>
              <div className="mx-3">{user.displayName}</div>
              <div className="divider">|</div>
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
      {/* ) : null} */}
    </nav>
  )

}

export default withRouter(Navi)
