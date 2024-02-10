import React from 'react'
import { Routes, Route } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import Home from './Home';
import Customer from './Customer';
import Fertilizer from './Fertilizer';
import BuySell from './BuySell';

function AppNew() {
      
    return (
      <div className='App'>
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='registration' element={<RegistrationForm />} />
            <Route path='login' element={<LoginForm />} />
            <Route path='/customer' element={<Customer />} />
            <Route path='/customer/fertilizer' element={<Fertilizer />} />
            <Route path='/customer/buysell' element={<BuySell />} />
        </Routes>

      </div>
    );
  }
  

  export default AppNew;

