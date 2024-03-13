import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Seller.css'

const Seller = () => {
  const navigate = useNavigate();
  const [sellers, setsellers] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  useEffect(() => {
    const getSellers = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/seller/");
        setsellers(res.data);
      } catch (error) {
        console.error("Error fetching buyers:", error);
      }
    };

    getSellers();
  }, []);

  return (
    <div className="seller-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/fertilizer">Fertilizer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/buyer">Buyer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/seller">Seller</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customer">Products</NavLink>
            </li>
            <li className="nav-item add-buyer-link">
              <NavLink className="nav-link" to="/seller/add">
                <FontAwesomeIcon icon={faUserPlus} /> Add Seller
              </NavLink>
            </li>
            <li className="nav-item" style={{marginLeft:600}}>
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
      <h2>Sellers</h2>
      <div className="sellers-grid">
        {sellers.map((seller) => (
          <div key={seller._id} className="seller-card">
            <img src={seller.image} alt={seller.name} className="seller-image" />
            <div className="seller-info">
              <h3 className='bn'>Name : {seller.name}</h3>
              <p className='bn'>Phone No: {seller.phno}</p>
              <p className='bn'>Email: {seller.email}</p>
              <Link to={`/seller/${seller._id}`} className="cont-btn">Contact Us</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seller;
