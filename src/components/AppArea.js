import React, { useEffect } from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"

// import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./GlobalStyles"
import { lightTheme, darkTheme } from "./Themes"
import ThemeToggler from "./ThemeToggler"

import useLocalStorage from "./../utils/useLocalStorage"
// import { useTranslation } from "react-i18next"
import Login from "./Auth/Login"
import Register from "./Auth/Register"
import ForgotPassword from "./Auth/ForgotPassword"
import useAuth from "./Auth/useAuth"
import firebase, { FirebaseContext } from "../firebase"
import LandingPage from "../pages/Landing"

function AppArea(props) {
  // const {  } = props
  const [theme, setTheme] = useLocalStorage("lightOrDark")
  const user = useAuth()
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  console.log("appArea ", user)

  useEffect(() => {
    // document.body.style.backgroundSize = "cover"
    // document.body.style.backgroundRepeat = "no-repeat"
    // document.body.style.backgroundImage = `url(${image})`
    if (!theme) setTheme("light")
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <FirebaseContext.Provider value={{ user, firebase }}>
          <Switch>
            {/* <Route exact path="/" render={() => <Redirect to="/landing" />} /> */}
            <Route path="/landing" component={LandingPage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgot" component={ForgotPassword} />
          </Switch>
          <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
        </FirebaseContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default AppArea
