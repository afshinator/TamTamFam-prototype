/* eslint-disable no-unused-vars */
import React from "react"
import Navbar from "./Navbar.js"
import Footer from "./Footer.js"
import title from "../assets/title-TamTamFam2.png"
import styled from "styled-components"
import tw from 'twin.macro'
import image from "../assets/atsimevu.jpg"
import Navi from "../components/Navi"


// items-center content-center justify-center 
const PageContainer = tw.div`relative 
flex pt-16 pb-32`
const LandingPageContainer = styled(PageContainer)`
  min-height: 75vh;
`

const AbsoluteFullPage = tw.div`absolute top-0 w-full h-full bg-center bg-cover`
const BackgroundWallpaper = styled(AbsoluteFullPage)`
  background-image: url(${image})
`


export default function LandingPage() {
  return (
    <LandingPageContainer>
      <BackgroundWallpaper />
      <Navi></Navi>
      
    </LandingPageContainer>
  )
}
