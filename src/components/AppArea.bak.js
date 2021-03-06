import React, { useState, useEffect } from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import Login from "./Auth/Login"
import ForgotPassword from "./Auth/ForgotPassword"
import Card from "./Card"
import Navi from "./Navi"
import AppTitle from "./AppTitle"
import { Button } from "../styles"
import LanguageSwitcher from "./LaungageSwitcher"

import useAuth from "./Auth/useAuth"
import firebase, { FirebaseContext } from "../firebase"
import image1 from "../assets/atsimevu.jpg"
import LandingPage from '../pages/Landing';

const AppAreaImg = styled.div`
  height: 100vh;
  background: url(${image1}) no-repeat center center fixed;
  background-size: cover;
`

export const StyledAppArea = styled.main`
  height: 100vh;
`
const STARTUP_DELAY = 1700

/* AppArea contains
    the routes, 
    the navigation links at top to switch routes,
    AppTitle,
    LanguageSwitcher,
*/
function AppArea(props) {
  const { t, i18n } = useTranslation(["translation", "alert"])
  const { lastKnownLocation, liveGeoData, userPrefs } = props
  const [readyToGo, setReadyToGo] = useState(false)
  const [txt, setTxt] = useState("")

  // console.log(browserLocation)
  // console.log("AppArea props ", props)
  // console.info("language: ", i18n.language)

  useEffect(() => {
    setTimeout(() => {
      setReadyToGo(true)
    }, STARTUP_DELAY)
  }, [])

  useEffect(() => {
    // Check to see if we have no idea what their location is:
    // No live geo data, no last location stored, no user-pref object

    if (!liveGeoData.latitude && !lastKnownLocation && !userPrefs) {
      // On app startup it takes a while to get the location; once browser decides asking for
      // permission from user for geolocation fails or gets denied, we have text in the error object,
      // so display a message to user if we don't have anything in the error object yet...
      if (liveGeoData.error !== null) {
        // TODO: show something to let user know to enable geolocation...
        setTxt(t("alert:geolocation:no-idea", "no idea"))
        console.info(
          "No idea where you are, Please allow geolocation or enter it manually:",
          liveGeoData
        )
      } else {
        setTxt(t("alert:geolocation:waiting-for-permission", "wait permis"))
        console.info("waiting for permissions?")
      }
    } else {
      setTxt(t("alert:geolocation:we-have-data"))
      console.info("NOW WE HAVE SOME INFO? ", liveGeoData)
    }
  }, [t, liveGeoData, liveGeoData.latitude, lastKnownLocation, userPrefs])

  const cardTitle = t("alert:status") // Location Status card

  const user = useAuth()

  return (
    <BrowserRouter>
      <FirebaseContext.Provider value={{ user, firebase }}>
        <AppAreaImg>
          {readyToGo ? (
            <>
              <Navi />
              <Card title={cardTitle}>{txt}</Card>
              <LanguageSwitcher />
              <AppTitle />
              <h1>{t("alert:hello", "wtf")}</h1>
              <div>
                <Switch>
                  <Route exact path="/" render={() => <Redirect to="/landing" />} />
                  <Route path="/landing" component={LandingPage} />
                  <Route path="/login" component={Login} />
                  <Route path="/forgot" component={ForgotPassword} />
                </Switch>
              </div>
            </>
          ) : null}
        </AppAreaImg>
      </FirebaseContext.Provider>
    </BrowserRouter>
  )
}

export default AppArea
