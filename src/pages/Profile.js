import React from 'react';

const Profile = () => {
  // You can replace these with dynamic user info later
  const user = {
    name: 'Nishitha B',
    email: 'nishitha@example.com',
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Profile Page</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default Profile;
