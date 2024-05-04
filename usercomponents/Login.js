import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setAuthToken, isAuthenticated } from '../utils/auth';
import axios from '../useraxios-config';

const Login = () => {
  var [username, setusername] = useState(''); // Changed state variable name to 'username'
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      localStorage.setItem('userusername', username);
      const response = await axios.post('/login', { username, password });
      setAuthToken(response.data.token);
      console.log('isAuthenticated:', isAuthenticated());
      navigate(`/dashboard/`);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {/* Changed 'type' attribute to 'text' */}
        <input type="text" value={username} onChange={(e) => setusername(e.target.value)} placeholder="username" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
