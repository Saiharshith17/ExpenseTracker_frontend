import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css"; // Ensure you create a corresponding CSS file

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const navigateToLoginScreen = async () => {
    try {
      //const SERVER_BASE_URL = "http://Expens-KongA-ChasZNdaOM4K-1208155051.ap-south-1.elb.amazonaws.com";
      const response = await fetch(`http://127.0.0.1:9898/auth/v1/signup`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
          phone_number: phoneNumber,
          password: password,
          username: userName,
        }),
        mode:"cors"
      });

      const data = await response.json();
      console.log(data);

      localStorage.setItem("accessToken", data["accessToken"]);
      localStorage.setItem("refreshToken", data["token"]);

      navigate("/home");
    } catch (error) {
      console.error("Error during sign up:", error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Sign Up</h1>
        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <input type="text" placeholder="User Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        
        <button onClick={navigateToLoginScreen} className="signup-button">Sign Up</button>
        <button onClick={() => navigate("/login")} className="login-button">Go to Login</button>
      </div>
    </div>
  );
};

export default SignUp;
