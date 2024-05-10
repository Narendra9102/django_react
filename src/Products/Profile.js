import React from 'react';
import NewBar from '../components/NewBar';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Profile.css'; 

const Profile = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/'; 
  };

  return (
    <div>
      <div className="head"><NewBar handleLogout={handleLogout} /></div>
      <div className="profile-container"> 
        <h1 className="profile-heading">Profile Page</h1>
        <p class="profile-description">Welcome to your profile page. Here you can view and edit your profile information.</p> 
        
        <div className="profile-details">
          <p><span className="profile-label">Name:</span> {localStorage.uname}</p> 
          <p><span className="profile-label">E-Mail:</span> {localStorage.email}</p>
          <p><span className="profile-label">Phone No:</span> {localStorage.phone_no}</p>
        </div>
        <button class="update-profile-button">Update Profile</button> 

        <NavLink className="nav-link" to="/" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </NavLink>
        
      </div>
    </div>
  );
};

export default Profile;
