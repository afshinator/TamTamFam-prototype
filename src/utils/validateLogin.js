
export default function validateLogin(values, t) {
  let errors = {};

  const emailReqTxt = t("app:auth:emailRequired", "Email required")
  const invalidEmailTxt = t("app:auth:invalidEmail", "Invalid Email")
  const pwRequiredTxt = t("app:auth:pwRequired", "pwRequired")
  const pwTooShortTxt = t("app:btn:pwTooShort", "Password too short")

  // Email Errors
  if (!values.email) {
    errors.email = emailReqTxt;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = invalidEmailTxt;
  }
  // Password Errors
  if (!values.password) {
    errors.password = pwRequiredTxt;
  } else if (values.password.length < 6) {
    errors.password = pwTooShortTxt;
  }

  return errors;
}
