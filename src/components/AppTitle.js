import React, { useState, useEffect } from "react"
import titleImg from "../assets/title-TamTamFam2.png"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import { COLORS } from "../styles"
import { useSpring, animated } from "react-spring"
import tw from "twin.macro"

const StyleSiteSubtitle = styled.h2`
  color: ${COLORS.TITLE_YELLOW};
`
const SubTitle = tw(StyleSiteSubtitle)`ml-4`

const AppTitle = (props) => {
  const [toggle, setToggle] = useState(false)
  const { t, i18n } = useTranslation(["app"])

  const contentProps = useSpring({
    opacity: toggle ? 0.9 : 0,
    marginTop: toggle ? 0 : -500,
  })
  
  useEffect(()=>{
    setTimeout(()=>{ setToggle(true) }, 2000)
  }, [])

  return (
    <animated.div className="absolute top-0 right-0 w-auto max-w-md select-none"
      style={contentProps}
    >
      <img src={titleImg} alt={"TamTamFam Website"} />
      <SubTitle className="ml-4">{t("app:siteSubTitle", "Dance and Drum Network")}</SubTitle>
    </animated.div>

  )
}

export default AppTitle
