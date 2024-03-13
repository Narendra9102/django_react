import React from 'react';
import NewBar from '../components/NewBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Customer.css'; 

const Fertilizer = () => {

  const navigate = useNavigate();
  const [fertilizers, setFertilizers] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');

  };
  useEffect(() => {
    const getFertilizers = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/fertilizer/");
        setFertilizers(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getFertilizers();
  }, []); 

  return (
    <div>
      <NewBar handleLogout={handleLogout} />
      <div className="customer-container">
        <h2>Fertilizer</h2>
        <div className="product-cards">
          {fertilizers.map((item) => (

            <Link to={`/fertilizer/${item._id}`} className="product-card product-info" key={item._id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>&#8377; {item.price}</p>
              <p>{item.category}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fertilizer;
