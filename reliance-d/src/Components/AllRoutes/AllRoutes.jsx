import Cart from '../Pages/Cart'

import Signup from '../Pages/Signup'

import SmartPhones from "../Pages/SmartPhones"
import Pagenotfound from '../Pages/Pagenotfound'

import Loginforadmin from '../Pages/Loginforadmin'
import React from "react";
import Register from "../Pages/Register";
import AdminProfile from "../../AdminDashBoard/AdminProfile/AdminProfile"
import AddProduct from "../../AdminDashBoard/AddProducts/AddProduct"
import Home1 from "../../AdminDashBoard/Home/Home"
import Message from "../../AdminDashBoard/Message/Message"
import FileManager from '../../AdminDashBoard/FileManager/FileManager'
import SavedItems from '../../AdminDashBoard/SavedItems/SavedItems'
import Settings from '../../AdminDashBoard/Settings/Settings'
import { Route, Routes } from "react-router-dom";

// import Login from '../Pages/Login';
import Login from '../Pages/Login1';

import Home from "../Pages/Home";

const AllRoutes = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/pagenotfound" element={<Pagenotfound />}></Route>
      <Route path="/login1" element={<Login />}></Route>
      <Route path="/Register" element={<Register />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/admin-login" element={<Loginforadmin />}></Route>
      <Route path="/Home1" element={<Home1/>} ></Route>
            <Route path="/adminProfile" element={<AdminProfile/>} ></Route>
            <Route path="/addProduct" element={<AddProduct/>} ></Route>
            <Route path="/messages" element={<Message/>} ></Route>
            {/* <Route path="/analytics"  >{Anylitics}</Route> */}
            <Route path="/fileManager" element={<FileManager/>} ></Route>
            <Route path="/savedItems" element={<SavedItems/>} ></Route>
            <Route path="/settings" element={<Settings/>} ></Route>    
      <Route path="/smartphones" element={<SmartPhones />}></Route>
        </Routes>
       

  );
};

export default AllRoutes;
