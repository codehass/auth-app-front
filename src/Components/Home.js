import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../index.css";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (!username) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="home">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
      <h2>Welcome to the Dashboard</h2>
    </div>
  );
};

export default Home;
