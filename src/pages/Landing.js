import React from "react"
import { useSpring, animated } from "react-spring"
import Navbar from "./Navbar.js"
import Footer from "./Footer.js"
import styled from "styled-components"
// import image from "../assets/img-orig.jpg"
import image from "../assets/atsimevu.jpg"
import SvgUpwardDancer from "../assets/upward-dancer.svg"
import SvgConga1 from "../assets/conga1.svg"
import SvgDjembe1 from "../assets/djembe1.svg"

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

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

const HeroMessage = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))

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
            <h1 className="text-5xl font-semibold text-white">TamTamFam</h1>
            <p className="mt-4 text-lg text-gray-300">
              Online network for the dance and drum community. Join the fam, book a jam, use your
              online cam.
            </p>
          </div>
        </div>
      </div>
    </animated.div>
  )
}

const WallpaperSlant = () => {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none"
      style={{ height: "70px", transform: "translateZ(0)" }}
    >
      <svg
        className="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon className="fill-current text-ttfgray" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
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

const TopCard = ({ img, circleColor, ctrClasses, classes, alt, title, children }) => {

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
              style={{transform: 'rotate(7deg)'}}
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
  return (
    <>
      <Navbar transparent />
      <main>
        <BackgroundWallpaper imageUrl={image} overlayOpacity={".4"}>
          <HeroMessage />
          <WallpaperSlant />
        </BackgroundWallpaper>

        <section className="pb-20 -mt-24 bg-ttfgray">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap">
              <TopCard
                title="First Card"
                classes="bg-ttfgray-0"
                ctrClasses="pt-6 lg:pt-12"
                circleColor="bg-ttfyellow-3"
                img={SvgConga1}
              >
                Divide details about your product or agency work into parts. A paragraph describing
                a feature will be enough.
              </TopCard>
              <TopCard
                title="Second card"
                classes="bg-ttfgray-0"
                circleColor="bg-ttfyellow-4"
                img={SvgUpwardDancer}
              >
                Keep you user engaged by providing meaningful information. Remember that by this
                time, the user is curious.
              </TopCard>
              <TopCard
                title="Third Card"
                classes="bg-ttfgray-0"
                ctrClasses="pt-6"
                circleColor="bg-ttfyellow-5"
                img={SvgDjembe1}
              >
                Write a few lines about each one. A paragraph describing a feature will be enough.
                Keep you user engaged!.
              </TopCard>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full px-4 ml-auto mr-auto md:w-5/12">
                <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center text-gray-600 bg-gray-100 rounded-full shadow-lg">
                  <i className="text-xl fas fa-user-friends"></i>
                </div>
                <h3 className="mb-2 text-3xl font-semibold leading-normal">
                  Working with us is a pleasure
                </h3>
                <p className="mt-4 mb-4 text-lg font-light leading-relaxed text-gray-700">
                  Don't let your uses guess by attaching tooltips and popoves to any element. Just
                  make sure you enable them first via JavaScript.
                </p>
                <p className="mt-0 mb-4 text-lg font-light leading-relaxed text-gray-700">
                  The kit comes with three pre-built pages to help you get started faster. You can
                  change the text and images and you're good to go. Just make sure you enable them
                  first via JavaScript.
                </p>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                  className="mt-8 font-bold text-gray-800"
                >
                  Check Tailwind Starter Kit!
                </a>
              </div>

              <div className="w-full px-4 ml-auto mr-auto md:w-4/12">
                <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white bg-pink-600 rounded-lg shadow-lg">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
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
                        className="text-pink-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">Top Notch Services</h4>
                    <p className="mt-2 font-light text-white text-md">
                      The Arctic Ocean freezes every winter and much of the sea-ice then thaws every
                      summer, and that process will continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="absolute top-0 left-0 right-0 bottom-auto w-full -mt-20 overflow-hidden pointer-events-none"
            style={{ height: "80px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="text-white fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>

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
                  <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center text-pink-600 bg-pink-300 rounded-full shadow-lg">
                    <i className="text-xl fas fa-rocket"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">A growing company</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    The extension comes with three pre-built pages to help you get started faster.
                    You can change the text and images and you're good to go.
                  </p>
                  <ul className="mt-6 list-none">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold text-pink-600 uppercase bg-pink-200 rounded-full">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Carefully crafted components</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold text-pink-600 uppercase bg-pink-200 rounded-full">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Amazing page examples</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold text-pink-600 uppercase bg-pink-200 rounded-full">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Dynamic components</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-center mb-24 text-center">
              <div className="w-full px-4 lg:w-6/12">
                <h2 className="text-4xl font-semibold">Here are our heroes</h2>
                <p className="m-4 text-lg leading-relaxed text-gray-600">
                  According to the National Oceanic and Atmospheric Administration, Ted, Scambos,
                  NSIDClead scentist, puts the potentially record maximum.
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
                    <h5 className="text-xl font-bold">Ryan Tompson</h5>
                    <p className="mt-1 text-sm font-semibold text-gray-500 uppercase">
                      Web Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="w-8 h-8 mb-1 mr-1 text-white bg-blue-400 rounded-full outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="w-8 h-8 mb-1 mr-1 text-white bg-blue-600 rounded-full outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="w-8 h-8 mb-1 mr-1 text-white bg-pink-500 rounded-full outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
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
                    <h5 className="text-xl font-bold">Romina Hadid</h5>
                    <p className="mt-1 text-sm font-semibold text-gray-500 uppercase">
                      Marketing Specialist
                    </p>
                    <div className="mt-6">
                      <button
                        className="w-8 h-8 mb-1 mr-1 text-white bg-red-600 rounded-full outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="w-8 h-8 mb-1 mr-1 text-white bg-blue-600 rounded-full outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
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
                    <h5 className="text-xl font-bold">Alexa Smith</h5>
                    <p className="mt-1 text-sm font-semibold text-gray-500 uppercase">
                      UI/UX Designer
                    </p>
                    <div className="mt-6">
                      <button
                        className="w-8 h-8 mb-1 mr-1 text-white bg-red-600 rounded-full outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="w-8 h-8 mb-1 mr-1 text-white bg-blue-400 rounded-full outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="w-8 h-8 mb-1 mr-1 text-white bg-gray-800 rounded-full outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
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
                    <h5 className="text-xl font-bold">Jenna Kardi</h5>
                    <p className="mt-1 text-sm font-semibold text-gray-500 uppercase">
                      Founder and CEO
                    </p>
                    <div className="mt-6">
                      <button
                        className="w-8 h-8 mb-1 mr-1 text-white bg-pink-500 rounded-full outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                      <button
                        className="w-8 h-8 mb-1 mr-1 text-white bg-red-600 rounded-full outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="w-8 h-8 mb-1 mr-1 text-white bg-blue-400 rounded-full outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="w-8 h-8 mb-1 mr-1 text-white bg-gray-800 rounded-full outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative block pb-20 bg-gray-900">
          <div
            className="absolute top-0 left-0 right-0 bottom-auto w-full -mt-20 overflow-hidden pointer-events-none"
            style={{ height: "80px", transform: "translateZ(0)" }}
          >
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
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container px-4 mx-auto lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap justify-center text-center">
              <div className="w-full px-4 lg:w-6/12">
                <h2 className="text-4xl font-semibold text-white">Build something</h2>
                <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-500">
                  Put the potentially record low maximum sea ice extent tihs year down to low ice.
                  According to the National Oceanic and Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center mt-12">
              <div className="w-full px-4 text-center lg:w-3/12">
                <div className="inline-flex items-center justify-center w-12 h-12 p-3 text-gray-900 bg-white rounded-full shadow-lg">
                  <i className="text-xl fas fa-medal"></i>
                </div>
                <h6 className="mt-5 text-xl font-semibold text-white">Excelent Services</h6>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
              </div>
              <div className="w-full px-4 text-center lg:w-3/12">
                <div className="inline-flex items-center justify-center w-12 h-12 p-3 text-gray-900 bg-white rounded-full shadow-lg">
                  <i className="text-xl fas fa-poll"></i>
                </div>
                <h5 className="mt-5 text-xl font-semibold text-white">Grow your market</h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
              </div>
              <div className="w-full px-4 text-center lg:w-3/12">
                <div className="inline-flex items-center justify-center w-12 h-12 p-3 text-gray-900 bg-white rounded-full shadow-lg">
                  <i className="text-xl fas fa-lightbulb"></i>
                </div>
                <h5 className="mt-5 text-xl font-semibold text-white">Launch time</h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 bg-gray-900 lg:pt-0">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-center -mt-48 lg:-mt-64">
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-gray-300 rounded-lg shadow-lg">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">Want to work with us?</h4>
                    <p className="mt-1 mb-4 leading-relaxed text-gray-600">
                      Complete this form and we will get back to you in 24 hours.
                    </p>
                    <div className="relative w-full mt-8 mb-3">
                      <label
                        className="block mb-2 text-xs font-bold text-gray-700 uppercase"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white rounded shadow focus:outline-none focus:shadow-outline"
                        placeholder="Full Name"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block mb-2 text-xs font-bold text-gray-700 uppercase"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white rounded shadow focus:outline-none focus:shadow-outline"
                        placeholder="Email"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block mb-2 text-xs font-bold text-gray-700 uppercase"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white rounded shadow focus:outline-none focus:shadow-outline"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="mt-6 text-center">
                      <button
                        className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-gray-900 rounded shadow outline-none active:bg-gray-700 hover:shadow-lg focus:outline-none"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Send Message
                      </button>
                    </div>
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
