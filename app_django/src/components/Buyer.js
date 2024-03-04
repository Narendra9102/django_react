import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Buyer.css';

const Buyer = () => {
  const navigate = useNavigate();
  const [buyers, setBuyers] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  useEffect(() => {
    const getBuyers = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/buyer/");
        setBuyers(res.data);
      } catch (error) {
        console.error("Error fetching buyers:", error);
      }
    };

    getBuyers();
  }, []);

  return (
    <div className="buyer-container">
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
            <li className="nav-item add-buyer-link">
              <NavLink className="nav-link" to="/customer/buysell/add">
                <FontAwesomeIcon icon={faUserPlus} /> Add Buyer
              </NavLink>
            </li>
            <li className="nav-item" style={{marginLeft:760}}>
              <NavLink className="nav-link" to="/customer/profile">
                <FontAwesomeIcon icon={faUser} /> {localStorage.uname}
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
      <h2>Buyers</h2>
      <div className="buyers-grid">
        {buyers.map((buyer) => (
          <div key={buyer._id} className="buyer-card">
            <img src={buyer.image} alt={buyer.name} className="buyer-image" />
            <div className="buyer-info">
              <h3 className='bn'>Name: {buyer.name}</h3>
              <p className='bn'>Phone No: {buyer.phno}</p>
              <p className='bn'>Email: {buyer.email}</p>
              <button className="contact-btn">Contact Us</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buyer;
