import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import NewBar from '../components/NewBar';
import './Seller.css'

const Seller = () => {

  const [sellers, setsellers] = useState([]);

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
    <div>
      <div className="head"><NewBar /></div>
      <div className="seller-container">
      <div className="buyer-heading-container">
        <h2 className="buyers-heading">Sellers</h2>
        <NavLink className="add-link" to="/seller/add">
          <FontAwesomeIcon icon={faUserPlus} /> Add seller
        </NavLink>
      </div>
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
    </div>
  );
};

export default Seller;
