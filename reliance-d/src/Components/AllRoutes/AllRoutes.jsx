

import Signup from '../Pages/Signup'

import SmartPhones from "../Pages/SmartPhones"
import Pagenotfound from '../Pages/Pagenotfound'

import Loginforadmin from '../Pages/Loginforadmin'
import React from "react";
import Register from "../Pages/Register";
import AdminProfile from "../../AdminDashBoard/AdminProdile/AdminProfile"
import AddProduct from "../../AdminDashBoard/AddProducts/AddProduct"
import Home1 from "../../AdminDashBoard/Home/Home1"
import Message from "../../AdminDashBoard/Message/Message"
import FileManager from '../../AdminDashBoard/FileManager/FileManager'
import SavedItems from '../../AdminDashBoard/SavedItems/SavedItems'
import Settings from '../../AdminDashBoard/Settings/Settings'
import { Route, Routes } from "react-router-dom";
import Cart from '../Pages/Cart'
import Checkout from '../Pages/Checkout'
import EachProduct from '../Pages/EachProduct'
import Final from '../Pages/Final'
import Laptop from '../Pages/Laptop'
import Search from '../Pages/Search'
import SmallAppliances from '../Pages/SmallAppliances'
import SmartWatches from '../Pages/SmartPhones'
import Tablets from '../Pages/Tablets'
import TopSellers from '../Pages/TopSellers'
import Phone from '../Pages/Phone';
import Payments from '../Pages/Payments';
// import Login from '../Pages/Login';
import Login from '../Pages/Login1';

import Home from "../Pages/Home";

const AllRoutes = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path='/tablets' element={<Tablets/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/smartphone' element={<Phone/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/payments' element={<Payments/>}/>
        <Route path='/final' element={<Final/>}/>
        <Route path='/item/:id' element={<EachProduct/>}/>
      <Route path='/laptops' element={<Laptop/>}/>
        <Route path='/small_appliances' element={<SmallAppliances/>}/>
        <Route path='/smartwatches' element={<SmartWatches/>}/>
        <Route path='/topsellers' element={<TopSellers/>}/>
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
            <Route path="/fileManager" element={<FileManager/>} ></Route>
            <Route path="/savedItems" element={<SavedItems/>} ></Route>
            <Route path="/settings" element={<Settings/>} ></Route>    
      <Route path="/smartphones" element={<SmartPhones />}></Route>
        </Routes>
  );
};

export default AllRoutes;
