import Cart from '../Pages/Cart'

import Signup from '../Pages/Signup'

import SmartPhones from "../Pages/SmartPhones"
import Pagenotfound from '../Pages/Pagenotfound'

import Loginforadmin from '../Pages/Loginforadmin'
import React from "react";
import Register from "../Pages/Register";
import { Route, Routes } from "react-router-dom";

// import Login from '../Pages/Login';
import Login from '../Pages/Login1';

import Home from "../Pages/Home";

const AllRoutes = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/login1" element={<Login />}></Route>
      <Route path="/Register" element={<Register />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/admin-login" element={<Loginforadmin />}></Route>

      <Route path="/smartphones" element={<SmartPhones />}></Route>
     
      <Route path="/" element={<Home />} />
      <Route path="/smartPhones" element={<SmartPhones />} />



        </Routes>
       

  );
};

export default AllRoutes;
