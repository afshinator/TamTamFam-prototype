import React from "react"
import { useTranslation } from "react-i18next"
import useFormValidation from "./../../utils/useFormValidation"
import validateLogin from "./validateLogin"
import firebase from "./../../firebase"
import { FirebaseContext } from "../../firebase"
import Navi from "../Navi"
import {
  CardTitle,
  InputBox,
  LinkTo,
  SubmitButton,
  ERROR,
  PW_MIN_LENGTH,
} from "./misc"
import envelopeImg from "../../assets/icons/envelope.svg"
import keyImg from "../../assets/icons/key.svg"

const EMPTY_FORM = {
  email: "",
  password: "",
}

function Login(props) {
  const { user } = React.useContext(FirebaseContext)
  const { t } = useTranslation(["app"])
  const loginTxt = t("app:auth:login", "Login").toUpperCase()
  const loginMsg = t("app:auth:loginMsg", "Enter credentials")
  const loggedInMsg = t("app:auth:alreadyLoggedIn", "A user already logged in")
  const emailTxt = t("app:auth:email", "Email")
  const enterPwTxt = t("app:auth:enterPw", "Enter Password")
  const needAcctTxt = t("app:auth:needAccount", "Need Account?")
  const forgetPw = t("app:auth:forgetPw", "Forget pw?")
  const badPwTxt = t("app:auth:badPw", "Bad Pw")
  const badUserTxt = t("app:auth:badUser", "Bad User")

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
    const { email, password } = values

    try {
      const response = await firebase.login(email, password)
      console.log("Auth response:", { response })
    } catch (err) {
      console.error("Authentication Error", err)
      if (err.message.includes("user may have been deleted")) {
        setFirebaseError(badUserTxt)
      } else if (err.message.includes("password is invalid")) {
        setFirebaseError(badPwTxt)
      } else {
        setFirebaseError(err.message)
      }
    }
  }

  const readyToSubmit =
    !user &&
    !isSubmitting &&
    !firebaseError &&
    Object.keys(errors).length === 0 &&
    values.email &&
    values.password.length >= PW_MIN_LENGTH

  console.log("errs ", errors, values)

  return (
    <>
      <Navi />
      <div className="flex flex-col-reverse self-center max-w-md mx-auto mt-12 shadow-lg sm:flex-row">
        <div className="w-full p-4 bg-red-100 rounded-sm appCard ">
          <CardTitle title={loginTxt}>
            {user ? loggedInMsg : loginMsg}
          </CardTitle>
          <form onSubmit={handleSubmit} className="transition">
            <div className="mt-3">
              <InputBox
                src={envelopeImg}
                alt="email address"
                values={values}
                errors={errors}
                field="email"
                handleChange={handleChange}
                handleBlur={(e) => {
                  setFirebaseError(null)
                  handleBlur(e)
                }}
                placeholder={emailTxt}
                disabled={user}
              />
              <InputBox
                src={keyImg}
                alt="password"
                values={values}
                errors={errors}
                field="password"
                handleChange={handleChange}
                handleBlur={(e) => {
                  setFirebaseError(null)
                  handleBlur(e)
                }}
                placeholder={enterPwTxt}
                disabled={user}
              />

              {firebaseError && <p className={ERROR}>{firebaseError}</p>}
            </div>
            <hr className="mt-4" />
            <div className="flex items-center justify-between mt-4">
              <SubmitButton
                readyToSubmit={readyToSubmit}
                txt={loginTxt}
                values={values}
              />
              <LinkTo to="/forgot" text={forgetPw} />
              <LinkTo to="/register" text={needAcctTxt} />
            </div>
          </form>
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
