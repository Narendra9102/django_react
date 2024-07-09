import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserPlus, faSignInAlt, faGlobe, faInfoCircle, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbara">
      <div className="containera">
        <NavLink to="/" className="nava-name">
          <FontAwesomeIcon icon={faGlobe} /> Digital Storefront
        </NavLink>
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
        <ul className={`navbara-nav navbara-left ${isOpen ? 'active' : ''}`}>
          <li className="nava-item1">
            <NavLink className={({ isActive }) => (isActive ? "nava-link active-nava" : "nava-link")} exact="true" to="/" ><FontAwesomeIcon icon={faHome} /> Home</NavLink>
          </li>
          <li className="nava-item1">
            <NavLink className={({ isActive }) => (isActive ? "nava-link active-nava" : "nava-link")} exact="true" to="/about" ><FontAwesomeIcon icon={faInfoCircle} /> About</NavLink>
          </li>
          <li className="nava-item1">
            <NavLink className={({ isActive }) => (isActive ? "nava-link active-nava" : "nava-link")} to="/registration" ><FontAwesomeIcon icon={faUserPlus} /> Register</NavLink>
          </li>
          <li className="nava-item1">
            <NavLink className={({ isActive }) => (isActive ? "nava-link active-nava" : "nava-link")} to="/login" ><FontAwesomeIcon icon={faSignInAlt} /> Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
