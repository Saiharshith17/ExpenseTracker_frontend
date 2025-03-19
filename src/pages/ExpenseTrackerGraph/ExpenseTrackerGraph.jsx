import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./ExpenseTrackerGraph.css"; // Import CSS for custom styles
import Nav from "../../components/navbar";
const ExpenseTrackerGraph = () => {
  const [value, setValue] = useState(0);

  // Simulate progress animation (like React Native's duration)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(85); // Simulates progress reaching 85%
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="graph-container">
      {/* <Nav/> */}
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          textColor: "#222",
          pathColor: "#2ecc71",
          trailColor: "rgba(46, 204, 113, 0.2)",
          textSize: "20px",
        })}
      />
    </div>
  );
};

export default ExpenseTrackerGraph;
