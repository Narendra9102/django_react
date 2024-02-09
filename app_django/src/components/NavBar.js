import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item1">
            <NavLink className="nav-link" exact="true" to="/" activeClassName="active">Home</NavLink>
          </li>
          <li className="nav-item" >
            <NavLink className="nav-link" to="/registration" activeClassName="active">Register</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login" activeClassName="active">Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
