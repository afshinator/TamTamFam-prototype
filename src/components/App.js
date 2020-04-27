import React, {useEffect} from "react";
// import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";

import {StyledForm, SuccessButton} from "../styles";
import useMobileDetect from "use-mobile-detect-hook"
import useLocalStorage from './../utils/useLocalStorage';
import useGeolocation from './../utils/useGeolocation';


function App() {
  const { t } = useTranslation();
  const [visitCount, setVisitCount] = useLocalStorage("visitCount")
  const [lastTimestamp, setLastTimestamp] = useLocalStorage('lastTimestamp')
  const [lastKnownLocation, setLastKnownLocation] = useLocalStorage('lastKnownLocation')
  const [lastKnownLocationTimestamp, setLastKnownLocationTimestamp] = useLocalStorage('lastKnownLocationTimestamp')
  const [previousLocation, setPreviousLocation] = useLocalStorage('previousLocation')
  const [previousLocationTimestamp, setPreviousLocationTimestamp] = useLocalStorage('previousLocationTimestamp')
  const [users, setUsers] = useLocalStorage("users")
  const [userPrefs, setUserPrefs] = useLocalStorage('userPrefs')
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
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{t("hello", "fallback text uh oh")}</p>
        <SuccessButton />
        <StyledForm>
          <form>
            <input type="text" placeholder="Full name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <button>Sign In</button>
          </form>
        </StyledForm>
      </header>
    </div>
  );
}

export default App;
