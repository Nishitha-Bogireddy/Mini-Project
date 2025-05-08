import React from 'react';

const categories = ['Electronics', 'Fashion', 'Home & Kitchen', 'Beauty', 'Books'];

const Categories = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Categories</h2>
      <ul>
        {categories.map((cat, index) => (
          <li key={index}>{cat}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
