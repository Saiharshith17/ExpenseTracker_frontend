import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile/Profile";
import Nav from "./components/navbar";
import ExpenseTrackerGraph from "./pages/ExpenseTrackerGraph/ExpenseTrackerGraph";
import Spends from "./pages/Spends/Spends";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Home" element={<Home />} /> 
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
      </Routes>
    </Router>
  );
};

export default App;
