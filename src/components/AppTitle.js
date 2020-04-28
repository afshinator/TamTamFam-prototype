import React from "react"
import titleImg from "../assets/title-TamTamFam2.png"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import { COLORS } from "../styles"
import tw from "twin.macro"

const StyleSiteSubtitle = styled.h2`
  color: ${COLORS.TITLE_YELLOW};
`

const AppTitle = (props) => {
  const { t, i18n } = useTranslation(["app"])

  return (
    <section className="absolute top-0 right-0 w-auto max-w-md select-none">
      <img src={titleImg} alt={"TamTamFam Website"} />
      <StyleSiteSubtitle className="ml-4">{t("app:siteSubTitle", "Dance and Drum Network")}</StyleSiteSubtitle>
    </section>
  )
}

export default AppTitle
