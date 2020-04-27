import React, { useEffect } from "react"
import "./App.css"
import useMobileDetect from "use-mobile-detect-hook"
import useLocalStorage from "./../utils/useLocalStorage"
import useGeolocation from "./../utils/useGeolocation"
import AppArea from "./AppArea"

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
    console.info("-----------START effects")
    if (visitCount === undefined) {
      console.info("visitCount undef")
      setVisitCount(1)
    } else {
      console.info("visitCount defined: ", visitCount)
      setVisitCount((v) => v + 1)
    }
    setLastTimestamp(Date.now())
    console.info("-----------END effects")
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <AppArea
        visitCount={visitCount}
        lastTimestamp={lastTimestamp}
        lastKnownLocation={lastKnownLocation}
        detectMobile={detectMobile}
        liveGeoData={liveGeoData}
        users={users}
        userPrefs={userPrefs}
      />
    </div>
  )
}

export default App
