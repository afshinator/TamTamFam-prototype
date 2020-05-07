/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./globalStyles"
import { lightTheme, darkTheme } from "./Themes"
import ThemeToggler from "./ThemeToggler"
import Allerta from "../assets/Allerta-Regular.ttf"
import useMobileDetect from "use-mobile-detect-hook"
import useLocalStorage from "./../utils/useLocalStorage"
import useGeolocation from "./../utils/useGeolocation"
import AppArea from "./AppArea"

function App() {
  const [theme, setTheme] = useLocalStorage('lightOrDark')
  const toggleTheme = () => { theme === 'light' ? setTheme('dark') : setTheme('light' )}

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
    if ( !theme ) setTheme("light")
    setLastTimestamp(Date.now())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AppArea
        visitCount={visitCount}
        lastTimestamp={lastTimestamp}
        lastKnownLocation={lastKnownLocation}
        detectMobile={detectMobile}
        liveGeoData={liveGeoData}
        users={users}
        userPrefs={userPrefs}
      ></AppArea>
      <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

export default App
