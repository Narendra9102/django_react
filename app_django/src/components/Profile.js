import React from 'react';
import NewBar from './NewBar';
import './Profile.css'; 

const Profile = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/'; 
  };

  return (
    <div>
      <NewBar handleLogout={handleLogout} />
      <div className="profile-container"> 
        <h1 className="profile-heading">Profile Page</h1> 
        
        <div className="profile-details">
          <p><span className="profile-label">Name:</span> {localStorage.uname}</p> 
          <p><span className="profile-label">E-Mail:</span> {localStorage.email}</p>
          <p><span className="profile-label">Phone No:</span> {localStorage.phone_no}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
