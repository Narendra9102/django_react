import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewBar from '../components/NewBar';
import { useParams } from 'react-router-dom';
import './Sellerprofile.css';

const SellerProfile = () => {
  const { id } = useParams(); 
  const [seller, setSeller] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSeller = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/seller/${id}/`);
        const data = response.data;
        setSeller(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching seller details.');
        setLoading(false);
      }
    };

    fetchSeller();
  }, [id]);

  return (
    <div>
      <div>
        <NewBar />
      </div>
      <h2>Seller Details</h2><br/><br/>
    <div className="seller-profile-container">
      {loading && <div className="loader">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {seller && (
        <div>
          <h2 className="seller-heading">Seller Profile</h2>
          <table className="seller-table">
            <tbody>
              <tr>
                <th>Image</th>
                <td><img src={seller.image} alt="Seller" className="seller-image" /></td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{seller.name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{seller.email}</td>
              </tr>
              <tr>
                <th>Phone Number</th>
                <td>{seller.phno}</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>{seller.address}</td>
              </tr>
              <tr>
                <th>Category</th>
                <td>{seller.category}</td>
              </tr>
              <tr>
                <th>Price</th>
                <td>{seller.price}</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      )}
    </div>
    </div>
  );
};

export default SellerProfile;
