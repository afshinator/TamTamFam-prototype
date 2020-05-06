/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { useDarkMode } from "./useDarkMode"
import { GlobalStyles } from "./globalStyles"
import { lightTheme, darkTheme } from "./Themes"
import ThemeToggler from "./ThemeToggler"
import Allerta from "../assets/Allerta-Regular.ttf"
import useMobileDetect from "use-mobile-detect-hook"
import useLocalStorage from "./../utils/useLocalStorage"
import useGeolocation from "./../utils/useGeolocation"
import AppArea from "./AppArea"

// const GlobalStyle = createGlobalStyle`
//   @font-face {
//     font-family: "Allerta-Regular";
//     src: url(${Allerta});
//   }
//   body {
//     /* font-family: "Allerta-Regular"; */
//   }
// `

/* Encloses the application, 
    gets localStorage values, updates some of them,
    sets global css,
    encloses AppArea and passes localStorage data to it.
*/
function App() {
  const [theme, themeToggler] = useDarkMode()

  const themeMode = theme === "light" ? lightTheme : darkTheme
  const [visitCount, setVisitCount] = useLocalStorage("visitCount")
  const [lastTimestamp, setLastTimestamp] = useLocalStorage("lastTimestamp")
  const [lastKnownLocation, setLastKnownLocation] = useLocalStorage("lastKnownLocation")
  const [lastKnownLocationTimestamp, setLastKnownLocationTimestamp] = useLocalStorage(
    "lastKnownLocationTimestamp"
  )
  const [previousLocation, setPreviousLocation] = useLocalStorage("previousLocation")
  const [previousLocationTimestamp, setPreviousLocationTimestamp] = useLocalStorage(
    "previousLocationTimestamp"
  )
  const [users, setUsers] = useLocalStorage("users")
  const [userPrefs, setUserPrefs] = useLocalStorage("userPrefs")
  const detectMobile = useMobileDetect()
  const liveGeoData = useGeolocation()
  // const { latitude, longitude, timestamp, accuracy, error } = useGeolocation()

  useEffect(() => {
    if (visitCount === undefined) {
      setVisitCount(1)
    } else {
      setVisitCount((v) => v + 1)
    }
    setLastTimestamp(Date.now())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <ThemeToggler theme={theme} toggleTheme={themeToggler} />
      <AppArea
        visitCount={visitCount}
        lastTimestamp={lastTimestamp}
        lastKnownLocation={lastKnownLocation}
        detectMobile={detectMobile}
        liveGeoData={liveGeoData}
        users={users}
        userPrefs={userPrefs}
      ></AppArea>
    </ThemeProvider>
  )
}

export default App
