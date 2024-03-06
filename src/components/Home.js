// src/components/Home.js
import React from 'react';
import { username, city } from '../data/user';

function Home() {
  return (
    <div>
      <h2>Welcome, {username} from {city}!</h2>
      {/* Home component content */}
    </div>
  );
}

export default Home;

