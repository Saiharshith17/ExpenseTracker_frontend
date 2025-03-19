import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // Import the CSS file

function Nav() {
  return (
    <nav className="nav-container">
      <a href="/" className="logo">ExpenseTrackerApp</a>
      <ul className="nav-links">
        <li><a href="/Home">Home</a></li>
        <li><a href="/Dashboard">Dashboard</a></li>
        <li><a href="/Spends">Spends</a></li>
        <li><a href="/ExpenseTrackerGraph">Analysis</a></li>
        <li><a href="/Converter">Converter</a></li>
      </ul>
      <Link to="/profile">
        <img
          className="profile-img"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Profile"
        />
      </Link>
    </nav>
  );
}

export default Nav;
