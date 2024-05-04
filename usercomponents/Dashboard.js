import React, { useState, useEffect } from 'react';
import axios from '../useraxios-config';
import { getusername, isAuthenticated } from '../utils/auth'; // Import the getusername function
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const username1 = getusername();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('isAuthenticated:', isAuthenticated());
    console.log('username1:', username1);
    const fetchUserData = async () => {
      try {
        if (username1) {
          const response = await axios.get(`/user`, {params: { username: username1 }});
          setUserData(response.data);
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
        if (error.response && error.response.data && error.response.data.message === "User not found") {
          // Handle "User not found" error
          // Display a message to the user indicating that the user was not found
          setUserData(null); // Clear userData state
        } else {
          // Handle other errors
        }
      }
    };
  
    fetchUserData();
  }, [username1]);

  const handleDelete = async () => {
    try {
      await axios.delete('/delete', { params: { username: username1 } });
      setUserData(null);
      console.log('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  

  return (
    <div>
      <h2>Dashboard</h2>
      {loading ? (
        <p>Loading...</p>
      ) : username1 && userData ? ( // Check if username1 and userData are both available
        <div>
          <p>Name: {userData.name}</p>
          <p>username: {userData.username}</p>
          <img src={userData.pic} alt="Profile pic" />
          <p>Role: {userData.role}</p>
          <button onClick={handleDelete}>Delete Account</button>
          <button onClick={() => navigate('/update')}>Update Account</button>
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default Dashboard;
