import React, { useContext, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from './AppContext';
import { UnorderedList,ListItem, Box,  Button,  Flex, Image, Input, Spacer, Text } from '@chakra-ui/react'




const EachProduct = () => {
    const params=useParams();
    const {bigarr,setCar,pincode,setPincode,settotal} = useContext(AppContext)
    const navigate=useNavigate()
    const pin = useRef({})

    let g={};
    for(let i=0;i<bigarr.length;++i)
    {
        if(bigarr[i].id===Number(params.id))
        {g=bigarr[i];
            g.qty=1;}
    }
   

const dataAdd=()=>{
    let r=JSON.parse(localStorage.getItem("cart"))||[]
    let tempCart =r.filter((item) => item.id === g.id);
    if (tempCart < 1)
    {r.push(g)
    }
    const initialValue = 0;
    const sum = r.reduce((total, item) => item.price*item.qty + total, 0);
    settotal(sum)
    localStorage.setItem("cart",JSON.stringify(r))    
}

useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <Flex>
            <Box width="40%">
                <Image src={g.image} margin="auto"/>
            </Box>
            <Box textAlign="left" >
                <Text color="grey">Article ID: 492849541</Text>
                <br/>
                <Text fontSize='xl'>{g.name}</Text>
                <br/>
                <hr/>
                <Flex >
                <Box borderRight="1px solid #D3D3D3" paddingRight="30px">
                    <UnorderedList fontSize='sm'>
  <Text fontWeight="bold">Gain more with offers (8)</Text>
  <ListItem>10% Instant Discount with HDFC Bank Credit Cards. Read T&C</ListItem>
  <ListItem>Up to 7.5% Instant Discount(Max Rs.7500) with ICICI Bank Cards. Read T&C</ListItem>
  <ListItem>Flat Rs 500 off for the First Time Users, Use coupon code "NEW500". Read T&C</ListItem>
  <ListItem>Buy RCP warranty and save up to 55%. Read T&C</ListItem>
  <Text>See more</Text>
  <Text fontWeight="bold">Save more with EMI/Cashback (1) Read T&C</Text>
  <ListItem>EMIs (Credit Cards) from ₹1458.81/month | View all Standard Credit Cards EMI options</ListItem>
  <ListItem> Warranty: 1 Year manufacturer warranty</ListItem>
  <Text fontWeight="bold">Return Policy</Text>
  <ListItem>  Items are eligible for return within 7 Days of Delivery. Read T&C</ListItem>
  <ListItem>All accessories, product & packaging need to be returned in original condition.</ListItem>
                        </UnorderedList>
                        </Box>
                    <Flex paddingLeft="20px" flexDirection="column" justifyContent="space-between">
                        <Text fontSize='2xl' color="#28316b">₹ {g.price}</Text>
                        <Flex><Text>MRP: </Text><Text as='del'>₹{g.offer}</Text></Flex>
                        <Flex color="green"><Text>You Save :</Text><Text>{g.save}%</Text></Flex>
                        <Text fontWeight="bold">FREE Shipping!</Text>
                        <Input placeholder='Pin Code' value={pincode} ref={(e)=>pin.current.value=e}/>
                        <Text fontSize='xs'>*Delivery assurance is subject to our delivery locations staying open as per govt. regulations</Text>
                        <Flex>
                        <Button borderRadius="none" colorScheme='red' width="200px"
                        onClick={()=>{dataAdd();navigate("/cart");}}
                        >ADD TO CART</Button>
                        <Spacer/>
                        <Button borderRadius="none" colorScheme='orange' width="200px">BUY NOW</Button>
                        <Spacer/>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
        <br/>
    </div>
  )
}

export default EachProduct