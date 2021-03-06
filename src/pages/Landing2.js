import React from "react"
import { useTranslation } from "react-i18next"
import { useSpring, animated } from "react-spring"
import Navbar from "./Navbar.js"
import Footer from "./Footer.js"
// import styled from "styled-components"
// import image from "../assets/img-orig.jpg"
import image from "../assets/atsimevu.jpg"
import titleImg from "../assets/title-TamTamFam2.png"
import SvgUpwardDancer from "../assets/upward-dancer.svg"
import SvgConga1 from "../assets/conga1.svg"
import SvgDjembe1 from "../assets/djembe1.svg"
import dancersImg from "../assets/dancexx.jpg"
import calendarImg from "../assets/calendar.png"
// import communityImg from "../assets/community.svg"
import dancers2Img from "../assets/dancers.svg"

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
]

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const BackgroundWallpaper = ({ imageUrl, overlayOpacity, children }) => {
  return (
    <div
      className="relative flex items-center content-center justify-center pt-16 pb-32"
      style={{
        minHeight: "75vh",
      }}
    >
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: `url(${image})`,
          // "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
        }}
      >
        <span
          id="blackOverlay"
          className="absolute w-full h-full bg-black"
          style={{ opacity: overlayOpacity || 0.6 }}
        ></span>
      </div>
      {children}
    </div>
  )
}

const HeroMessage = ({ t }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))

  const heroMsgTxt = t(
    "landing:heroMsg",
    "Online network for the dance and drum community"
  )

  return (
    <animated.div // https://codesandbox.io/embed/rj998k4vmm
      className="container relative mx-auto"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <div className="flex flex-wrap items-center">
        <div className="w-full px-4 ml-auto mr-auto text-center lg:w-6/12">
          <div className="pr-12">
            <h1 className="hidden text-5xl font-semibold text-white">
              TamTamFam
            </h1>
            <img src={titleImg} alt="TamTamFam stlylized title" />
            <p className="mt-4 text-lg text-gray-300">{heroMsgTxt}</p>
          </div>
        </div>
      </div>
    </animated.div>
  )
}

const SvgPolygon = ({ color }) => {
  return (
    <svg
      className="absolute bottom-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 100"
      x="0"
      y="0"
    >
      <polygon
        className={`fill-current ${color}`}
        points="2560 0 2560 100 0 100"
      ></polygon>
    </svg>
  )
}

const WallpaperSlant = ({color}) => {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none"
      style={{ height: "70px", transform: "translateZ(0)" }}
    >
      <SvgPolygon color={color || "text-ttfgray"} />
    </div>
  )
}

const WallpaperSlant2 = ({ color }) => {
  return (
    <div
      className="absolute top-0 left-0 right-0 bottom-auto w-full -mt-20 overflow-hidden pointer-events-none"
      style={{ height: "80px", transform: "translateZ(0)" }}
    >
      <SvgPolygon color={color} />
    </div>
  )
}

const ListElement = (props) => {
  return (
    <li className="py-2">
      <div className="flex items-center">
        <div>
          <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold text-pink-600 uppercase rounded-full bg-ttfyellow">
            {props.children}
          </span>
        </div>
        <div>
          <h4 className="text-gray-600">{props.text || "needs text"}</h4>
        </div>
      </div>
    </li>
  )
}

// const AnimatedImage = styled.div`
// @keyframes alertPulse {
//   0% {background-color: #9A2727; opacity: 1;}
//   50% {opacity: red; opacity: 0.75; }
//   100% {opacity: #9A2727; opacity: 1;}
// }

// animation: alertPulse 2s ease-out;
// animation-iteration-count: infinite;
// opacity: 1;
// background: transparent;
// `

const TopCard = ({
  img,
  circleColor,
  ctrClasses,
  classes,
  alt,
  title,
  children,
}) => {
  return (
    <div className={`w-full px-4 text-center md:w-4/12 ${ctrClasses}`}>
      <div
        className={`relative flex flex-col w-full min-w-0 mb-8 break-words 
        bg-white rounded-lg shadow-lg ${classes}`}
      >
        <div className="flex-auto px-4 py-5">
          <div
            className={`inline-flex items-center justify-center w-24 h-16 p-3 mb-5 text-center text-white 
          rounded-full shadow-lg ${circleColor}`}
          >
            <i className="fas fa-retweet"></i>
            <img
              src={img}
              className="mt-2"
              style={{ transform: "rotate(7deg)" }}
              alt={alt}
            />
            {/* <i className="fas fa-award"></i> <i className="fas fa-fingerprint"></i> */}
          </div>
          <h6 className="text-xl font-semibold">{title}</h6>
          <p className="mt-2 mb-4 text-gray-600">{children}</p>
        </div>
      </div>
    </div>
  )
}

export default function Landing() {
  const { t } = useTranslation(["landing"])

  return (
    <>
      <Navbar />
      <main>
        <BackgroundWallpaper imageUrl={image}>
          <HeroMessage t={t} />
          <WallpaperSlant />
        </BackgroundWallpaper>

        <section className="pb-20 -mt-24 bg-ttfgray">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap">
              <TopCard
                title={t("landing:topcards:title1", "Card 1")}
                classes="bg-ttfgray-0"
                ctrClasses="pt-6 lg:pt-12"
                circleColor="bg-ttforange"
                img={SvgConga1}
              >
                title={t("landing:topcards:msg1", "Message 1")}
              </TopCard>
              <TopCard
                title={t("landing:topcards:title2", "Card 2")}
                classes="bg-ttfgray-0"
                circleColor="bg-ttfmustard"
                img={SvgUpwardDancer}
              >
                {t("landing:topcards:msg2", "Message 2")}
              </TopCard>
              <TopCard
                title={t("landing:topcards:title3", "Card 3")}
                classes="bg-ttfgray-0"
                ctrClasses="pt-6"
                circleColor="bg-ttfgreen-2"
                img={SvgDjembe1}
              >
                {t("landing:topcards:msg3", "Message 3")}
              </TopCard>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full px-4 ml-auto mr-auto md:w-5/12">
                {/* <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center text-gray-600 bg-gray-100 rounded-full shadow-lg">
                  <i className="text-xl fas fa-user-friends"></i>
                </div> */}

                <h3 className="mb-2 text-3xl font-semibold leading-normal">
                  Join a class, create a class
                </h3>
                <p className="mt-4 mb-4 text-lg font-light leading-relaxed text-gray-700">
                  <img
                    src={calendarImg}
                    className="float-right"
                    alt="calendar"
                  />
                  We've got a lot of in the works. Coming soon is the ability to
                  form groups and create and join classes. Soon you'll have
                  access to an online calendar and scheduler that will let you
                  see when and where your classes are, and when and where other
                  classes in your area are. You will also be able to see all the
                  other groups and classes around the world!
                </p>

                <p className="mt-0 mb-4 text-lg font-light leading-relaxed text-gray-700">
                  With Groups will also come the ability to message back and
                  forth and share privately or otherwise with the group members
                  or other groups.
                </p>
              </div>

              <div className="w-full px-4 ml-auto mr-auto md:w-4/12">
                <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg bg-ttfgreen-2">
                  <img
                    alt="Dance class"
                    src={dancersImg}
                    className="w-full align-top rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 block w-full"
                      style={{
                        height: "95px",
                        top: "-94px",
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="fill-current text-ttfgreen-2"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      What Classes are available?
                    </h4>
                    <p className="mt-2 font-light text-white text-md">
                      Soon you'll have one go-to place for finding all the
                      information around dance and drumming in your area, and
                      outside your area.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20 bg-ttfgray-4">
          <WallpaperSlant2 color="text-ttfgray-4" />
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-full px-4 ml-auto mr-auto md:w-4/12">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full px-4 ml-auto mr-auto md:w-5/12">
                <div className="md:pr-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center rounded-full shadow-lg bg-ttfyellow">
                    <i className="text-xl fas fa-rocket"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">Socialize</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    An online place for all drummers, dancers, and their friends
                    to chat, create & join events, post news, meet each other,
                    and who know what else.
                  </p>
                  <ul className="mt-6 list-none">
                    <ListElement text="Dancers">
                      <img src={dancers2Img} width="20px" alt="community" />
                    </ListElement>

                    <ListElement text="Drummers">
                      <i className="fab fa-html5"></i>
                    </ListElement>

                    <ListElement text="Everybody">
                      <i className="far fa-paper-plane"></i>
                    </ListElement>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48 bg-ttfgray-3">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-center mb-24 text-center">
              <div className="w-full px-4 lg:w-6/12">
                <h2 className="text-4xl font-semibold">
                  Some people you might find on this site...
                </h2>
                <p className="m-4 text-lg leading-relaxed text-gray-600">
                  Hey right now its bare bones but before long we'll have
                  all the big names on here!
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full px-4 mb-12 md:w-6/12 lg:w-3/12 lg:mb-0">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("../assets/team-1-800x800.jpg")}
                    className="max-w-full mx-auto rounded-full shadow-lg"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Mamady Keitoff</h5>
                    <p className="mt-1 text-sm font-semibold text-gray-500 uppercase">
                      Djembefola
                    </p>

                  </div>
                </div>
              </div>
              <div className="w-full px-4 mb-12 md:w-6/12 lg:w-3/12 lg:mb-0">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("../assets/team-2-800x800.jpg")}
                    className="max-w-full mx-auto rounded-full shadow-lg"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Sade</h5>
                    <p className="mt-1 text-sm font-semibold text-gray-500 uppercase">
                      Singer / Songwriter
                    </p>

                  </div>
                </div>
              </div>
              <div className="w-full px-4 mb-12 md:w-6/12 lg:w-3/12 lg:mb-0">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("../assets/team-3-800x800.jpg")}
                    className="max-w-full mx-auto rounded-full shadow-lg"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Asiana Elvis</h5>
                    <p className="mt-1 text-sm font-semibold text-gray-500 uppercase">
                      Invented Pilates
                    </p>

                  </div>
                </div>
              </div>
              <div className="w-full px-4 mb-12 md:w-6/12 lg:w-3/12 lg:mb-0">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("../assets/team-4-470x470.png")}
                    className="max-w-full mx-auto rounded-full shadow-lg"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Rebecca</h5>
                    <p className="mt-1 text-sm font-semibold text-gray-500 uppercase">
                      Some chic
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
