/*import React from 'react';
import { useSelector } from 'react-redux';

function Navbar() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#f3f3f3' }}>
      <div>
        <strong>Trabuwo B2C</strong>
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <span>Home</span>
        <span>Categories</span>
        <span>Profile</span>
        <span>Cart ({cartItems.length})</span>
      </div>
    </nav>
  );
}

export default Navbar;
*/
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css'; // Import custom CSS

function Navbar() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <strong>Trabuwo B2C</strong>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </div>
    </nav>
  );
}

export default Navbar;
