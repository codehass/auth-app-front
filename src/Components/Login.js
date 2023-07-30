// Login.js

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../assets/register.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      const storedUsername = localStorage.getItem("username");
      const storedPassword = localStorage.getItem("password");

      if (userName === storedUsername && password === storedPassword) {
        toast.success("Login successful!", {
          position: toast.POSITION.TOP_CENTER,
        });
        navigate("/");
      } else {
        toast.error("Invalid credentials. Please try again.", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  };

  const validate = () => {
    let result = true;
    let errorMessage = "Please enter the value in ";
    if (userName === "" || userName === null) {
      result = false;
      errorMessage += " Username";
    }
    if (password === "" || password === null) {
      result = false;
      errorMessage += " Password";
    }

    if (!result) {
      toast.warning(errorMessage);
    }

    return result;
  };

  return (
    <form className="register" onSubmit={handleLogin}>
      <h2 className="form-title">Login </h2>
      <div>
        <div className="group-input">
          <label>User Name</label>
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="input"
          />
        </div>
        <div className="group-input">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <button className="btn" type="submit">
        Login
      </button>

      <div className="link">
        <p className="signup-link"> No account?</p>
        <Link to="/register">Register</Link>
      </div>
    </form>
  );
};

export default Login;
