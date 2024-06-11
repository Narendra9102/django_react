import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewBar from '../components/NewBar';
import { useParams } from 'react-router-dom';
import './Buyerprofile.css'; 

const BuyerProfile = () => {
  const { id } = useParams();
  const [buyer, setBuyer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');


  useEffect(() => {
    const fetchBuyer = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/buyer/${id}/`);
        const data = response.data;
        setBuyer(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching buyer details.');
        setLoading(false);
      }
    };

    fetchBuyer();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!buyer) {
    return <div>No buyer found.</div>;
  }

  return (
    <div>
      <div>
        <NewBar />
      </div>
      <h2>Buyer Details</h2><br/><br/>
    <div className="buyer-profile">
      <h2>Buyer Profile</h2>
      <table className="buyer-table">
        <tbody>
          <tr>
            <th>Image</th>
            <td><img src={buyer.image} alt="Buyer" className="buyer-image" /></td>
          </tr>    
          <tr>
            <th>Buyer ID:</th>
            <td>{buyer.b_id}</td>
          </tr>
          <tr>
            <th>Name:</th>
            <td>{buyer.name}</td>
          </tr>
          <tr>
            <th>Phone Number:</th>
            <td>{buyer.phno}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{buyer.email}</td>
          </tr>
          <tr>
            <th>Category</th>
            <td>{buyer.category}</td>
          </tr>
          <tr>
            <th>Price</th>
            <td>{buyer.price}</td>
          </tr>

        </tbody>
      </table>
    </div>
    </div>
  );
};

export default BuyerProfile;
