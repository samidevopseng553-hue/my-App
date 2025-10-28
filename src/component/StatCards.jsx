import React from 'react';
import './css/StatCards.css';

const StatCards = () => {
  const stats = [
    { title: 'Total Students', value: 125, icon: '👨‍🎓', color: '#4e73df' },
    { title: 'Occupied Rooms', value: 80, icon: '🏠', color: '#1cc88a' },
    { title: 'Available Rooms', value: 45, icon: '🛏️', color: '#36b9cc' },
    { title: 'Monthly Revenue', value: '$12,450', icon: '💰', color: '#f6c23e' },
  ];

  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card" style={{ borderTopColor: stat.color }}>
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-info">
            <h3>{stat.title}</h3>
            <p>{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
