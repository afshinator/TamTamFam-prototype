import React, { useState } from "react"
import FirebaseContext from "./../../firebase/context"

function ForgotPassword() {
  const { firebase } = React.useContext(FirebaseContext)
  const [resetPasswordEmail, setResetPasswordEmail] = useState("")
  const [isPasswordReset, setIsPasswordReset] = useState(false)
  const [passwordResetError, setPasswordResetError] = useState(null)

  const handleResetPassword = async (e) => {
    try {
      await firebase.resetPassword(resetPasswordEmail)
      setIsPasswordReset(true)
      setPasswordResetError(null)
    } catch (e) {
      console.error("Error sending email", e.message)
      setPasswordResetError(e.message)
      setIsPasswordReset(false)
    }
  }

  return (
    <div>
      <input
        type="email"
        className="input"
        placeholder="Provide your account email"
        onChange={(e) => setResetPasswordEmail(e.target.value)}
      />
      <div>
        <button className="" onClick={handleResetPassword}>
          Reset Password
        </button>
      </div>
      { isPasswordReset && <p>Check email to reset password</p> }
      { passwordResetError && <p className="">{passwordResetError}</p>}
    </div>
  )
}

export default ForgotPassword
