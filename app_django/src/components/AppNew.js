import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import Home from './Home';
import Customer from '../Products/Customer';
import Fertilizer from '../Products/Fertilizer';
import Profile from '../Products/Profile';
import ProductDetail from '../Products/ProductDetail';
import Buyer from '../BuySell/Buyer';
import Seller from '../BuySell/Seller';
import BuyerAdd from '../BuySell/BuyerAdd';
import BuyerProfile from '../BuySell/BuyerProfile';
import SellerProfile from '../BuySell/SellerProfile';
import SellerAdd from '../BuySell/SellerAdd';
import FertilizerDetail from '../Products/FertilizerDetail';
import AddCart from '../Products/AddCart';

function AppNew() {

  const PrivateRoute = ({ element, ...rest }) => {
    const isAuthenticated = () => {
      const token = localStorage.getItem("token");
      console.log("Token:", token);
      return token !== null;
    };
  
    console.log("Is authenticated:", isAuthenticated());
  
    return isAuthenticated() ? (
      element
    ) : (
      <Navigate to="/login" replace />
    );
  };
  
  

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="registration" element={<RegistrationForm />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="/customer/*" element={<PrivateRoute element={<Customer />} />} />
        <Route path="/addcart" element={<PrivateRoute element={<AddCart />} />} />
        <Route path="/fertilizer" element={<PrivateRoute element={<Fertilizer />} />} />
        <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
        <Route path="/customer/product/:id" element={<PrivateRoute element={<ProductDetail />} />} />
        <Route path="/fertilizer/:id" element={<PrivateRoute element={<FertilizerDetail />} />} />
        <Route path="/buyer" element={<PrivateRoute element={<Buyer />} />} />
        <Route path="/buyer/:id" element={<PrivateRoute element={<BuyerProfile />} />} />
        <Route path="/seller" element={<PrivateRoute element={<Seller />} />} />
        <Route path="/seller/:id" element={<PrivateRoute element={<SellerProfile />} />} />
        <Route path="/buyer/add" element={<PrivateRoute element={<BuyerAdd />} />} />
        <Route path="/seller/add" element={<PrivateRoute element={<SellerAdd />} />} />
      </Routes>
    </div>
  );
}

export default AppNew;
