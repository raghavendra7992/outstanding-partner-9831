import { Box, Button, Flex, Image, Input, Spacer, Icon, Avatar } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { ChevronDownIcon, Search2Icon } from '@chakra-ui/icons'
import {Link, useNavigate} from "react-router-dom"
import "./Navbar.css";
import Home from './Home';
import { AppContext } from './AppContext';
// import searchicon from "./searchicon.svg"

const Navbar = () => {

  let cat = [
    {id: 1,title: "MOBILES & TABLETS",path: "/makeup", sub: {a: "LIPS",p1: "/",b: "FACE",p2: "/",c: "EYES",p3: "/",p4: "/",p5: "/",p6: "/",p7: "/",p8: "/",},},
    {id: 1,title: "TELEVISIONS",path: "/makeup", sub: {a: "LIPS",p1: "/",b: "FACE",p2: "/",c: "EYES",p3: "/",p4: "/",p5: "/",p6: "/",p7: "/",p8: "/",},},
    {id: 1,title: "HEADPHONES & SPEAKERS",path: "/makeup", sub: {a: "LIPS",p1: "/",b: "FACE",p2: "/",c: "EYES",p3: "/",p4: "/",p5: "/",p6: "/",p7: "/",p8: "/",},},
    {id: 1,title: "HOME APPLIANCES",path: "/makeup", sub: {a: "LIPS",p1: "/",b: "FACE",p2: "/",c: "EYES",p3: "/",p4: "/",p5: "/",p6: "/",p7: "/",p8: "/",},},
    {id: 1,title: "COMPUTERS",path: "/makeup", sub: {a: "LIPS",p1: "/",b: "FACE",p2: "/",c: "EYES",p3: "/",p4: "/",p5: "/",p6: "/",p7: "/",p8: "/",},},
    {id: 1,title: "CAMERAS",path: "/makeup", sub: {a: "LIPS",p1: "/",b: "FACE",p2: "/",c: "EYES",p3: "/",p4: "/",p5: "/",p6: "/",p7: "/",p8: "/",},},
    {id: 1,title: "KITCHEN APPLIANCES",path: "/makeup", sub: {a: "LIPS",p1: "/",b: "FACE",p2: "/",c: "EYES",p3: "/",p4: "/",p5: "/",p6: "/",p7: "/",p8: "/",},},
    {id: 1,title: "PERSONAL CARE",path: "/makeup", sub: {a: "LIPS",p1: "/",b: "FACE",p2: "/",c: "EYES",p3: "/",p4: "/",p5: "/",p6: "/",p7: "/",p8: "/",},},
    {id: 1,title: "ACCESSORIES",path: "/makeup", sub: {a: "LIPS",p1: "/",b: "FACE",p2: "/",c: "EYES",p3: "/",p4: "/",p5: "/",p6: "/",p7: "/",p8: "/",},},
  ];

  const navigate=useNavigate()
  const {firstName,setsearch,car} = useContext(AppContext)
  const arr=[{a:"laptop",b:"/laptops"},{a:"SmartPhone",b:"/smartPhones"},{a:"smartPhones",b:"/smartPhones"},{a:"phone",b:"/smartPhones"},{a:"watch",b:"/smartwatches"},{a:"tablet",b:"/tablets"},{a:"Laptop",b:"/laptops"}]
  const [search1, setsearch1] = useState("")
  const handle=()=>{
      console.log(search1)
      setsearch(search1)
      for(let i=0;i<arr.length;++i)
      {if(search1===arr[i].a)
            navigate(arr[i].b)
      }
      navigate("/search")
  }

  return (
    <div >

      <Flex bg={"#e42529"} color="white">
          <Spacer/>
          <Flex width="300px">
          <Box cursor="pointer">Find a store |</Box>
          <Box cursor="pointer">Buying guides |</Box>
          <Box cursor="pointer">Contact us</Box>
          </Flex>
        </Flex>
        <Box bg={"#e42529"} color="white">
        <br/>
        <Flex>
          <Spacer/>
        <Box width='150px'>
            <Image src='https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg' alt='logo' onClick={()=>navigate("/")} style={{cursor:"pointer"}}/>
        </Box>
        <Spacer/><Spacer/><Spacer/>
        <Input htmlSize={65} color="black" width='auto' bg={"white"} borderRadius="25px" placeholder='Find your favorite products' onChange={(e)=>setsearch1(e.target.value[0].toUpperCase() + e.target.value.substring(1))} />
        {/* <img src={searchicon} alt='none' style={{marginLeft:"-50px",zIndex:2,height:"30px",cursor:"pointer",marginTop:"7px"}} onClick={handle}/> */}
        <Spacer/><Spacer/><Spacer/><Spacer/>
        <Flex width="300px">
        <Box cursor="pointer" ><i class="fa-solid fa-location-dot"></i> Select your location</Box>
        <Spacer/>

        <Box cursor="pointer" display="flex" onClick={()=>navigate("/cart")}><i class="fa-solid fa-cart-shopping"></i> 
        {car>0&&<Box style={{width:"25px",height:"25px",borderRadius:"50%",backgroundColor:"black"}}>{car>0?car:""}</Box> }Cart</Box>
        
        <Spacer/>
        <Box onClick={()=>navigate("/Login")} cursor="pointer"><i class="fa-solid fa-user"></i> {firstName!==""?firstName:"Login"}</Box>
        <Spacer/>
        </Flex>
        </Flex>
       
       <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"#1f4985",color:"white",height:"30px"}}>
        <div className="box98" style={{cursor:"pointer"}}>MOBILES & TABLETS</div>
      <div className="box99">
<div style={{display:"flex",gap:"2rem",paddingLeft:"50px",height:"100%"}}> 
<div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between"}}> 
<p onClick={()=>navigate("/smartPhones")}>Smartphones</p>
<p onClick={()=>{setsearch("OnePlus");navigate("/search")}}>OnePlus Nord 2T 5G</p>
<p onClick={()=>navigate("/smartwatches")}>Wearable Technology</p>
<p>Smart Watch Accessories</p>
<p>Accessories</p>
<p onClick={()=>navigate("/tablets")}>Tablet Accessories</p>
<p>Mobile Accessories</p>
<p>Mobile Grips & Stands</p>
<p>Car Mobile Holders</p>
</div> 
<div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between",height:"70%"}}>
<p>Headphones & Headsets</p>
<p onClick={()=>navigate("/tablets")}>Tablets & eReaders</p>
<p>Every Day use Tablets below 15000</p>
<p>Premium Tablets, Above 15001</p>
<p>Power Banks</p>
<p>eSlates</p>
</div>
<div>
<p>AI Learning Robots</p>
</div>
</div>  
            </div>
      <div className="box97" style={{cursor:"pointer"}}>TELEVISIONS</div>
      <div className="box99">
      <div style={{display:"flex",gap:"2rem",paddingLeft:"50px",height:"100%"}}> 
<div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between",height:"70%"}}> 
<p onClick={()=>{setsearch("Television");navigate("/search")}}>Televisions</p>
<p onClick={()=>{setsearch("Television");navigate("/search")}}>Smart TVs</p>
<p>32 Inch TVs</p>
<p>43 Inch TVs</p>
<p>55 Inch TVs</p>
<p>Android TVs</p>
</div> 
<div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between",height:"70%"}}>
<p>Gaming</p>
<p>Gaming Consoles</p>
<p>Gaming Accessories</p>
<p>Gaming Titles</p>
<p>Projectors</p>
<p>Streaming Devices</p>
</div>
<div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between",height:"100%"}}>
<p>Reconnect Disney | Marvel Audio Collection</p>
<p>TV & Audio Accessories</p>
<p>Virtual Reality Headsets</p>
<p>Stabilizers & Surge Protectors</p>
<p>Power Strips & Extension Cords</p>
<p>Electronic Musical Instruments</p>
<p>Musical Mini Keyboards</p>
<p>Musical Standard Keyboards</p>
</div>
</div>  
            </div>
      <div className="box96" style={{cursor:"pointer"}}>HEADPHONES & SPEAKERS</div>
      <div className="box99">
      <div style={{display:"flex",gap:"2rem",paddingLeft:"50px",height:"100%"}}> 
<div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between",height:"70%"}}> 
<p>Headphones & Headsets</p>
<p>True Wireless</p>
<p>Bluetooth Neckbands</p>
<p>Wired Earphones</p>
<p>On Ear Headphones</p>
<p>Noise Cancelling Headphones</p>
</div> 
<div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between",height:"30%"}}>
<p>Bluetooth & WiFi Speakers</p>
<p>Bluetooth Speakers</p>
<p>Smart Speakers</p>
</div>
<div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between",height:"70%"}}>
<p>TV Speakers & Soundbars</p>
<p>Soundbars</p>
<p>Home Theatre Systems</p>
<p>Party speakers</p>
<p>Multimedia</p>
<p>Audio, Speaker Stands</p>
<p>Musical Instruments</p>
</div>
</div>  
            </div>
      <div className="box95" style={{cursor:"pointer"}}>HOME APPLIANCES</div>
      <div className="box99">
      <div style={{display:"flex",gap:"2rem",paddingLeft:"50px",height:"100%"}}> 
<div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between"}}> 
<p>Smartphones</p>
<p>OnePlus Nord 2T 5G</p>
<p>Wearable Technology</p>
<p>Smart Watch Accessories</p>
<p>Accessories</p>
<p>Tablet Accessories</p>
<p>Mobile Accessories</p>
<p>Mobile Grips & Stands</p>
<p>Car Mobile Holders</p>
</div> 
<div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between",height:"70%"}}>
<p>Headphones & Headsets</p>
<p>Tablets & eReaders</p>
<p>Every Day use Tablets below 15000</p>
<p>Premium Tablets, Above 15001</p>
<p>Power Banks</p>
<p>eSlates</p>
</div>
<div>
<p>AI Learning Robots</p>
</div>
</div>  
            </div>
      <div className="box94" style={{cursor:"pointer"}}>COMPUTERS</div>
      <div className="box99">
      <div style={{display:"flex",gap:"2rem",paddingLeft:"50px",height:"100%"}}> 
<div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between"}}> 
<p>Smartphones</p>
<p>OnePlus Nord 2T 5G</p>
<p>Wearable Technology</p>
<p>Smart Watch Accessories</p>
<p>Accessories</p>
<p>Tablet Accessories</p>
<p>Mobile Accessories</p>
<p>Mobile Grips & Stands</p>
<p>Car Mobile Holders</p>
</div> 
<div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between",height:"70%"}}>
<p>Headphones & Headsets</p>
<p>Tablets & eReaders</p>
<p>Every Day use Tablets below 15000</p>
<p>Premium Tablets, Above 15001</p>
<p>Power Banks</p>
<p>eSlates</p>
</div>
<div>
<p>AI Learning Robots</p>
</div>
</div>  
            </div>
            <div className="box94" style={{cursor:"pointer"}}>CAMERAS</div>
      <div className="box99">
      <div style={{display:"flex",gap:"2rem",paddingLeft:"50px",height:"100%"}}> 
<div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between"}}> 
<p>Smartphones</p>
<p>OnePlus Nord 2T 5G</p>
<p>Wearable Technology</p>
<p>Smart Watch Accessories</p>
<p>Accessories</p>
<p>Tablet Accessories</p>
<p>Mobile Accessories</p>
<p>Mobile Grips & Stands</p>
<p>Car Mobile Holders</p>
</div> 
<div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between",height:"70%"}}>
<p>Headphones & Headsets</p>
<p>Tablets & eReaders</p>
<p>Every Day use Tablets below 15000</p>
<p>Premium Tablets, Above 15001</p>
<p>Power Banks</p>
<p>eSlates</p>
</div>
<div>
<p>AI Learning Robots</p>
</div>
</div>  
            </div>
            <div className="box94" style={{cursor:"pointer"}}>KITCHEN APPLIANCES</div>
      <div className="box99">
      <div style={{display:"flex",gap:"2rem",paddingLeft:"50px",height:"100%"}}> 
<div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between"}}> 
<p>Smartphones</p>
<p>OnePlus Nord 2T 5G</p>
<p>Wearable Technology</p>
<p>Smart Watch Accessories</p>
<p>Accessories</p>
<p>Tablet Accessories</p>
<p>Mobile Accessories</p>
<p>Mobile Grips & Stands</p>
<p>Car Mobile Holders</p>
</div> 
<div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between",height:"70%"}}>
<p>Headphones & Headsets</p>
<p>Tablets & eReaders</p>
<p>Every Day use Tablets below 15000</p>
<p>Premium Tablets, Above 15001</p>
<p>Power Banks</p>
<p>eSlates</p>
</div>
<div>
<p>AI Learning Robots</p>
</div>
</div>  
            </div>
            <div className="box94" style={{cursor:"pointer"}}>PERSONAL CARE</div>
      <div className="box99">
      <div style={{display:"flex",gap:"2rem",paddingLeft:"50px",height:"100%"}}> 
<div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between"}}> 
<p>Smartphones</p>
<p>OnePlus Nord 2T 5G</p>
<p>Wearable Technology</p>
<p>Smart Watch Accessories</p>
<p>Accessories</p>
<p>Tablet Accessories</p>
<p>Mobile Accessories</p>
<p>Mobile Grips & Stands</p>
<p>Car Mobile Holders</p>
</div> 
<div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between",height:"70%"}}>
<p>Headphones & Headsets</p>
<p>Tablets & eReaders</p>
<p>Every Day use Tablets below 15000</p>
<p>Premium Tablets, Above 15001</p>
<p>Power Banks</p>
<p>eSlates</p>
</div>
<div>
<p>AI Learning Robots</p>
</div>
</div>  
            </div><div className="box94" style={{cursor:"pointer"}}>ACCESSORIES</div>
      <div className="box99">
      <div style={{display:"flex",gap:"2rem",paddingLeft:"50px",height:"100%"}}> 
<div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between"}}> 
<p>Smartphones</p>
<p>OnePlus Nord 2T 5G</p>
<p>Wearable Technology</p>
<p>Smart Watch Accessories</p>
<p>Accessories</p>
<p>Tablet Accessories</p>
<p>Mobile Accessories</p>
<p>Mobile Grips & Stands</p>
<p>Car Mobile Holders</p>
</div> 
<div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between",height:"70%"}}>
<p>Headphones & Headsets</p>
<p>Tablets & eReaders</p>
<p>Every Day use Tablets below 15000</p>
<p>Premium Tablets, Above 15001</p>
<p>Power Banks</p>
<p>eSlates</p>
</div>
<div>
<p>AI Learning Robots</p>
</div>
</div>  
            </div>
       </div>

       
      
      
    
    </Box>
    </div>  
  )
}

export default Navbar