import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Customer from './components/Customer';
import NavBar from './components/NavBar'; 


function LandingPage() {
  return (
    <div>
      <h2>Welcome to the Landing Page!</h2>
    </div>
  );
}

function App() {
  return (
    <div className='App'>
      <Router>

        <NavBar />
        
        <Routes>
          <Route path='' element={<LandingPage />} />
          <Route path='registration' element={<RegistrationForm />} />
          <Route path='login' element={<LoginForm />} />
          <Route path='customer' element={<Customer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;