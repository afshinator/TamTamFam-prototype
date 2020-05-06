/* eslint-disable no-unused-vars */
import React from "react"
import Navbar from "./Navbar.js"
import Footer from "./Footer.js"
import title from "../assets/title-TamTamFam2.png"
import styled from "styled-components"
import tw from "twin.macro"
// import image from "../assets/atsimevu.jpg"
import image from "../assets/img-orig.jpg"
import Navi from "../components/Navi"

// const PAGE_BKGD_COLOR = "text-gray-300"
const PAGE_BKGD_COLOR = "text-gray-100"

// items-center content-center justify-center
const PageContainer = tw.div`relative 
flex flex-col pt-16 pb-32`
const LandingPageContainer = styled(PageContainer)`
  min-height: 75vh;
`

const BackgroundWallpaper = ({ imageUrl, overlayOpacity }) => {
  return (
    <div
      className="absolute top-0 w-full h-full bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <span
        id="blackOverlay"
        className="absolute w-full h-full bg-black"
        style={{ opacity: overlayOpacity || 0.2 }}
      ></span>
    </div>
  )
}

const HeroMessage = () => {
  return (
    <div className="container relative mx-auto">
      <div className="flex flex-wrap items-center">
        <div className="w-full px-4 ml-auto mr-auto text-center lg:w-6/12">
          <div className="pr-12">
            <h2 className="text-5xl font-semibold text-white">
              Connect with other folks in the drum and dance community
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Are you a fan of traditional drumming and/or dancing? This site is for you. Here
              you'll be able to schedule drum jams, dance workshops and classes, etc...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const WallpaperSlant = () => {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none"
      style={{ height: "70px", transform: "translateZ(0px)" }}
    >
      <svg
        className="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          className={`${PAGE_BKGD_COLOR} fill-current`}
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
  )
}

const TopCard = (props) => {
  return (
    <div className={`w-full px-4 text-center md:w-4/12 ${props.classes}`}>
      <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
        <div className="flex-auto px-4 py-5">
          <div
            className={`inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white 
          rounded-full shadow-lg ${props.circleColor}`}
          >
            <i className="fas fa-retweet"></i>
            {/* <i className="fas fa-award"></i> <i className="fas fa-fingerprint"></i> */}
          </div>
          <h6 className="text-xl font-semibold">{props.title}</h6>
          <p className="mt-2 mb-4 text-gray-600">{props.children}</p>
        </div>
      </div>
    </div>
  )
}

export default function LandingPage() {
  return (
    <LandingPageContainer>
      <BackgroundWallpaper imageUrl={image} overlayOpacity={".4"} />
      <Navi></Navi>
      <HeroMessage />
      <WallpaperSlant />

      <section className="pb-20 -mt-24 bg-gray-300">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap">
            <TopCard title="First Card" classes="pt-6 lg:pt-12" circleColor="bg-red-400">
              Divide details about your product or agency work into parts. A paragraph describing a
              feature will be enough.
            </TopCard>
            <TopCard title="Second card" circleColor="bg-blue-400">
              Keep you user engaged by providing meaningful information. Remember that by this time,
              the user is curious.
            </TopCard>
            <TopCard title="Third Card" classes="pt-6" circleColor="bg-green-400">
              Write a few lines about each one. A paragraph describing a feature will be enough.
              Keep you user engaged!.
            </TopCard>
          </div>
        </div>
      </section>

      
      <div>


      </div>
    </LandingPageContainer>
  )
}
