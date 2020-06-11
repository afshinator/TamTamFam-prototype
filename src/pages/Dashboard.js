import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { FirebaseContext } from "../firebase"
import { useSpring, animated } from "react-spring"


import Navi from "../components/Navi"

export default function Landing() {
  const { user } = React.useContext(FirebaseContext)
  const { t } = useTranslation(["landing"])
  const [s, setS] = useState(null)
  
  useEffect(() => {

    return () => {

    }
  }, [])

  return (
    <>
      <Navi />
      <div id="playerTarget" className="w-1/2 h-48"></div>
    </>
  )
}
