import React from "react"
import { useTranslation } from "react-i18next"
import { useSpring, animated } from "react-spring"

import Navi from "../components/Navi"
import HeroImg from "../assets/hero1.png"

export default function Landing() {
  const { t } = useTranslation(["landing"])

  return (
    <>
      <Navi />
      <section className="mt-8 body-font">
        <div className="container flex flex-col items-center px-5 py-12 mx-auto md:flex-row">
          <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <h2 className="mb-4 text-3xl font-medium sm:text-4xl">
              A Social Network for the
              <br className="hidden lg:inline-block" />
              Drum and Dance Community
            </h2>
            <p className="mb-8 leading-relaxed">
              Welcome. We've got a lot of good things in the works. Our hope is
              to build an online place where people who share our love and
              practice of these arts can communicate with social media tools.
              <br />
              <br />
              We'll roll out the first version soon and keep adding as time goes
              on.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex px-6 py-2 text-lg text-white bg-orange-500 border-0 rounded focus:outline-none hover:bg-orange-600">
                Register
              </button>
              <button className="inline-flex px-12 py-2 ml-4 text-lg text-gray-700 bg-gray-200 border-0 rounded focus:outline-none hover:bg-gray-300">
                Login
              </button>
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
                  src="https://dummyimage.com/600x360"
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
                  src="https://dummyimage.com/601x361"
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
                  src="https://dummyimage.com/603x363"
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
                  src="https://dummyimage.com/602x362"
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
                  src="https://dummyimage.com/605x365"
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
                  src="https://dummyimage.com/606x366"
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
