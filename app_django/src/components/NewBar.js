import React from 'react';
import { NavLink } from 'react-router-dom';
import './NewBar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const NewBar = ({ handleLogout }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => (isActive ? "nav-link active-nav" : "nav-link")} to="/fertilizer">Fertilizer</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/buyer">Buyer</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/seller">Seller</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => (isActive ? "nav-link active-nav" : "nav-link")} to="/customer">Products</NavLink>
                    </li>
                    <li className="nav-item" style={{ marginLeft:710}}>
                        <NavLink className={({ isActive }) => (isActive ? "nav-link active-nav" : "nav-link")} to="/profile">
                            <FontAwesomeIcon icon={faUser} /> {localStorage.getItem('uname')}
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" onClick={handleLogout}>
                            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NewBar;
