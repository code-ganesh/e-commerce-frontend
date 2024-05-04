// components/Register.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../useraxios-config';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/register', { name, username, password });
      navigate.push('/login');
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="username" value={username} onChange={(e) => setusername(e.target.value)} placeholder="username" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
