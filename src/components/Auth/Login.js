import React from "react";
import { useTranslation } from "react-i18next"
import Card from './../Card';

function Login(props) {
  const [login, setLogin] = React.useState(true);
  const { t, i18n } = useTranslation(["app"])
  const loginTxt = t("app:auth:login", "Login")
  const createAcctTxt = t("app:auth:createAccount", "Create Account")
  const nameTxt = t("app:auth:name", "Name")
  const emailTxt = t("app:auth:email", "Email")
  const choosePwTxt = t("app:auth:choosePw", "Choose Password")
  const needAcctTxt = t("app:auth:needAccount", "Need Account?")
  const haveAcctTxt = t("app:auth:haveAccount", "Have Account?")
  const submitTxt = t("app:btn:submit", "Submit")

  return (
    <Card title="Login/Create Account" >
      <h2 className="">{login ? loginTxt : createAcctTxt }</h2>
      <form className="">
        {!login && (
          <input type="text" placeholder={nameTxt} autoComplete="off" />
        )}
        <input type="email" placeholder={emailTxt} autoComplete="off" />
        <br />
        <input type="password" placeholder={choosePwTxt} />
        <div className="flex ">
          <button type="submit" className="button pointer mr2">
            {submitTxt}
          </button>
          <br />
          <button
            type="button"
            className="pointer button"
            onClick={() => setLogin(prevLogin => !prevLogin)}
          >
             {login ? needAcctTxt : haveAcctTxt }
          </button>
        </div>
      </form>
    </Card>
  )

}

export default Login;
