import React from 'react';
import './SpendsInsights.css'; // Import the CSS file

const SpendsInsights = () => {
  const insightsData = [
    { id: '1', label: 'Status', value: 'At Risk' },
    { id: '2', label: 'Amount limit', value: '10,000 Rs.' },
    { id: '3', label: 'Most Spend Category', value: 'Shopping' },
  ];

  return (
    <div className="spending-status-container">
      {insightsData.map((insight) => (
        <div key={insight.id} className="insight-item">
          {insight.id}. {insight.label}: {insight.value}
        </div>
      ))}
    </div>
  );
};

export default SpendsInsights;
