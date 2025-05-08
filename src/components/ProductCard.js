import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
      <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
      <h4>{product.title.slice(0, 40)}...</h4>
      <p><strong>₹{product.price}</strong></p>
      <button onClick={() => dispatch(addToCart(product))} style={{ padding: '0.5rem', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
