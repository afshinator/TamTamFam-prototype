import React from "react"
import firebase from "./../../firebase"
import { FirebaseContext } from "../../firebase"
import { useTranslation } from "react-i18next"
import Navi from "../Navi"
import validateReg from "./validateReg"
import useFormValidation from "./../../utils/useFormValidation"
import { CardTitle, InputBox, LinkTo, SubmitButton, ERROR, PW_MIN_LENGTH } from "./misc"
import userImg from "../../assets/icons/user.svg"
import keyImg from "../../assets/icons/key.svg"

const EMPTY_FORM = {
  fname: "",
  lname: "",
  email: "",
  password: "",
}

function Register(props) {
  const { user } = React.useContext(FirebaseContext)
  const [firebaseError, setFirebaseError] = React.useState(null)
  const { t } = useTranslation(["app"])
  const registerTxt = t("app:auth:register", "Register").toUpperCase()
  const registerMsg = t("app:auth:registerMsg", "Enter info")
  const fnameTxt = t("app:auth:fname", "First Name")
  const lnameTxt = t("app:auth:lname", "Last Name")
  const emailTxt = t("app:auth:email", "Email")
  const choosePwTxt = t("app:auth:choosePw", "Choose PW")
  const forgetPw = t("app:auth:forgetPw", "Forget pw?")
  const haveAccountTxt = t("app:auth:haveAccount", "Have Account?")

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    isSubmitting,
  } = useFormValidation(EMPTY_FORM, validateReg, authenticateUser, t)

  async function authenticateUser() {
    const { fname, lname, email, password } = values // TODO:

    try {
      const response = await firebase.register(
        `${fname} ${lname}`,
        email,
        password
      )
      console.log("Auth response:", { response })
    } catch (err) {
      console.error("Authentication Error", err)
      // if (err.message.includes("user may have been deleted")) {
      //   setFirebaseError(badUserTxt)
      // } else if (err.message.includes("password is invalid")) {
      //   setFirebaseError(badPwTxt)
      // } else {
      //   setFirebaseError(err.message)
      // }
    }
  }

  const readyToSubmit =
    !user &&
    !isSubmitting &&
    !firebaseError &&
    Object.keys(errors).length === 0 &&
    values.email &&
    values.password.length >= PW_MIN_LENGTH

  return (
    <>
      <Navi />
      <div className="flex flex-col-reverse self-center max-w-md mx-auto mt-12 shadow-lg sm:flex-row">
        <div className="w-full p-4 bg-red-100 appCard ">
          <CardTitle title={registerTxt}>{registerMsg}</CardTitle>
          <form onSubmit={handleSubmit} className="transition">
            <div className="mt-3">
              <InputBox
                src={userImg}
                alt="user icon"
                values={values}
                errors={errors}
                field="text"
                name="fname"
                handleChange={handleChange}
                handleBlur={(e) => {
                  setFirebaseError(null)
                  handleBlur(e)
                }}
                placeholder={fnameTxt}
              />
              <InputBox
                src={userImg}
                alt="user icon"
                values={values}
                errors={errors}
                field="text"
                name="lname"
                handleChange={handleChange}
                handleBlur={(e) => {
                  setFirebaseError(null)
                  handleBlur(e)
                }}
                placeholder={lnameTxt}
              />
              <InputBox
                src={userImg}
                alt="user icon"
                values={values}
                errors={errors}
                field="email"
                handleChange={handleChange}
                handleBlur={(e) => {
                  setFirebaseError(null)
                  handleBlur(e)
                }}
                placeholder={emailTxt}
              />
              <InputBox
                src={keyImg}
                alt="key icon"
                values={values}
                errors={errors}
                field="password"
                handleChange={handleChange}
                handleBlur={(e) => {
                  setFirebaseError(null)
                  handleBlur(e)
                }}
                placeholder={choosePwTxt}
              />
              {firebaseError && <p className={ERROR}>{firebaseError}</p>}
            </div>
            <hr className="mt-4" />
            <div className="flex items-center justify-between mt-4">
              <SubmitButton
                readyToSubmit={readyToSubmit}
                txt={registerTxt}
                values={values}
              />
              <LinkTo to="/forgot" text={forgetPw} />
              <LinkTo to="/login" text={haveAccountTxt} />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
