import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [userName, SetUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      toast.success("Registered successfully");
      navigate("/");
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
    <form onSubmit={handleLogin}>
      <h2>Login </h2>
      <div>
        <div>
          <label>User Name</label>
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => SetUserName(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <button type="submit">Login</button>
      <Link to="/register">Register</Link>
    </form>
  );
};

export default Login;
