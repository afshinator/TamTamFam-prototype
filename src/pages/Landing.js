import React from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useSpring, animated } from "react-spring"

import Navi from "../components/Navi"
import HeroImg from "../assets/hero1.png"
import img1 from "../assets/img/feature1.png"
import img2 from "../assets/img/feature2.png"
import img3 from "../assets/img/feature3.png"
import img4 from "../assets/img/feature4.png"
import img5 from "../assets/img/feature5.png"
import img6 from "../assets/img/feature6.png"

export default function Landing() {
  const { t } = useTranslation(["landing"])
  const heroTitleTxt = t(
    "landing:hero:title",
    "Social Network for the Dance & Drum Community"
  )
  const heroMsgTxt = t("landing:hero:msg", "Coming soon...")

  return (
    <>
      <Navi />
      <section className="mt-8 body-font">
        <div className="container flex flex-col items-center px-5 py-12 mx-auto md:flex-row">
          <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <h2 className="mb-4 text-3xl font-medium sm:text-4xl">
              {heroTitleTxt}
              {/* <br className="hidden lg:inline-block" /> */}
            </h2>
            <p className="mb-8 leading-relaxed">{heroMsgTxt}</p>
            <div className="flex justify-center">
              <Link to="/register">
                <button
                  className="inline-flex px-6 py-2 text-lg text-white bg-orange-500 border-0 rounded focus:outline-none hover:bg-orange-600"
                  type="button"
                >
                  Register
                </button>
              </Link>
              <Link to="/login">
                <button
                  className="inline-flex px-12 py-2 ml-4 text-lg text-gray-700 bg-gray-200 border-0 rounded focus:outline-none hover:bg-gray-300"
                  type="button"
                >
                  Login
                </button>
              </Link>
            </div>
          </div>
          <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={HeroImg}
            />
          </div>
        </div>
      </section>
      <section className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full mb-20 text-center">
            <h3 className="mb-4 text-2xl font-medium sm:text-3xl title-font">
              Features Coming Soon
            </h3>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3 sm:w-1/2">
              <div className="relative flex">
                <img
                  alt="gallery"
                  className="absolute inset-0 object-cover object-center w-full h-full"
                  src={img1}
                />
                <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                  <h2 className="mb-1 text-sm font-medium tracking-widest text-orange-500 title-font">
                    THE SUBTITLE
                  </h2>
                  <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                    Shooting Stars
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 sm:w-1/2">
              <div className="relative flex">
                <img
                  alt="gallery"
                  className="absolute inset-0 object-cover object-center w-full h-full"
                  src={img2}
                />
                <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                  <h2 className="mb-1 text-sm font-medium tracking-widest text-orange-500 title-font">
                    THE SUBTITLE
                  </h2>
                  <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                    The Catalyzer
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 sm:w-1/2">
              <div className="relative flex">
                <img
                  alt="gallery"
                  className="absolute inset-0 object-cover object-center w-full h-full"
                  src={img3}
                />
                <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                  <h2 className="mb-1 text-sm font-medium tracking-widest text-orange-500 title-font">
                    THE SUBTITLE
                  </h2>
                  <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                    The 400 Blows
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 sm:w-1/2">
              <div className="relative flex">
                <img
                  alt="gallery"
                  className="absolute inset-0 object-cover object-center w-full h-full"
                  src={img4}
                />
                <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                  <h2 className="mb-1 text-sm font-medium tracking-widest text-orange-500 title-font">
                    THE SUBTITLE
                  </h2>
                  <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                    Neptune
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 sm:w-1/2">
              <div className="relative flex">
                <img
                  alt="gallery"
                  className="absolute inset-0 object-cover object-center w-full h-full"
                  src={img5}
                />
                <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                  <h2 className="mb-1 text-sm font-medium tracking-widest text-orange-500 title-font">
                    THE SUBTITLE
                  </h2>
                  <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                    Holden Caulfield
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 sm:w-1/2">
              <div className="relative flex">
                <img
                  alt="gallery"
                  className="absolute inset-0 object-cover object-center w-full h-full"
                  src={img6}
                />
                <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                  <h2 className="mb-1 text-sm font-medium tracking-widest text-orange-500 title-font">
                    THE SUBTITLE
                  </h2>
                  <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                    Alper Kamu
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
