import { Box, Flex,Image,Spacer,Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from './AppContext'

const Final = () => {
    const [show, setShow] = useState(false)
    const [item, setItem] = useState([])
    const [price1, setPrice1] = useState(0)
    const navigate=useNavigate()
const {setCar,pincode,total,settotal,firstName} = useContext(AppContext)
const handleDelete=(id)=>{
    let r=JSON.parse(localStorage.getItem("cart"))
    let newarr=r.filter(e=>e.id!==id)
    localStorage.setItem("cart",JSON.stringify(newarr))
    setItem(newarr)
    let tot=0;
    for(let i=0;i<newarr.length;++i)
    {
        tot=tot+(newarr[i].qty*newarr[i].price)
    }
    settotal(tot)
}
const handleAdd=(val,id)=>{
    let r=JSON.parse(localStorage.getItem("cart"))
    let tot=0;
    for(let i=0;i<r.length;++i)
    {
        if(r[i].id===id)
        r[i].qty+=val;
        tot=tot+(r[i].qty*r[i].price)
    }
    settotal(tot)
    setItem(r)
    localStorage.setItem("cart",JSON.stringify(r))

}
const handleCheckout=()=>{
    if(firstName==="")
    navigate("/login")
    else
    navigate("/checkout")
}

    useEffect(() => {
       setItem(JSON.parse(localStorage.getItem("cart"))||[]);
    //    console.log(item.length)
    //    setCar(item.length)
         }, [])
    
  return (
    <Box width="90%" margin="auto">
        <br/>
        <Text fontSize='4xl' color="green">Order Successful!</Text>
        <Text>Items will be delivered within next 5 working days</Text>
        <Flex>
        <Spacer/><Spacer/><Spacer/><Spacer/><Spacer/><Spacer/><Spacer/><Spacer/><Spacer/><Spacer/>
        <Spacer/>
        </Flex>
        <br/>
            <Box>
                {item.map(e=>
                <div key={e.id}>
                <Box border="1px solid #bdbdbd">
                <Flex justifyContent="space-around" alignItems="center">
                <Image src={e.image} alt="no" width="200px"/>
                    <br/>
                <Text width="400px" textAlign="left" fontWeight="bold" fontSize='sm'>{e.name}</Text>

                    <Text fontWeight="bold">₹ {e.price}</Text>


                <Text fontWeight="bold">Quantity: {e.qty}</Text>

                
                <Text fontWeight="bold">Total: {e.price*e.qty}</Text>
                </Flex>
                </Box>
                <br/>
                </div>
                )}
                
            </Box>
    </Box>
  )
}

export default Final