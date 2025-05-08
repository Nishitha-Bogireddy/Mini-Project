import React from 'react';

const categories = ['Electronics', 'Fashion', 'Home', 'Beauty', 'Sports'];

function CategoryCarousel() {
  return (
    <div style={{ display: 'flex', overflowX: 'scroll', padding: '1rem', gap: '1rem' }}>
      {categories.map((cat, idx) => (
        <div key={idx} style={{ minWidth: '120px', background: '#eee', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
          <img src={`https://via.placeholder.com/100?text=${cat}`} alt={cat} />
          <p>{cat}</p>
        </div>
      ))}
    </div>
  );
}

export default CategoryCarousel;

