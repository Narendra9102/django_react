import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import NewBar from '../components/NewBar';
import './FertilizerDetails.css';

const FertilizerDetail = () => {
  const { id } = useParams();
  const [fertilizer, setFertilizer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFertilizer = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/fertilizer/${id}/`);
        setFertilizer(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching fertilizer details.');
        setLoading(false);
      }
    };

    fetchFertilizer();
  }, [id]);

  const handleBuyNow = () => {
    if (fertilizer) {
      navigate(`/fertilizer/${fertilizer.f_id}/fertilizerbuying`);
    } else {
      console.log("Fertilizer details are still loading...");
    }
  };
  

  const handleAddToCart = () => {
    console.log('Adding product to cart...');
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    console.log('Product:', fertilizer);
    
    const isfertilizerInCart = cartItems.some(item => item.f_id === fertilizer.f_id);
    console.log('Is Product in Cart:', isfertilizerInCart);
  
    if (isfertilizerInCart) {
      alert('Product is already in your cart.');
    } else {
      const updatedCartItems = [...cartItems, fertilizer];
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
      alert('Product added to cart.');
    }
  };

  return (
    <div>
      <div className="head"><NewBar /></div>
      <div className="product-container">
        {loading && <div>Loading...</div>}
        {error && <div className="error">{error}</div>}
        {fertilizer && (
          <div>
            <img className="product-image" src={fertilizer.image} alt={fertilizer.name} />
            <div className="product-details">
              <h2>{fertilizer.name}</h2>
              <p className="price">&#8377; {fertilizer.price}</p>
              <p className="category">{fertilizer.category}</p>
              <p>{fertilizer.description}</p>
              <div className="action-buttons">
                <button className="buy-button" onClick={handleBuyNow}>Buy Now</button>
                <button className="cart-button" onClick={handleAddToCart}>Add to Cart</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FertilizerDetail;
