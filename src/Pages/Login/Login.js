import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="images/logo2.jpg" />
      </Link>
      <div className="login__container"></div>
    </div>
  );
}

export default Login;
