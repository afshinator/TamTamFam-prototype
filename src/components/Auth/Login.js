import React from "react";
import Card from './../Card';

function Login(props) {
  const [login, setLogin] = React.useState(true);

  return (
    <Card title="Login/Create Account" >
      <h2 className="">{login ? "Login" : "Create Account"}</h2>
      <form className="">
        {!login && (
          <input type="text" placeholder="Your name" autoComplete="off" />
        )}
        <input type="email" placeholder="Your email" autoComplete="off" />
        <br />
        <input type="password" placeholder="Choose a secure password" />
        <div className="flex ">
          <button type="submit" className="button pointer mr2">
            Submit
          </button>
          <br />
          <button
            type="button"
            className="pointer button"
            onClick={() => setLogin(prevLogin => !prevLogin)}
          >
            {login ? "Need to create an account?" : "Already have an account?"}
          </button>
        </div>
      </form>
    </Card>
  )

}

export default Login;
