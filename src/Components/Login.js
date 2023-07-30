import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../assets/register.css";

const Login = () => {
  const [userName, SetUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const fakeAPICall = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const token = "fake-jwt-token";

        resolve(token);
      }, 1000);
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fakeAPICall({
        username: userName,
        password: password,
      })
        .then((token) => {
          localStorage.setItem("jwtToken", token);
          toast.success("Login successful!", {
            position: toast.POSITION.TOP_CENTER,
          });
          navigate("/");
        })
        .catch((error) => {
          console.log("Error during login:", error);
          toast.error("Invalid credentials. Please try again.", {
            position: toast.POSITION.TOP_CENTER,
          });
        });
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
    <form class="register" onSubmit={handleLogin}>
      <h2 className="form-title">Login </h2>
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
        <p class="signup-link"> No account?</p>
        <Link to="/register">Register</Link>
      </div>
    </form>
  );
};

export default Login;
