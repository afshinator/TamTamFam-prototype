import React from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import useFormValidation from "./../../utils/useFormValidation"
import validateLogin from "./../../utils/validateLogin"
import firebase from "./../../firebase"
import Navi from "../Navi"
import userImg from "../../assets/icons/user.svg"
import keyImg from "../../assets/icons/key.svg"

const ERROR = "text-xs font-bold text-intlOrange"
const PLACEHOLDER = <p className={`${ERROR} opacity-0`}>_</p>

const CardTitle = (props) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl">{props.title}</h2>
      <p className="text-sm ">{props.children}</p>
    </div>
  )
}

const InputBox = (props) => {
  const [hasFocus, setFocus] = React.useState(false)
  const classes = `${ hasFocus ? 'border-intlOrange': 'border-transparent'} box-content border-2 flex items-center mt-4 bg-ivory`
  return (
    <>
      <span className={classes}>
        <img src={props.src} className="opacity-25 " alt={props.alt} />
        <input
          className={"w-full p-2"}
          onFocus={()=>{ setFocus(true) }}
          onChange={props.handleChange}
          onBlur={(e)=>{ props.handleBlur(e); setFocus(false);}}
          value={props.values[props.field]}
          type={props.field}
          name={props.field}
          placeholder={props.placeholder}
        />
      </span>
      <span>
        {props.errors[props.field] ? (
          <p className={ERROR}>{props.errors[props.field]}</p>
        ) : (
          PLACEHOLDER
        )}
      </span>
    </>
  )
}

const LinkTo = (props) => {
  return (
    <Link
      className="text-sm text-rifleGreen underline-none hover:text-bistre"
      to={props.to}
    >
      {props.text}
    </Link>
  )
}

const EMPTY_FORM = {
  name: "",
  email: "",
  password: "",
}

function Login(props) {
  const { t } = useTranslation(["app"])
  const loginTxt = t("app:auth:login", "Login").toUpperCase()
  const emailTxt = t("app:auth:email", "Email")
  const choosePwTxt = t("app:auth:choosePw", "Choose Password")
  const needAcctTxt = t("app:auth:needAccount", "Need Account?")
  const submitTxt = t("app:btn:submit", "Submit")
  const forgetPw = t("app:auth:forgetPw", "Forget pw?")

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
      <div className="flex flex-col-reverse self-center max-w-md mx-auto mt-12 shadow-lg sm:flex-row">
        <div className="w-full p-4 bg-red-100 appCard ">
          <CardTitle title={loginTxt}>
            Please enter your email and password to log in
          </CardTitle>

          <form onSubmit={handleSubmit} className="transition">
            <div className="mt-3">
              <InputBox
                src={userImg}
                alt="user icon"
                values={values}
                errors={errors}
                field="email"
                handleChange={handleChange}
                handleBlur={handleBlur}
                placeholder={emailTxt}
              />
              <InputBox
                src={keyImg}
                alt="key icon"
                values={values}
                errors={errors}
                field="password"
                handleChange={handleChange}
                handleBlur={handleBlur}
                placeholder={choosePwTxt}
              />

              {firebaseError && <p className={ERROR}>{firebaseError}</p>}
            </div>
            <hr className="mt-4"/>
            <div className="flex items-center justify-between mt-4">
              <button
                className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-400"
                disabled={!readyToSubmit}
                type="submit"
              >
                {submitTxt}
              </button>
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
