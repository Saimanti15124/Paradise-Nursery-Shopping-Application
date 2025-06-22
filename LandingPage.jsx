// LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Paradise Nursery</h1>
      <p>Discover our collection of beautiful house plants</p>
      <Link to="/plants" className="cta-button">
        Get Started
      </Link>
    </div>
  );
};

export default LandingPage;