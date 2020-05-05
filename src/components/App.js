/* eslint-disable no-unused-vars */
import React, { useEffect } from "react"
import { createGlobalStyle } from "styled-components"
import Allerta from "../assets/Allerta-Regular.ttf"
import useMobileDetect from "use-mobile-detect-hook"
import useLocalStorage from "./../utils/useLocalStorage"
import useGeolocation from "./../utils/useGeolocation"
import AppArea from "./AppArea"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Allerta-Regular";
    src: url(${Allerta});
  }
  body {
    /* font-family: "Allerta-Regular"; */
  }
`

/* Encloses the application, 
    gets localStorage values, updates some of them,
    sets global css,
    encloses AppArea and passes localStorage data to it.
*/
function App() {
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
    <React.Fragment>
      <GlobalStyle />
      <AppArea
        visitCount={visitCount}
        lastTimestamp={lastTimestamp}
        lastKnownLocation={lastKnownLocation}
        detectMobile={detectMobile}
        liveGeoData={liveGeoData}
        users={users}
        userPrefs={userPrefs}
      />
    </React.Fragment>
  )
}

export default App
