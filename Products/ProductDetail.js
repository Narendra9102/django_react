
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import NewBar from '../components/NewBar';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/product/${id}/`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching Product details.');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleBuyNow = () => {
    if (product) {
      navigate(`/product/${product.p_id}/productbuying`);
    } else {
      console.log("Fertilizer details are still loading...");
    }
  };
  

  const handleAddToCart = () => {
    console.log('Adding product to cart...');
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Cart Items:', cartItems);
    console.log('Product:', product);
    
    const isProductInCart = cartItems.some(item => item.p_id === product.p_id);
    console.log('Is Product in Cart:', isProductInCart);
  
    if (isProductInCart) {
      alert('Product is already in your cart.');
    } else {
      const updatedCartItems = [...cartItems, product];
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
      alert('Product added to cart.');
    }
  };
  

  return (
    <div>
      <div className="head"><NewBar /></div>
      <div className="customer-container">
    <div className="product-container">
      {loading && <div>Loading...</div>}
      {error && <div className="error">{error}</div>}
      {product && (
        <div>
          <img className="product-image" src={product.image} alt={product.name} />
          <div className="product-details">
            <h2>{product.name}</h2>
            <p className="price">&#8377; {product.price}</p>
            <p className="category">{product.category}</p>
            <p>{product.description}</p>
            <div className="action-buttons">
              <button className="buy-button" onClick={() => handleBuyNow(product)}>Buy Now</button>
              <button className="cart-button" onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default ProductDetail;
