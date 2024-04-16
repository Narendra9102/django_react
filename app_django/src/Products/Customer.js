import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import NewBar from '../components/NewBar';
import './Customer.css'; 

const Customer = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/product/");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []); 

  return (
    <div>
      <NewBar handleLogout={handleLogout} />
      <div className="customer-container">
        <h2>Products</h2>
        <div className="product-cards">
          {products.map((item) => (

            <Link to={`/customer/product/${item._id}`} className="product-card product-info" key={item._id}>
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

export default Customer;
