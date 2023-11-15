import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; 

function NavBar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/registration">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </div>
  );
}

export default NavBar;
