import React from 'react'
import {Routes,Route} from "react-router-dom"
import Cart from '../Pages/Cart'
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Signup from '../Pages/Signup'
import SmartPhones from "../Pages/SmartPhones"
import Pagenotfound from '../Pages/Pagenotfound'

function AllRoutes() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/smartphones" element={<SmartPhones/>}></Route>
        <Route path="*" element={<Pagenotfound/>}></Route>
    </Routes>

    </div>
    
    
  )
}

export default AllRoutes