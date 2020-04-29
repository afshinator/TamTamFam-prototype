import React from "react"
import Card from "./Card"
import { Button } from "./../styles/index"
import { useTranslation } from "react-i18next"

function LanguageSwitcher() {
  const { t, i18n } = useTranslation(["translation"])
  const changeLanguage = (code) => {
    i18n.changeLanguage(code)
  }
  return (
    <Card title={"change language"}>
      <Button
        type="button"
        disabled={i18n.language === "es"}
        onClick={() => changeLanguage("es")}
        className="mr-2"
      >
        {t("translation:es")}
      </Button>
      <Button type="button" disabled={i18n.language === "en"} onClick={() => changeLanguage("en")}>
        {t("translation:en")}
      </Button>
    </Card>
  )
}

export default LanguageSwitcher
