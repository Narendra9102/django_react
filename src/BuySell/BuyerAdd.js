import React, { useState } from 'react';
import axios from 'axios'; 
import './BuyAdder.css'; 
import { useNavigate } from 'react-router-dom';
import NewBar from '../components/NewBar';

export default function BuyerAdd() {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [phno, setPhno] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);
    formData.append('phno', phno);
    formData.append('email', email);
    formData.append('address', address);
    formData.append('category', category);
    formData.append('price', price);
    
    try {
      await axios.post("http://127.0.0.1:8000/api/buyer/", formData);
      console.log('Buyer added successfully');
      navigate('/buyer');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.email) {
        setErrorMessage(error.response.data.email[0]);
      } else {
        setErrorMessage('An error occurred while adding the buyer.'); 
      }
    }
  };

  return (
    <div>
      <div className="head"><NewBar /></div>
      <br/>
      <div className="buyer-add-container">
        <h2>Add Buyer</h2>
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

          <div className="form-group">
            <label>Category:</label>
            <input type="text" name="category" value={category} onChange={(e) => setCategory(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Price:</label>
            <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
          </div>

          <button type="submit" className="submit-button">Add Buyer</button>
        </form>
      </div>
    </div>
  );
}
