import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from './components/Modal';
import UserList from './usercomponents/UserList';
import Register from './usercomponents/Register';
import Login from './usercomponents/Login';
import Dashboard from './usercomponents/Dashboard';
import UpdateUser from './usercomponents/UpdateUser';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/details" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Default />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/update" element={<UpdateUser />} />
      </Routes>
      <Modal />
    </React.Fragment>
  );
}

export default App;
