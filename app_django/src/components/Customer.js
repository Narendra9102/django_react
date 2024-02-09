import React from 'react';
import { useNavigate } from 'react-router-dom';

const Customer = () => {
  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem('token');

    navigate('/');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Customer Page</h1>
      <p>This is the customer page content.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Customer;