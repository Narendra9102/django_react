import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faUserPlus , faSignInAlt } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item1">
            <NavLink className="nav-link" exact="true" to="/" ><FontAwesomeIcon icon={faHome} /> Home</NavLink>
          </li>
          <li className="nav-item" >
            <NavLink className="nav-link" to="/registration" ><FontAwesomeIcon icon={faUserPlus} /> Register</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login" ><FontAwesomeIcon icon={faSignInAlt} /> Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
