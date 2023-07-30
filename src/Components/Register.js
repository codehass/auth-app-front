import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [userName, SetUserName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log({ userName, email, password });
    if (validate()) {
      toast.success("Registered successfully");
      navigate("/login");
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
      toast.warning(errorMessage);
    }
    return result;
  };

  return (
    <form onSubmit={handleRegister}>
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
