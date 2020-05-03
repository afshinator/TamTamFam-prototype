import React from "react"
import styled from "styled-components"
import image1 from "../assets/atsimevu.jpg"

const Container = ({children}) => {
  return (
    <div id="container">
      { children }
    </div>
  )
}

const AppAreaImg = styled(Container)`
  height: 100vh;
  background:url(${image1}) no-repeat center center fixed;
  background-size: cover;
`
export default AppAreaImg
