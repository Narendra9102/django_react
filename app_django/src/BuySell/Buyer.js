import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewBar from '../components/NewBar';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Buyer.css'

const Buyer = () => {
  const [buyers, setBuyers] = useState([]);

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
    <div>
      <div className="head"><NewBar /></div>
      <div  className="buyer-container">
      <div className="buyer-heading-container">
        <h2 className="buyers-heading">Buyers</h2>
        <NavLink className="add-link" to="/buyer/add">
          <FontAwesomeIcon icon={faUserPlus} /> Add Buyer
        </NavLink>
      </div>
      <div className="buyers-grid">
        {buyers.map((buyer) => (
          <div key={buyer._id} className="buyer-card">
            <img src={buyer.image} alt={buyer.name} className="buyer-image" />
            <div className="buyer-info">
              <h3 className='bn'>Name: {buyer.name}</h3>
              <p className='bn'>Phone No: {buyer.phno}</p>
              <p className='bn'>Email: {buyer.email}</p>
              <Link to={`/buyer/${buyer._id}`} className="cont-btn">Contact Us</Link>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Buyer;
