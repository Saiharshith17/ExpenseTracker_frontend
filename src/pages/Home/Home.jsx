import React from 'react';
import './Home.css'; // Add styles here, or you can convert the styles to CSS

import ExpenseTrackerGraph from '../ExpenseTrackerGraph/ExpenseTrackerGraph';
import SpendsInsights from '../SpendsInsights/SpendsInsights';
import Spends from '../Spends/Spends';
import Nav from '../../components/navbar';

const Home = () => {
  return (
    <>
    
    <div className="safe-area">
      <div className="container">
        
        <div className="content-container">
          <div className="graph-container">
            <ExpenseTrackerGraph />
          </div>
          <div className="insights-container">
            <SpendsInsights />
          </div>
        </div>
        <div className="spends-container">
          <Spends />
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
