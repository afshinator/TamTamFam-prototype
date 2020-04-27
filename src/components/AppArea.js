import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Card from "./Card";

export const StyledAppArea = styled.main`
  height: 100vh;
`;

function AppArea(props) {
  const { t, i18n } = useTranslation(["translation", "alert"]);
  const { lastKnownLocation, liveGeoData, userPrefs } = props;
  const [txt, setTxt] = useState("");
  console.log("AppArea props ", props);
  console.info('language: ', i18n.language)

  const changeLanguage = code => {
    i18n.changeLanguage(code);
  };


  useEffect(()=> {
  // Check to see if we have no idea what their location is:
  // No live geo data, no last location stored, no user-pref object

  if (!liveGeoData.latitude && !lastKnownLocation && !userPrefs) {
    // On app startup it takes a while to get the location; once browser decides asking for
    // permission from user for geolocation fails or gets denied, we have text in the error object,
    // so display a message to user if we don't have anything in the error object yet...
    if (liveGeoData.error !== null) {
      // TODO: show something to let user know to enable geolocation...
      setTxt( t('alert:geolocation:no-idea', 'no idea') )
      console.info(
        "No idea where you are, Please allow geolocation or enter it manually:",
        liveGeoData
      )
    } else {
      setTxt(t('alert:geolocation:waiting-for-permission', 'wait permis'))
      console.info("waiting for permissions?")
    }
  } else {
    setTxt( t('alert:geolocation:we-have-data') )
    console.info("NOW WE HAVE SOME INFO? ", liveGeoData)
  }
  }, [t, liveGeoData, liveGeoData.latitude, lastKnownLocation, userPrefs])

  const cardTitle = t('alert:status')

  return (
    <StyledAppArea>
      <Card></Card>
      <Card title={cardTitle}>{txt}</Card>
      <button type="button" disabled={ i18n.language === "es"}
      onClick={() => changeLanguage("es")}>
        {t("translation:es")}
      </button>
      <button type="button" disabled={ i18n.language === "en"}
      onClick={() => changeLanguage("en")}>
        {t("translation:en")}
      </button>
      <h1>{t("alert:hello", "wtf")}</h1>
      {/* <p>{t('alert:content.text', 'Welcome here.')}</p> */}
    </StyledAppArea>
  );
}

export default AppArea;
