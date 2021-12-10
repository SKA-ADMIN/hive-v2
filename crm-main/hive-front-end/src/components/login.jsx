import React, { useState } from "react";
import "./assets/css/login.css";
import { Link } from "react-router-dom";
import LoginBg from "./assets/img/login.png";
import Axios from "axios";
import { Redirect } from "react-router-dom";

const Login = (e) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(true);

  const login = (e) => {
    e.preventDefault();
    /*         Axios({
          method: "POST",
          data: {
            username: email,
            password: password,
          },
          withCredentials: true,
          url: "http://localhost:3001/login",
        }).then((response) => console.log(response)); */
  };
  const register = (e) => {
    e.preventDefault();
    Axios({
      method: "POST",
      data: {
        username: email,
        password: password,
      },
      withCredentials: true,
      url: "http://localhost:3001/register",
    }).then((response) => console.log(response));
  };
  return (
    <div className="container-fluid">
      <div className="login-card">
        <div>
          <div className="login-main">
            <div>
              <Link className="logo algin-center logoHiveLogin" to="/">
                <img className="img-fluid" src={LoginBg} alt="looginpage" />
              </Link>
            </div>
            <br />
            <form className="theme-form">
              <h4>Sign in to account</h4>
              <p>Enter your email &amp; password to login</p>
              <div className="form-group">
                <label className="col-form-label">Email Address</label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="Test@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="col-form-label">Password</label>
                <div className="form-input position-relative">
                  <input
                    className="form-control"
                    type="password"
                    placeholder="*********"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="show-hide">
                    <span className="show"> </span>
                  </div>
                </div>
              </div>
              <div className="form-group mb-0">
                <div className="checkbox p-0">
                  <input id="checkbox1" type="checkbox" />
                  <label className="text-muted" htmlFor="checkbox1">
                    Remember password
                  </label>
                </div>
                <Link to="/dashboard">
                  <button
                    className="btn btn-block w-100"
            
                    type="submit"
                  >
                    Sign in
                  </button>
                </Link>
              </div>

              <p className="mt-4 mb-0 text-center">
                Don't have account?
                <a className="ms-2" href="sign-up.html">
                  Contact Us
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
