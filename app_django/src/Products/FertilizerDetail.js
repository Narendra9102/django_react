
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
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

  };

  const handleAddToCart = () => {
    navigate('/addcart'); 

  };
;

  return (
    <div className="product-container">
      {loading && <div>Loading...</div>}
      {error && <div className="error">{error}</div>}
      {fertilizer && (
        <div>
          <h2>{fertilizer.name}</h2>
          <img className="product-image" src={fertilizer.image} alt={fertilizer.name} />
          <div className="product-details">
            <p className="price">&#8377; {fertilizer.price}</p>
            <p className="category">{fertilizer.category}</p>
            <p>{fertilizer.description}</p>
            <div className="action-buttons">
              <button className="buy-button" onClick={handleBuyNow}>Buy Now</button>
              <button className="cart-button" onClick={handleAddToCart}>Add to Cart</button>
            </div>
            <Link className="back-link" to="/fertilizer">Back to Fertilizers</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default FertilizerDetail;
