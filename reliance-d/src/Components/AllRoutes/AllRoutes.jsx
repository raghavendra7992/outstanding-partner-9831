// import React from 'react'
// import {Routes,Route} from "react-router-dom"
// import Cart from '../Pages/Cart'
// import Home from "../Pages/Home"
// import Login from "../Pages/Login"
// import Signup from '../Pages/Signup'
import SmartPhones from "../Pages/SmartPhones"
import Pagenotfound from '../Pages/Pagenotfound'
// // import Laptop from '../Pages/Laptop'

// function AllRoutes() {
//   return (
//     <div>
//         <Routes>
//         <Route path="/" element={<Home/>}></Route>
//         <Route path="/login" element={<Login/>}></Route>
//         <Route path="/signup" element={<Signup/>}></Route>
//         <Route path="/cart" element={<Cart/>}></Route>
//         {/* <Route path="/laptop" element={<Laptop/>}></Route> */}
//         <Route path="/smartphones" element={<SmartPhones/>}></Route>
//         <Route path="*" element={<Pagenotfound/>}></Route>
//     </Routes>

//     </div>
    
    
//   )
// }

// export default AllRoutes



import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Cart from '../Pages/Cart'
// import Checkout from '../Pages/Checkout'
// import EachProduct from '../Pages/EachProduct'
// import Final from '../Pages/Final'
// import Laptop from '../Pages/Laptop'
// import Login from '../Pages/Login'
// import Payments from '../Pages/Payments'
// import Phone from '../Pages/Phone'
// import Register from '../Pages/Register'
// import Search from '../Pages/Search'
// import SmallAppliances from '../Pages/SmallAppliances'
// import SmartWatches from '../Pages/SmartWatches'
// import Tablets from '../Pages/Tablets'
// import TopSellers from '../Pages/TopSellers'
import Home from '../Pages/Home'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/smartPhones' element={<SmartPhones/>}/>
        <Route path="*" element={<Pagenotfound/>}></Route>
        {/* <Route path='/laptops' element={<Laptop/>}/>
        <Route path='/small_appliances' element={<SmallAppliances/>}/>
         <Route path='/smartwatches' element={<SmartWatches/>}
        <Route path='/topsellers' element={<TopSellers/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/tablets' element={<Tablets/>}/>
        {/* <Route path='/search' element={<Search/>}/> */}
        {/* <Route path='/smartphone' element={<Phone/>}/> */} 
        {/* <Route path='/cart' element={<Cart/>}/> */}
        {/* <Route path='/checkout' element={<Checkout/>}/> */}
        {/* <Route path='/payments' element={<Payments/>}/> */}
        {/* <Route path='/final' element={<Final/>}/> */}
        {/* <Route path='/item/:id' element={<EachProduct/>}/> */}
    </Routes>
  )
}

export default AllRoutes