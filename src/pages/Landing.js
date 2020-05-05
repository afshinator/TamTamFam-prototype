/* eslint-disable no-unused-vars */
import React from "react"
import Navbar from "./Navbar.js"
import Footer from "./Footer.js"
import title from "../assets/title-TamTamFam2.png"
import styled from "styled-components"
import tw from "twin.macro"
import image from "../assets/atsimevu.jpg"
import Navi from "../components/Navi"

// const PAGE_BKGD_COLOR = "text-gray-300"
const PAGE_BKGD_COLOR = "text-gray-100"

// items-center content-center justify-center
const PageContainer = tw.div`relative 
flex pt-16 pb-32`
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
    <div class="container relative mx-auto">
      <div class="flex flex-wrap items-center">
        <div class="w-full px-4 ml-auto mr-auto text-center lg:w-6/12">
          <div class="pr-12">
            <h2 class="text-5xl font-semibold text-white">
              Connect with other folks in the drum and dance community
            </h2>
            <p class="mt-4 text-lg text-gray-300">
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

export default function LandingPage() {
  return (
    <LandingPageContainer>
      <BackgroundWallpaper imageUrl={image} overlayOpacity={".4"} />
      <Navi></Navi>
      <HeroMessage />
      <WallpaperSlant />
    </LandingPageContainer>
  )
}
