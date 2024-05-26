// SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault(); // Prevent form submission from refreshing the page
    console.log('Signing up with:', email, password);

    // Navigate to Home.js
    navigate('/home');
   
  }; // Handle the form submission and create a new account

  return (
    <div className='signup'>
      <h2 className='signup-header'>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <label className='email-label'>
          Email:
          <input className='email'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className='password-label'>
          Password:
          <input className='password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" className='signup-button'>Sign Up</button> {/* Submit the form when the button is clicked */}
      </form>
    </div>
  );
};

export default SignUp;

