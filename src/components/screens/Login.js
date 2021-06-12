import React from "react";
import { useState } from "react";

import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import { userReducer } from "../../redux/action/userAction";

import "./login.scss";

const Login = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      userReducer({
        name,
        email,
        phoneNo,
        password,
      })
    );
    history.push("/");
  };
  return (
    <div>
      <div className="login">
        <div className="center">
          <div className="top">
            <h1>Login</h1>
          </div>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="txt_field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="txt_field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="txt_field">
              <label>PhoneNo</label>
              <input
                type="tel"
                name="phoneNo"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                required
              />
            </div>
            <div className="txt_field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="submit">login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
