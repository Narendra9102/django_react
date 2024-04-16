import React, { useState } from 'react';
import axios from 'axios'; 
import './BuyAdder.css'; 
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

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

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/fertilizer">Fertilizer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/buyer">Buyer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/seller">Seller</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customer">Products</NavLink>
            </li>
            <li className="nav-item add-buyer-link">
              <NavLink className={({ isActive }) => (isActive ? "nav-link active-nav" : "nav-link")} to="/buyer/add">
                <FontAwesomeIcon icon={faUserPlus} /> Add Buyer
              </NavLink>
            </li>
            <li className="nav-item" style={{marginLeft:580}}>
              <NavLink className="nav-link" to="/profile">
                <FontAwesomeIcon icon={faUser} /> {localStorage.uname}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <br/><br/>
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

          <button type="submit" className="submit-button">Add Seller</button>
        </form>
      </div>
    </div>
  );
}
