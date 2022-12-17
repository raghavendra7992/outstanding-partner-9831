import { Route, Routes } from "react-router-dom"
import AddProduct from "../AddProducts/AddProduct"
import Users from "../AdminProdile/Users"
import FileManager from "../FileManager/FileManager"
import Home from "../Home/Home"
import Message from "../Message/Message"
import SavedItems from "../SavedItems/SavedItems"
import Settings from "../Settings/Settings"
import "./ro.css"


function AllRoutes(){
    return(
 <div className="rot">
  
  <Routes  >
      
      <Route path="/" element={<Home/>} ></Route>
        <Route path="/users" element={<Users/>} ></Route>
        <Route path="/addProduct" element={<AddProduct/>} ></Route>
        <Route path="/messages" element={<Message/>} ></Route>
        {/* <Route path="/analytics"  >{Anylitics}</Route> */}
        <Route path="/fileManager" element={<FileManager/>} ></Route>
        <Route path="/savedItems" element={<SavedItems/>} ></Route>
        <Route path="/settings" element={<Settings/>} ></Route>     
        </Routes>
 </div>

    
    )
}
export default AllRoutes