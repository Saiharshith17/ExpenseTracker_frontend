import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // Import the CSS file

function Nav() {
  return (
    <nav className="nav-container">
      <span className="logo">Logo</span>
      <span className="app-name">ExpenseTrackerApp</span>
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
