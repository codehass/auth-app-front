import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [userName, SetUserName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(e) {
    e.preventDefault();
    console.log({ userName, email, password });
    SetUserName("");
    SetEmail("");
    setPassword("");
  }

  return (
    <form onClick={handleRegister}>
      <h2>Register </h2>
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
          <label>Email</label>
          <input
            type="email"
            placeholder="Entry your email"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
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
      <button type="submit">Register</button>
      <Link to="/login">Login</Link>
    </form>
  );
};

export default Register;
