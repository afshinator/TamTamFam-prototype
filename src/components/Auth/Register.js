import React from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import firebase from "./../../firebase"
import useFormValidation from "./../../utils/useFormValidation"
import validateRegistration from "./../../utils/validateRegistration"
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

function Register(props) {
  const { t } = useTranslation(["app"])
  const createAcctTxt = t("app:auth:createAccount", "Create Account")
  const fnameTxt = t("app:auth:fname", "First Name")
  const lnameTxt = t("app:auth:lname", "Last Name")
  const emailTxt = t("app:auth:email", "Email")
  const choosePwTxt = t("app:auth:choosePw", "Choose Password")
  const haveAcctTxt = t("app:auth:haveAccount", "Have Account?")
  const submitTxt = t("app:btn:submit", "Submit")


  const [firebaseError, setFirebaseError] = React.useState(null)

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    isSubmitting,
  } = useFormValidation(EMPTY_FORM, validateRegistration, registerUser, t)

  const readyToSubmit = !isSubmitting // && Object.keys(errors).length < 2

  async function registerUser() {
    const { name, email, password } = values

    try {
      const response = await firebase.register(name, email, password)
      console.log("response ", { response })
    } catch (err) {
      console.error("Registration Error", err)
      setFirebaseError(err.message)
    }
  }

  return (
    <>
      <Navi />
      <div className="flex flex-col-reverse self-center max-w-md mx-auto mt-12 shadow-lg sm:flex-row">
        <div className="w-full p-4 bg-ivory">
          <div className="text-gray-700">
            <h2>{createAcctTxt}</h2>
            <p className="mt-2 text-xs text-gray-base">
              Please enter all your information to get registered
            </p>
          </div>

          <form onSubmit={handleSubmit} className="transition">
            <div className="mt-3">
              <span className="flex items-center px-3 bg-gray-300">
                <img src={userImg} className="opacity-25" alt="first name" />
                <input
                  className="w-full p-2 bg-gray-300"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.fname}
                  placeholder={fnameTxt}
                  type="text"
                  name="fname"
                />
              </span>
              {errors.fname ? (
                <p className={ERROR}>{errors.fname}</p>
              ) : (
                PLACEHOLDER
              )}
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
                to="/login"
              >
                {haveAcctTxt}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
