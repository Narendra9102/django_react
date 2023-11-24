import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'; 

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
          <ul className="navbar-nav">
            <NavLink className="btn1">
              <Link className="btn3" to="/">Home</Link>
            </NavLink>
            <NavLink className="btn2">
              <Link className="btn3" to="/registration">Register</Link>
            </NavLink>
            <NavLink>
              <Link className="btn3" to="/login">Login</Link>
            </NavLink>
          </ul>
      </div>
    </nav>
  );
}

export default NavBar;