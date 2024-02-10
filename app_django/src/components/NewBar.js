import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 

const NewBar = ({ handleLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/customer/fertilizer">Fertilizer</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/customer/buysell">Buy/Sell</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/customer">Products</NavLink>
          </li>
          <li className="nav-item" style={{marginLeft:1100}}>
            <NavLink className="nav-link" to="/" onClick={handleLogout}>Logout</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NewBar;
