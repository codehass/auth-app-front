import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userName, SetUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    console.log("Login");
  }

  return (
    <form onClick={handleLogin}>
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
