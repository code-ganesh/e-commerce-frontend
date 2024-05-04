import React, { useState, useEffect } from 'react';
import axios from '../useraxios-config';
import { isAuthenticated  } from '../utils/auth';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch users from backend API
    axios.get('/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    (isAuthenticated) ?
    <div>
     <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.username}</li>
        ))}
      </ul>
    </div>
    :<>Login First</>

  );
};

export default UserList;