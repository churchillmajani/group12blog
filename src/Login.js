// Login.js
import React, { useState } from 'react';
import './login.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('Logging in with:', email, password);
  };

  return (
    <div className='login'>
      <h2 className='login-header'>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit" className='login-button'>Login</button>
      </form>
    </div>
  );
};

export default Login;
