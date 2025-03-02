import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const formHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="login-box">
        <Link to={"/"} className="go-back">
          Go Back
        </Link>
        <h2>Login</h2>
        <form onSubmit={formHandler}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="input-group">
            <label>Class</label>
            <input
              type="text"
              name="class"
              placeholder="Enter your class"
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
