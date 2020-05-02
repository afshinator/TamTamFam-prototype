import React from "react"
import { withRouter, NavLink } from "react-router-dom"
import { FirebaseContext } from "../firebase"

function Navi() {
  const { user, firebase } = React.useContext(FirebaseContext)

  return (
    <div className="">
      <div className="flex">
        <NavLink to="/" className="mx-3 ">
          Home
        </NavLink>
        <div className="divider">|</div>
        {user && (
          <>
            <div className="divider">|</div>
            <NavLink to="/create" className="header-link">
              submit
            </NavLink>
          </>
        )}
        <div className="divider">|</div>
        <div className="flex">
          {user ? (
            <>
              <div className="mx-3">{user.displayName}</div>
              <div className="divider">|</div>
              <div className="mx-3" onClick={() => firebase.logout()}>logout</div>
            </>
          ) : (
            <NavLink to="/login" className="mx-3">
              login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  )
}

export default withRouter(Navi)
