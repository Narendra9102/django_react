import React from 'react';
import NewBar from './NewBar';

const Customer = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/'; 
  };

  return (
    <div>
      <NewBar handleLogout={handleLogout} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Customer Page</h1>
        <p>This is the customer page content.</p>
      </div>
    </div>
  );
};

export default Customer;
