import React from 'react';
import NewBar from './NewBar';

const Fertilizer = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/'; 
  };

  return (
    <div>
      <NewBar handleLogout={handleLogout} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Fertilizer Page</h1>
      </div>
    </div>
  );
};

export default Fertilizer;
