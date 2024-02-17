import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import Home from './Home';
import Customer from './Customer';
import Fertilizer from './Fertilizer';
import BuySell from './BuySell';

function AppNew() {
  const isAuthenticated = () => {
    return localStorage.getItem("token") !== null;
  };

  const PrivateRoute = ({ element, ...rest }) => {
    return isAuthenticated() ? (
      element
    ) : (
      <Navigate to="/login" />
    );
  };

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="registration" element={<RegistrationForm />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="/customer/*" element={<PrivateRoute element={<Customer />} />} />
        <Route path="/customer/fertilizer" element={<PrivateRoute element={<Fertilizer />} />} />
        <Route path="/customer/buysell" element={<PrivateRoute element={<BuySell />} />} />
      </Routes>
    </div>
  );
}

export default AppNew;
