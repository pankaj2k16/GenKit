// filepath: /d:/Project/NodeJS/GenKit/frontend/src/components/Greeting.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    
    const fetchGreeting = async () => {
      try {
        const response = await axios.get('http://localhost:3000/greeting?userName=YourName');
        setGreeting(response.data);
      } catch (error) {
        console.error('Error fetching the greeting:', error);
      }
    };

    fetchGreeting();
  }, []);

  return <h1>{greeting}</h1>;
};

export default Greeting;