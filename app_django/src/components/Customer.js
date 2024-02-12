import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewBar from './NewBar';

const Customer = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/'); 
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
