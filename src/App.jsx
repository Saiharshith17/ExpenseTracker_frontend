import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile/Profile";
import Nav from "./components/navbar";
import ExpenseTrackerGraph from "./pages/ExpenseTrackerGraph/ExpenseTrackerGraph";
import Spends from "./pages/Spends/Spends";
import Home from "./pages/Home/Home";
import Converter from "./pages/Converter/Converter";
import { HeroGeometric } from "./components/blocks/HeroSection";
import Dashboard from "./pages/Dashboard/Dashboard";
import SpendsInsights from "./pages/SpendsInsights/SpendsInsights";
import ExchangeRateChart from "./pages/compare/compare";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/dashboard" element={<Dashboard />} /> 
      <Route path="/" element={<>
              <HeroGeometric />
            </>} /> 
        <Route path="/l" element={<ExchangeRateChart />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Home" element={ <>
              <Nav />
              <Home />
            </>} /> 
        <Route
          path="/Converter"
          element={
            <>
              <Nav />
              <Converter />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Nav />
              <Profile />
            </>
          }
        />
        <Route
          path="/ExpenseTrackerGraph"
          element={
            <>
            <Nav />
              <ExpenseTrackerGraph />
        
            </>
          }
        />
        <Route
          path="/Spends"
          element={
            <>
            <Nav />
              <Spends />
        
            </>
          }
        />
        <Route
          path="/SpendsInsights"
          element={
            <>
            <Nav />
              <SpendsInsights />
        
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
