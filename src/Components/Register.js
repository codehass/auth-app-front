import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../assets/register.css";
import "react-toastify/dist/ReactToastify.css";

const { v4: uuidv4 } = require("uuid");

const Register = () => {
  const [userName, SetUserName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const fakeAPICall = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const token = uuidv4();
        resolve(token);
      }, 1000);
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // console.log({ userName, email, password });
    if (validate()) {
      toast.success("Registered successfully", {
        position: toast.POSITION.TOP_CENTER,
      });

      fakeAPICall({
        username: userName,
        email: email,
        password: password,
      })
        .then((token) => {
          localStorage.setItem("jwtToken", token);
          navigate("/login");
        })
        .catch((error) => {
          console.log("Error during registration:", error);
        });
    }

    SetUserName("");
    SetEmail("");
    setPassword("");
  };

  const validate = () => {
    let result = true;
    let errorMessage = "Please enter the value in";
    if (userName === "" || userName === null) {
      result = false;
      errorMessage += " Username";
    }
    if (email === "" || email === null) {
      result = false;
      errorMessage += " Email";
    }
    if (password === "" || password === null) {
      result = false;
      errorMessage += " Password";
    }

    if (!result) {
      toast.warning(errorMessage, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    return result;
  };

  return (
    <form class="register" onSubmit={handleRegister}>
      <h2 className="form-title">Register </h2>
      <div>
        <div class="group-input">
          <label>User Name</label>
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => SetUserName(e.target.value)}
            className="input"
          />
        </div>
        <div class="group-input">
          <label>Email</label>
          <input
            type="email"
            placeholder="Entry your email"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
            className="input"
          />
        </div>
        <div class="group-input">
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
        Register
      </button>
      <div className="link">
        <p class="signup-link"> Already registered?</p>
        <Link to="/login">Login</Link>
      </div>
    </form>
  );
};

export default Register;
