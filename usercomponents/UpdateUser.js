import React, { useState } from 'react';
import axios from '../useraxios-config';
import { useNavigate } from 'react-router-dom';

function UpdateUser() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    pic: ''
  });

  const { name, username, password, pic } = formData;
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put('/update', formData); // Assuming your backend endpoint is '/api/updateUser'
      console.log(res.data); // Assuming your backend sends back a token upon successful update
        navigate('/dashboard');
      // Optionally, you can redirect the user to another page after successful update
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Profile Picture URL"
            name="pic"
            value={pic}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateUser;
