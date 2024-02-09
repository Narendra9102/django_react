import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
    <Router> {/* Wrap the entire application with Router */}
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  // Function to determine whether to show NavBar based on route
  const showNavBar = () => {
    return !location.pathname.startsWith('/customer'); // Hide NavBar on /customer route
  };

  return (
    <div className='App'>
      {showNavBar() && <NavBar />} {/* Conditionally render NavBar */}
      
      <Routes>
        <Route path='' element={<LandingPage />} />
        <Route path='registration' element={<RegistrationForm />} />
        <Route path='login' element={<LoginForm />} />
        <Route path='customer' element={<Customer />} />
      </Routes>
    </div>
  );
}

export default App;
