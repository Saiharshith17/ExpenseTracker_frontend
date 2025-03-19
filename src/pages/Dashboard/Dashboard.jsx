import React from "react";
import "./Dashboard.css";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const Dashboard = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Spends",
        data: [5000, 2000, 4500, 6000, 1000, 3500, 2000, 1000, 4000, 1500, 5000, 4500],
        backgroundColor: "#888",
        
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#888",
      },
    ],
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="profile">
          <button className="profile-btn"><b>ExpenseTracker</b></button>
        </div>
        <nav className="nav">
          <a href="/Home">Home</a>
          <a href="/Converter">Converter</a>
          <a href="/Spends">Spends</a>
          <a href="/ExpenseTrackerGraph">Analysis</a>
          <a href="/SpendsInsights">SpendsInsights</a>
        </nav>
        <a href="/profile">
        <img
          className="profile-img"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Profile"
        />
      </a>
      </header>
      <main className="dashboard-main">
        <h1>Dashboard</h1>
        <div className="stats">
          <div className="card">
            <h2>Total Transactions</h2>
            <p>265</p>
            <span>+20.1% from last month</span>
          </div>
          <div className="card">
            <h2>Spends</h2>
            <p>+23500</p>
            <span>+180.1% from last month</span>
          </div>
          <div className="card">
            <h2>Credits</h2>
            <p>+12,234</p>
            <span>+19% from last month</span>
          </div>
          <div className="card">
            <h2>Net Amount</h2>
            <p>-11,234</p>
            <span>+20% from last month</span>
          </div>
        </div>
        <div className="flex-box">
        <div className="chart-section">
          <h2>Overview</h2>
          <Bar data={data} />
        </div>
        <div className="recent-Transactions">
          <h2>Recent Transactions</h2>
          <p>You made 265 Transactions this month.</p>
          <ul>
    <li>
    <span className="name">Jack</span>
    <span>-</span>
    <span className="amount">₹500</span>
  </li>
  <li>
    <span className="name">Olivia</span>
    <span>-</span>
    <span className="amount">₹1,200</span>
  </li>
  <li>
    <span className="name">Sophia</span>
    <span>-</span>
    <span className="amount">₹300</span>
  </li>
  <li>
    <span className="name">Jack</span>
    <span>-</span>
    <span className="amount">₹500</span>
  </li>
  <li>
    <span className="name">Olivia</span>
    <span>-</span>
    <span className="amount">₹1,200</span>
  </li>
  <li>
    <span className="name">Sophia</span>
    <span>-</span>
    <span className="amount">₹300</span>
  </li>
</ul>
        </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
