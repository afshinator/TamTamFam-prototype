import React from "react"
import { useTranslation } from "react-i18next"
import Card from "./../Card"
import useFormValidation from "./../../utils/useFormValidation"
import validateLogin from "./../../utils/validateLogin"
import firebase from './../../firebase';

const ERROR = "text-red-600"
const PLACEHOLDER = <p className="p-3"></p>

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
}

// Login is both the Login and the Create Account form - for now
function Login(props) {
  const { t } = useTranslation(["app"])
  const loginTxt = t("app:auth:login", "Login")
  const createAcctTxt = t("app:auth:createAccount", "Create Account")
  const nameTxt = t("app:auth:name", "Name")
  const emailTxt = t("app:auth:email", "Email")
  const choosePwTxt = t("app:auth:choosePw", "Choose Password")
  const needAcctTxt = t("app:auth:needAccount", "Need Account?")
  const haveAcctTxt = t("app:auth:haveAccount", "Have Account?")
  const submitTxt = t("app:btn:submit", "Submit")

  const [login, setLogin] = React.useState(true)
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    isSubmitting,
  } = useFormValidation(INITIAL_STATE, validateLogin, authenticateUser, t)

  async function authenticateUser() {
    const { name, email, password } = values;
    const response = login
      ? await firebase.login(email, password)
      : await firebase.register(name, email, password);
    console.log({ response });
  }

  return (
    <Card title={login ? loginTxt : createAcctTxt}>
      <form onSubmit={handleSubmit} className="flex flex-col mt-5 transition">
        {!login && (
          <input
            type="text"
            onChange={handleChange}
            value={values.name}
            name="name"
            placeholder={nameTxt}
            autoComplete="off"
            className="mb-2"
          />
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
        {errors.password ? <p className={ERROR}>{errors.password}</p> : PLACEHOLDER}
        <button
          type="submit"
          className="p-2 mt-5 mr-2 pointer"
          disabled={isSubmitting}
          style={{ background: isSubmitting ? "grey" : "orange" }}
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
    </Card>
  )
}

export default Login
