// App.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import ProductList from './ProductList';
import CartItems from './CartItems';

const App = () => {
  const cart = useSelector(state => state.cart);
  const [currentPage, setCurrentPage] = useState('landing');
  
  const totalItems = cart.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/" onClick={() => setCurrentPage('landing')}>
            Paradise Nursery
          </Link>
          <Link to="/plants" onClick={() => setCurrentPage('plants')}>
            Plants
          </Link>
          <Link to="/cart" className="cart-icon" onClick={() => setCurrentPage('cart')}>
            🛒 {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/plants" element={
            <ProductList onContinueShopping={() => setCurrentPage('landing')} />
          } />
          <Route path="/cart" element={
            <CartItems onContinueShopping={() => setCurrentPage('plants')} />
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;