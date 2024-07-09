import React from 'react';
import { NavLink } from 'react-router-dom';
import './NewBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faFlask, faStore, faShoppingBag, faBoxOpen, faSearch } from '@fortawesome/free-solid-svg-icons';

const NewBar = () => {

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/'; 
    };
    
    return (
        <nav className="navbar2 navbar-expand-lg">
            <div className="container">
                <ul className="navbar2-nav">
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => (isActive ? "nav-link active-nav2" : "nav-link")} to="/fertilizer">
                            <FontAwesomeIcon icon={faFlask} style={{marginRight: 3}} /> Fertilizer
                        </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle">
                            <FontAwesomeIcon icon={faShoppingBag} style={{marginRight: 3}} />Buyer
                        </div>
                        <div className="dropdown-menu">
                            <NavLink className={({ isActive }) => (isActive ? "dropdown-item active-nav2" : "dropdown-item")} to="/buyer/">Buyer</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "dropdown-item active-nav2" : "dropdown-item")} to="/buyer/badd">Add</NavLink>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle">
                            <FontAwesomeIcon icon={faStore} style={{marginRight: 3}} /> Seller
                        </div>
                        <div className="dropdown-menu">
                            <NavLink className={({ isActive }) => (isActive ? "dropdown-item active-nav2" : "dropdown-item")} to="/seller/">Seller</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "dropdown-item active-nav2" : "dropdown-item")} to="/seller/sadd">Add</NavLink>
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => (isActive ? "nav-link active-nav2" : "nav-link")} to="/customer">
                            <FontAwesomeIcon icon={faBoxOpen} style={{marginRight: 3}} /> Products
                        </NavLink>
                    </li>
                    <li className="nav-item search-item">
                        <div className="search-box">
                            <FontAwesomeIcon icon={faSearch} className="search-icon" />
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search"
                            />
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => (isActive ? "nav-link active-nav2" : "nav-link")} to="/addcart">
                            <FontAwesomeIcon icon={faShoppingCart} /> Cart
                        </NavLink>
                    </li>
                    <li className="nav-item dropdown" id='profile'>
                        <div className="nav-link dropdown-toggle">
                            <img className='img' src="/download.png" alt={localStorage.getItem('uname')} />
                        </div>
                        <div className="dropdown-menu">
                            <NavLink className={({ isActive }) => (isActive ? "dropdown-item active-nav2" : "dropdown-item")} to="/profile">Profile</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "dropdown-item active-nav2" : "dropdown-item")} to="/" onClick={handleLogout}>Logout</NavLink>
                        </div>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default NewBar;

