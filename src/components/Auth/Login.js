import React from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Card from "./../Card"
import useFormValidation from "./../../utils/useFormValidation"
import validateLogin from "./../../utils/validateLogin"
import firebase from "./../../firebase"
import Navi from "../Navi"
import userImg from "../../assets/icons/user.svg"
import keyImg from "../../assets/icons/key.svg"

const ERROR = "text-xs font-bold text-redSalsa"
const PLACEHOLDER = <p className={`${ERROR} opacity-0`}>_</p>

const EMPTY_FORM = {
  name: "",
  email: "",
  password: "",
}

// Login is both the Login and the Create Account form - for now
function Login(props) {
  const { t } = useTranslation(["app"])
  const loginTxt = t("app:auth:login", "Login").toUpperCase()
  const createAcctTxt = t("app:auth:createAccount", "Create Account")
  const nameTxt = t("app:auth:name", "Name")
  const emailTxt = t("app:auth:email", "Email")
  const choosePwTxt = t("app:auth:choosePw", "Choose Password")
  const needAcctTxt = t("app:auth:needAccount", "Need Account?")
  const haveAcctTxt = t("app:auth:haveAccount", "Have Account?")
  const submitTxt = t("app:btn:submit", "Submit")
  const forgetPw = t("app:auth:forgetPw", "Forget pw?")

  const [login, setLogin] = React.useState(true)
  const [firebaseError, setFirebaseError] = React.useState(null)

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    isSubmitting,
  } = useFormValidation(EMPTY_FORM, validateLogin, authenticateUser, t)

  async function authenticateUser() {
    const { name, email, password } = values

    try {
      const response = login
        ? await firebase.login(email, password)
        : await firebase.register(name, email, password)
      console.log("response ", { response })
    } catch (err) {
      console.error("Authentication Error", err)
      setFirebaseError(err.message)
    }
  }

  const readyToSubmit = !isSubmitting && Object.keys(errors).length < 2

  return (
    <>
      <Navi />
      <div className="flex flex-col-reverse self-center max-w-4xl mx-auto mt-12 shadow-lg sm:flex-row">
        <div className="w-full p-4 bg-ivory">
          <div className="text-gray-700">
            <h2>{login ? loginTxt : createAcctTxt}</h2>
            <p className="mt-2 text-xs text-gray-base">
              Please enter your email and password to log in
            </p>
          </div>

          <form onSubmit={handleSubmit} className="transition">
            <div className="mt-3">
              <span className="flex items-center px-3 bg-gray-300">
                <img src={userImg} className="opacity-25" alt="user icon" />
                <input
                  className="w-full p-2 bg-gray-300"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  placeholder={emailTxt}
                  type="email"
                  name="email"
                />
              </span>
              {errors.email ? (
                <p className={ERROR}>{errors.email}</p>
              ) : (
                PLACEHOLDER
              )}
              <span className="flex items-center px-3 mt-2 bg-gray-300">
                <img src={keyImg} className="opacity-25" alt="key icon" />
                <input
                  className={"w-full p-2 bg-gray-300"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  type="password"
                  name="password"
                  placeholder={choosePwTxt}
                />
              </span>
              {errors.password ? (
                <p className={ERROR}>{errors.password}</p>
              ) : (
                PLACEHOLDER
              )}
              {firebaseError && <p className={ERROR}>{firebaseError}</p>}
            </div>
            <hr />
            <div className="flex items-center justify-between mt-4">
              <button
                className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-400"
                disabled={!readyToSubmit}
                type="submit"
              >
                {submitTxt}
              </button>

              <Link
                className="text-xs text-blue-400 underline-none hover:text-blue-600"
                to="/forgot"
              >
                {forgetPw}
              </Link>
            </div>
          </form>
        </div>
        <div className="flex flex-col justify-center w-full p-4 text-center text-white bg-darkLava ">
          <h4>Sign in or Sign up</h4>
          <p className="mt-2 text-sm">
            Welcome back, log in or if you don't have an account, click below to
            go to register
          </p>
          <button className="w-3/5 px-4 py-2 mx-auto mt-4 text-sm text-white bg-blue-700 hover:bg-blue-600">
            Need an Account? REGISTER
          </button>
        </div>
      </div>
    </>
  )

  /*
  return (
    <>
      <Navi />
      <Card title={login ? loginTxt : createAcctTxt}>
        <form onSubmit={handleSubmit} className="flex flex-col mt-5 transition">
          {!login && (
            <>
              <input
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                placeholder={nameTxt}
                autoComplete="off"
                className="mb-2"
              />
              {errors.name ? (
                <p className={ERROR}>{errors.name}</p>
              ) : (
                PLACEHOLDER
              )}
            </>
          )}
          <input
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            name="email"
            placeholder={emailTxt}
            autoComplete="off"
          />
          {errors.email ? <p className={ERROR}>{errors.email}</p> : PLACEHOLDER}

          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className={`mt-2 ${errors.password && ERROR}`}
            type="password"
            name="password"
            placeholder={choosePwTxt}
          />
          {errors.password ? (
            <p className={ERROR}>{errors.password}</p>
          ) : (
            PLACEHOLDER
          )}
          {firebaseError && <p className="error-text">{firebaseError}</p>}
          <button
            type="submit"
            className="p-2 mt-5 mr-2 pointer"
            disabled={!readyToSubmit}
            style={{ background: !readyToSubmit ? "grey" : "black" }}
          >
            {submitTxt}
          </button>

          <button
            type="button"
            className="mb-3 pointer"
            onClick={() => setLogin((prevLogin) => !prevLogin)}
          >
            {login ? needAcctTxt : haveAcctTxt}
          </button>
        </form>
        <div className="">
          <Link to="/forgot">{forgetPw}</Link>
        </div>
      </Card>
    </>
  )
  */
}

export default Login
