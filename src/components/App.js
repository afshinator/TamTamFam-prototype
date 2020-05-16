/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"

import useMobileDetect from "use-mobile-detect-hook"
import useLocalStorage from "./../utils/useLocalStorage"
import useGeolocation from "./../utils/useGeolocation"
import AppArea from "./AppArea"

function App() {
  const [visitCount, setVisitCount] = useLocalStorage("vs")
  const [lastTimestamp, setLastTimestamp] = useLocalStorage("ts")
  const [lastKnownLocation, setLkl] = useLocalStorage("lkl")
  const [lastKnownLocationTs, setLklts] = useLocalStorage("lklts")
  const [users, setUsers] = useLocalStorage("u")
  const [userPrefs, setUserPrefs] = useLocalStorage("up")

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
    <AppArea
      visitCount={visitCount}
      lastTimestamp={lastTimestamp}
      lastKnownLocation={lastKnownLocation}
      detectMobile={detectMobile}
      liveGeoData={liveGeoData}
      users={users}
      userPrefs={userPrefs}
    ></AppArea>
  )
}

export default App
