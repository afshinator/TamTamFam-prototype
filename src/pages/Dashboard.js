import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { FirebaseContext } from "../firebase"
import { useSpring, animated } from "react-spring"
import { Player, Boot, FileProvider } from "@vime-js/complete"

import Navi from "../components/Navi"

export default function Landing() {
  const { user } = React.useContext(FirebaseContext)
  const { t } = useTranslation(["landing"])

  useEffect(() => {
    const target = document.getElementById("playerTarget")
    const player = new Player({
      target,
      // If you'd like to initialize any props on setup, you can do so here.
      props: {
        src: "https://www.youtube.com/watch?v=jxJcqPUA53w",
        plugins: [Boot],
        providers: [FileProvider],
      },
    })
    return () => {
      player.$destroy()
    }
  }, [])

  return (
    <>
      <Navi />
      <div id="playerTarget" className="w-1/2 h-48"></div>
    </>
  )
}
