import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faUserPlus , faSignInAlt, faGlobe , faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <nav className="navbara">
      <div className="containera">
        <ul className="navbara-nav">
        <li className="nava-item1">
          <NavLink className="nava-name">
            <FontAwesomeIcon icon={faGlobe} /> Digital Storefront
          </NavLink>
          </li>
        </ul>
        <ul className="navbara-nav navbara-left">
          <li className="nava-item1">
            <NavLink className={({ isActive }) => (isActive ? "nava-link active-nava" : "nava-link")} exact="true" to="/" ><FontAwesomeIcon icon={faHome} /> Home</NavLink>
          </li>
          <li className="nava-item1">
            <NavLink className={({ isActive }) => (isActive ? "nava-link active-nava" : "nava-link")} exact="true" to="/about" ><FontAwesomeIcon icon={faInfoCircle} /> About</NavLink>
          </li>
          <li className="nava-item1" >
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
