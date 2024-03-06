// src/components/About.js
import React from 'react';
import { image } from '../data/user';

function About() {
  return (
    <div>
      <img src={image} alt="Owner" />
      {/* About component content */}
    </div>
  );
}

export default About;

