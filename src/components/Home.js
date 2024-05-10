import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './Home.css';

export default function Home() {
  return (
    <div className='home-container'>
      <NavBar /><br /><br /><br />
      <div className='home-content'>
        <h2 className='heading'>Welcome to Digital Storefront</h2>
        <p className='subheading'>Empowering Farmers, Connecting Communities</p>
        <p className='description'>
          Our platform bridges the gap between farmers and consumers, enabling farmers to sell their produce directly
          to buyers. By eliminating middlemen, we ensure fair prices for farmers and fresh, high-quality products for consumers.
        </p>
        <div className='features'>
          <div className='feature'>
            <h3 className='feature-title'>Explore Products</h3>
            <p className='feature-description'>
              Discover a wide variety of fresh produce, including fruits, vegetables, dairy products, and more.
            </p>
            <Link to='/customer' className='feature-link'>
              <button className='feature-button'>Explore Now</button>
            </Link>
          </div>
          <div className='feature'>
            <h3 className='feature-title'>Find Buyers</h3>
            <p className='feature-description'>
              Connect with local buyers and expand your customer base by showcasing your farm-fresh products on our platform.
            </p>
            <Link to='/buyer' className='feature-link'>
              <button className='feature-button'>Find Buyers</button>
            </Link>
          </div>
          <div className='feature'>
            <h3 className='feature-title'>Join as Seller</h3>
            <p className='feature-description'>
              Are you a farmer looking to sell your products directly to consumers? Join our platform and start selling today!
            </p>
            <Link to='/seller' className='feature-link'>
              <button className='feature-button'>Join Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
