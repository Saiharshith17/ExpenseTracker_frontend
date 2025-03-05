import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

//const SERVER_BASE_URL = "http://Expens-KongA-ChasZNdaOM4K-1208155051.ap-south-1.elb.amazonaws.com";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Function to refresh token
  const refreshToken = async () => {
    console.log("Inside Refresh Token");
    const refreshToken = localStorage.getItem("refreshToken");

    const response = await fetch(`http://localhost:9898/auth/v1/refreshToken`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
      body: JSON.stringify({ token: refreshToken }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.token);
      console.log(`Tokens after refresh: ${data.refreshToken} ${data.accessToken}`);
      return true;
    }
    return false;
  };

  // Function to handle login
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:9898/auth/v1/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
      body: JSON.stringify({ username: userName, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("refreshToken", data.token);
      localStorage.setItem("accessToken", data.accessToken);
      console.log(`Login successful: ${data.token} ${data.accessToken}`);
      navigate("/home");
    }
  };

  // Auto-check if the user is logged in
  useEffect(() => {
    const checkLoginStatus = async () => {
      const refreshSuccess = await refreshToken();
      if (refreshSuccess) {
        navigate("/home");
      }
    };
    checkLoginStatus();
  }, []);

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h1 className="heading">Login</h1>
        <input
          type="text"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="text-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-input"
        />
        <button type="submit" className="button">Submit</button>
      </form>
      <button onClick={() => navigate("/signup")} className="button-goto">Goto Signup</button>
    </div>
  );
};

export default Login;
