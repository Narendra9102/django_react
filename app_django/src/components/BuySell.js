import React from 'react';
import NewBar from './NewBar';

const BuySell = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/'; 
  };

  return (
    <div>
      <NewBar handleLogout={handleLogout} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Buy/Sell Page</h1>
      </div>
    </div>
  );
};

export default BuySell;
