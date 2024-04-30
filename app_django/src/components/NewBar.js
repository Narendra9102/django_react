import React from 'react';
import { NavLink } from 'react-router-dom';
import './NewBar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const NewBar = () => {
    return (
        <nav className="navbar2 navbar-expand-lg">
            <div className="container">
                <ul className="navbar2-nav">
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => (isActive ? "nav-link active-nav2" : "nav-link")} to="/fertilizer">Fertilizer</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => (isActive ? "nav-link active-nav2" : "nav-link")} to="/buyer">Buyer</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => (isActive ? "nav-link active-nav2" : "nav-link")} to="/seller">Seller</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => (isActive ? "nav-link active-nav2" : "nav-link")} to="/customer">Products</NavLink>
                    </li>
                    <li className="nav-item" style={{ marginLeft: 480}}>
                        <div className="search-box">
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search"
                            />
                        </div>
                    </li>

                    <li className="nav-item" style={{ marginLeft: 5}}>
                        <NavLink className={({ isActive }) => (isActive ? "nav-link active-nav2" : "nav-link")} to="/addcart">
                            <FontAwesomeIcon icon={faShoppingCart} /> Cart
                        </NavLink>
                    </li>
                    <li className="nav-item" style={{ marginLeft:5}}>
                        <NavLink className={({ isActive }) => (isActive ? "nav-link active-nav2" : "nav-link")} to="/profile">
                            <FontAwesomeIcon icon={faUser} /> {localStorage.getItem('uname')}
                        </NavLink>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
};

export default NewBar;
