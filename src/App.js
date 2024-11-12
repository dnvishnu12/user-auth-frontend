import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './(pages)/signup';
import Login from './(pages)/login';
import LandingPage from './(pages)/landing-page';
import Profile from './(pages)/profile';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/me" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
