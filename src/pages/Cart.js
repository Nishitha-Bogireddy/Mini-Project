import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Cart Page</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong> - ₹{item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
