import React from "react";
import "../styles/Login.css"; // Use the same CSS file

const CustomBox = ({ children, className }) => {
  return <div className={`login-box ${className}`}>{children}</div>;
};

export default CustomBox;
