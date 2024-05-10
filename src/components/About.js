import React from 'react';
import NavBar from './NavBar';
import './About.css'; 

export default function About() {
  return (
    <div className='about-container'>
      <NavBar /><br/><br/><br/>
      <div className="about-content">
        <h2>Welcome to Digital Store</h2>
        <p>At Digital Store, we are dedicated to revolutionizing the agricultural industry by providing a seamless platform for farmers, buyers, and sellers.</p>
        <h3>Empowering Farmers</h3>
        <p>Our primary goal is to empower farmers by facilitating direct transactions between buyers and sellers. If you're a farmer looking to sell your crops or products, simply log in to our platform to connect with potential buyers.</p>
        <p>Conversely, if you're looking to buy fresh produce directly from farmers, you can easily browse our listings and contact sellers directly to make purchases.</p>
        <h3>Convenience at Your Fingertips</h3>
        <p>In addition to facilitating direct transactions, we also provide a wide range of agricultural products and fertilizers available for purchase. Our platform allows users to discover nearby shops selling these products, making it convenient to find and buy everything you need for your farming activities.</p>
        <p>Similar to popular e-commerce platforms, Digital Store offers a seamless shopping experience, enabling users to browse products, compare prices, and make purchases from the comfort of their homes.</p>
      </div>
    </div>
  );
}
