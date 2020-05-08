import React from "react"
import { withRouter, NavLink } from "react-router-dom"
import { FirebaseContext } from "../firebase"
import styled from "styled-components"
import bkgdTileImg from "../assets/nav-bkgd-tile1.png"
import titleImg from "../assets/site-title.png"

const Nav = styled.nav`
  background: url(${bkgdTileImg}) repeat;
`

function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  const { user, firebase } = React.useContext(FirebaseContext)

  return (
    <Nav className="absolute top-0 z-50 flex justify-between items-center w-full h-16">
      <div className="w-48 ml-8">
        <img
          src={titleImg}
          style={{ width: "100%", height: "auto" }}
          alt="TamTamFam title"
        />
      </div>

      <div className="flex">
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
            Login / Register
          </NavLink>
        )}
      </div>
    </Nav>
  )
}

export function Navbar2(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  console.log("nav bar ", navbarOpen)
  return (
    <>
      <nav
        className={
          (props.transparent
            ? "top-0 absolute z-50 w-full"
            : "relative shadow-lg  shadow-lg") +
          " flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
        }
      >
        <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
          <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
              }
              href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
            >
              Tailwind Starter Kit
            </a>
            <button
              className="block px-3 py-1 text-xl leading-none bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i
                className={
                  (props.transparent ? "text-white" : "text-gray-800") +
                  " fas fa-bars"
                }
              ></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col mr-auto list-none lg:flex-row">
              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/landing"
                >
                  <i
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " far fa-file-alt text-lg leading-lg mr-2"
                    }
                  />{" "}
                  Docs
                </a>
              </li>
            </ul>
            <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="#pablo"
                >
                  <i
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " fab fa-facebook text-lg leading-lg "
                    }
                  />
                  <span className="inline-block ml-2 lg:hidden">Share</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="#pablo"
                >
                  <i
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " fab fa-twitter text-lg leading-lg "
                    }
                  />
                  <span className="inline-block ml-2 lg:hidden">Tweet</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="#pablo"
                >
                  <i
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " fab fa-github text-lg leading-lg "
                    }
                  />
                  <span className="inline-block ml-2 lg:hidden">Star</span>
                </a>
              </li>

              <li className="flex items-center">
                <button
                  className={
                    (props.transparent
                      ? "bg-white text-gray-800 active:bg-gray-100"
                      : "bg-pink-500 text-white active:bg-pink-600") +
                    " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                  }
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> Download
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default withRouter(Navbar)
