import Cart from '../Pages/Cart'

import Signup from '../Pages/Signup'

import SmartPhones from "../Pages/SmartPhones"
import Pagenotfound from '../Pages/Pagenotfound'

import Loginforadmin from '../Pages/Loginforadmin'
import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from '../Pages/Login'

import Home from "../Pages/Home";

const AllRoutes = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
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
