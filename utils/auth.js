// utils/auth.js
import { jwtDecode } from 'jwt-decode';

const TOKEN_KEY = 'sldnotes';

export const setAuthToken = (token) => {
  if (token) localStorage.setItem(TOKEN_KEY, token);
  else localStorage.removeItem(TOKEN_KEY);
};

export const getAuthToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const isAuthenticated = () => {
  const token = getAuthToken();
  if (!token) return false;

  // Decode the token to get user data
  const decodedToken = jwtDecode(token);
  const currentTime = Date.now() / 1000;

  // Check if the token is expired
  if (decodedToken.exp < currentTime) {
    setAuthToken(null); // Remove token from localStorage
    return false;
  }

  return true;
};


export const getusername = () => {
  // Example: Retrieve username from localStorage
  var username = localStorage.getItem('userusername');
  username = encodeURIComponent(username);
  return username;
};




