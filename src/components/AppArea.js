import React, { useState, useEffect } from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import Login from "./Auth/Login"
import ForgotPassword from "./Auth/ForgotPassword"
import useAuth from "./Auth/useAuth"
import firebase, { FirebaseContext } from "../firebase"
import LandingPage from "../pages/Landing"
import image1 from "../assets/atsimevu.jpg"
import Navi from "./Navi"

const AppAreaImg = styled.div`
  height: 100vh;
  background: url(${image1}) no-repeat center center fixed;
  background-size: cover;
`

function AppArea(props) {
  const { t, i18n } = useTranslation(["translation", "alert"])
  const user = useAuth()

  return (
    <BrowserRouter>
      <FirebaseContext.Provider value={{ user, firebase }}>
        <AppAreaImg>
          <Navi></Navi>
          <div>
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/landing" />} />
              <Route path="/landing" component={LandingPage} />
              <Route path="/login" component={Login} />
              <Route path="/forgot" component={ForgotPassword} />
            </Switch>
          </div>
        </AppAreaImg>
      </FirebaseContext.Provider>
    </BrowserRouter>
  )
}

export default AppArea
