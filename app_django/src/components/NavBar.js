import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faUserPlus , faSignInAlt } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <nav className="navbara navbar-expand-lg navbar-dark bg-dark">
      <div className="containera">
        <ul className="navbara-nav">
          <li className="nava-item1">
            <NavLink className={({ isActive }) => (isActive ? "nava-link active-nava" : "nava-link")} exact="true" to="/" ><FontAwesomeIcon icon={faHome} /> Home</NavLink>
          </li>
          <li className="nava-item" >
            <NavLink className={({ isActive }) => (isActive ? "nava-link active-nava" : "nava-link")} to="/registration" ><FontAwesomeIcon icon={faUserPlus} /> Register</NavLink>
          </li>
          <li className="nava-item">
            <NavLink className={({ isActive }) => (isActive ? "nava-link active-nava" : "nava-link")} to="/login" ><FontAwesomeIcon icon={faSignInAlt} /> Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
