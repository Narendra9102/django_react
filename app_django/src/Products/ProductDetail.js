
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';


const FertilizerDetail = () => {
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/product/${id}/`);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching Products details.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  const handleBuyNow = () => {

  };

  const handleAddToCart = () => {
    navigate('/addcart'); 

  };

  return (
    <div className="product-container">
      {loading && <div>Loading...</div>}
      {error && <div className="error">{error}</div>}
      {products && (
        <div>
          <h2>{products.name}</h2>
          <img className="product-image" src={products.image} alt={products.name} />
          <div className="product-details">
            <p className="price">&#8377; {products.price}</p>
            <p className="category">{products.category}</p>
            <p>{products.description}</p>
            <div className="action-buttons">
              <button className="buy-button" onClick={handleBuyNow}>Buy Now</button>
              <button className="cart-button" onClick={handleAddToCart}>Add to Cart</button>
            </div>
            <Link className="back-link" to="/customer">Back to Products</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default FertilizerDetail;
