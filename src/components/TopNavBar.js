import React from "react"
import { withRouter, NavLink } from "react-router-dom"
import { FirebaseContext } from "../firebase"

const TopNavBar = (props) => {
  return (
    // <!-- This example requires Tailwind CSS v1.4.0+ -->
    <div className="relative bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
          <div className="lg:w-0 lg:flex-1">
            <a href="#" className="flex">
              <img
                className="w-auto h-8 sm:h-10"
                src="/img/logos/workflow-mark-on-white.svg"
                alt="Workflow"
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden space-x-10 md:flex">
            <div className="relative">
              {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
              <button
                type="button"
                className="inline-flex items-center space-x-2 text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out group hover:text-gray-900 focus:outline-none focus:text-gray-900"
              >
                <span>Solutions</span>
                {/* <!-- Item active: "text-gray-600", Item inactive: "text-gray-400" --> */}
                <svg
                  class="w-5 h-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              {/* Where Solutions code was! */}
            </div>

            <a
              href="#"
              className="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              Docs
            </a>

            <div className="relative">
              {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
              <button
                type="button"
                className="inline-flex items-center space-x-2 text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
              >
                <span>More</span>
                {/* <!-- Item active: "text-gray-600", Item inactive: "text-gray-400" --> */}
                <svg
                  className="w-5 h-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              {/* Where More code was! */}
            </div>
          </nav>
          <div className="items-center justify-end hidden space-x-8 md:flex md:flex-1 lg:w-0">
            <a
              href="#"
              className="text-base font-medium leading-6 text-gray-500 whitespace-no-wrap hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              Sign in
            </a>
            <span className="inline-flex rounded-md shadow-sm">
              <a
                href="#"
                className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
              >
                Sign up
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* <!--
      Mobile menu, show/hide based on mobile menu state.
  
      Entering: "duration-200 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    --> */}
      <div className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
        <div className="rounded-lg shadow-lg">
          <div className="bg-white divide-y-2 rounded-lg shadow-xs divide-gray-50">
            <div className="px-5 pt-5 pb-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="w-auto h-8"
                    src="/img/logos/workflow-mark-on-white.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <nav className="grid row-gap-8">
                  <a
                    href="#"
                    className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                  >
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <div className="text-base font-medium leading-6 text-gray-900">
                      Analytics
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                  >
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                      />
                    </svg>
                    <div className="text-base font-medium leading-6 text-gray-900">
                      Engagement
                    </div>
                  </a>


                </nav>
              </div>
            </div>
            <div className="px-5 py-6 space-y-6">
              <div className="grid grid-cols-2 row-gap-4 col-gap-8">
                <a
                  href="#"
                  className="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                >
                  Docs
                </a>

              </div>
              <div className="space-y-6">
                <span className="flex w-full rounded-md shadow-sm">
                  <a
                    href="#"
                    className="flex items-center justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                  >
                    Sign up
                  </a>
                </span>
                <p className="text-base font-medium leading-6 text-center text-gray-500">
                  Existing customer?
                  <a
                    href="#"
                    className="text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500"
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(TopNavBar)
