import { Box, Button, Divider, Flex,Image,Input,InputGroup,InputRightAddon,Spacer,Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from './AppContext'

const Cart = () => {
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
        <Flex>
        <Text>My Cart ({item.length} Items)</Text>
        <Spacer/><Spacer/><Spacer/><Spacer/><Spacer/><Spacer/><Spacer/><Spacer/><Spacer/><Spacer/>
        <Text>Shipping to:  670007 <i class="fa-solid fa-location-dot"></i></Text>
        <Spacer/>
        <Button colorScheme='red' variant='solid' width="30%" onClick={handleCheckout}>
            Checkout
        </Button>
        </Flex>
        <br/>
        <Flex>
            <Box width="67%">
                {item.map(e=>
                <div key={e.id}>
                <Box border="1px solid #bdbdbd">
                <Flex>
                <Box>
                <Image src={e.image} alt="no" width="200px"/>
                <Flex width="170px" justifyContent="space-between" margin="auto">
                    <Button disabled={e.qty===1} colorScheme="gray" onClick={()=>handleAdd(-1,e.id)}>-</Button>
                    <Input value={e.qty} width="70px"/>
                    <Button colorScheme="gray" onClick={()=>handleAdd(1,e.id)}>+</Button>
                </Flex>
                </Box>
                <Box>
                    <br/>
                <Text width="400px" textAlign="left" fontWeight="bold" fontSize='sm'>{e.name}</Text>
                </Box>
                <Box textAlign="right">
                    <br/>
                    <Text fontWeight="bold">₹ {e.price}</Text>
                    <Text fontSize='xs'>Free Shipping</Text>
                    <Text fontSize='xs'>*Delivery assurance is subject to our delivery locations</Text>
                        <Text fontSize='xs'>staying open as per govt. regulations</Text>
                </Box>
                </Flex>
                <Flex>
                <Box cursor="pointer" color='blue'height="35px" variant='link' border="1px solid #bdbdbd" width="50%" onClick={()=>handleDelete(e.id)}>            Remove       </Box>
                <Box cursor="pointer" color='blue' variant='link' border="1px solid #bdbdbd" width="50%">            Move to Wishlist       </Box> 
                </Flex>
                </Box>
                <br/>
                </div>
                )}
                
            </Box>
            <Spacer/>
            <Box border="1px solid #bdbdbd" width="30%" height="300px">
                <br/>
            <InputGroup size='sm'width="90%" margin="auto">
                <Input placeholder='Coupon Code' />
                <InputRightAddon children='APPLY' color="blue"/>
            </InputGroup>
            <Box width="90%" margin="auto">
            <Text fontWeight="bold" textAlign="left">PRICE DETAILS</Text>
            <br/>
            <Flex justifyContent="space-between">
                <Text>Price ({item.length} Items)</Text>
                <Text>₹{total}</Text>
            </Flex>
            <br/>
            <Flex justifyContent="space-between">
                <Text>Delivery Charges</Text>
                <Text color="green">FREE</Text>
            </Flex>
            <br/>
            <Divider />
            <Flex justifyContent="space-between">
                <Text>Discount</Text>
                <Text>₹1000</Text>
            </Flex>
            <br/>
            <Divider />
            <Flex justifyContent="space-between" fontWeight="bold">
                <Text>AMOUNT PAYABLE</Text>
                <Text>₹{total-1000}</Text>
            </Flex>
            </Box>
            </Box>
        </Flex>
    </Box>
  )
}

export default Cart