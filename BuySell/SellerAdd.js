import React, { useState } from 'react';
import axios from 'axios';
import './SellAdder.css';
import { useNavigate } from 'react-router-dom';
import NewBar from '../components/NewBar';

export default function SellerAdd() {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [phno, setPhno] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [products, setProducts] = useState([{ category: '', price: '' }]);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!products.every(product => /^\d+(\.\d{1,2})?$/.test(product.price))) {
      setErrorMessage('Please enter prices in a valid decimal format (e.g., 34.00)');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);
    formData.append('phno', phno);
    formData.append('email', email);
    formData.append('address', address);
    formData.append('products', JSON.stringify(products)); 

    try {
      await axios.post("http://127.0.0.1:8000/api/seller/", formData);
      console.log('Seller added successfully');
      navigate('/seller');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.email) {
        setErrorMessage(error.response.data.email[0]);
      } else {
        setErrorMessage('An error occurred while adding the seller.');
      }
    }
  };

  const handleAddProduct = () => {
    setProducts([...products, { category: '', price: '' }]);
  };

  const handleProductChange = (index, field, value) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = value;
    setProducts(updatedProducts);
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  return (
    <div>
      <div>
      <div className="head"><NewBar /></div>
      </div>
      <br/>
      <div className="seller-add-container">
        <h2>Add Seller</h2>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form onSubmit={handleSubmit} className="seller-form">
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Image:</label>
            <input type="file" name="image" onChange={(e) => setImage(e.target.files[0])} required/>
          </div>

          <div className="form-group">
            <label>Phone Number:</label>
            <input type="text" name="phno" value={phno} onChange={(e) => setPhno(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>

          <div className="form-group">
            <label>Address:</label>
            <textarea name="address" value={address} onChange={(e) => setAddress(e.target.value)} required ></textarea>
          </div>

          {products.map((product, index) => (
            <div key={index}>
              <div className="form-group">
                <label>Category:</label>
                <input type="text" value={product.category} onChange={(e) => handleProductChange(index, 'category', e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Price:</label>
                <input type="text" value={product.price} onChange={(e) => handleProductChange(index, 'price', e.target.value)} required />
              </div>
              {index > 0 && (
                <button type="button" onClick={() => handleRemoveProduct(index)}>Remove</button>
              )}
            </div>
          ))}
          <button type="button" onClick={handleAddProduct} className='add-product-button'>Add Product</button>

          <button type="submit" className="submit-button" >Add Seller</button>
        </form>
      </div>
    </div>
  );
}
