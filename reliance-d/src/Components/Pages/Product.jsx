import React from "react";
import axios from "axios"
import { useEffect,useState,useContext } from "react";
import {
  Box,
  Stack,
  Skeleton,
  Container,
  Alert,
  AlertIcon,
  AlertDescription,
  Grid,
  GridItem,
  Image,
  Button,
  Badge,
  useToast,
  
} from '@chakra-ui/react'

import {CartContext} from "../Context/CartContext/CartContextProvider";
import {addToCart} from "../Context/CartContext/action"
import { StarIcon } from "@chakra-ui/icons";



async function getData() {
  try {
    const response = await axios.get('https://relianceapi.onrender.com/laptop');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
getData()

const itemAlreadyExists = (id,cartItems) =>{
  if(cartItems.find((item)=>item.id === id)){
    console.log(getData)
  }
}

const Product = () => {
  const toast = useToast()
  const [data,setData]= useState([]);
  const [loading , setLoading] = useState(false);
  const [error, setError] = useState(false)

  const {state,dispatch} = useContext(CartContext)



  useEffect(()=>{
    setLoading(true);
    getData()
    .then((res)=>{
      setData(res.data)
      setError(false)
    })
    .catch(()=>{
      setError(true)
      setData([])
    })
    .finally(()=>{
setLoading(false)
    })
  },[])

  if(loading){
    return (
      <Stack my={20}>
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />

      </Stack>
    )
  }

  if(error){
    return (
      <Container width={{base:"full", sm:"full", md:"container.xl", lg:"container.lg",}} centerContent={true}>
<Alert status="error" py={{base:4, sm:4, md:4, lg:6 }} my={{base:24, sm:24, md:28, lg:40 }} px={{base:1, sm:1, md:4, lg:6 }}>
  <AlertIcon/>
  <AlertDescription>Something went wrong. Please refresh</AlertDescription>

</Alert>
      </Container>
    )
  }

  const t = ( watch)=>{
    return(
      toast({
        title: 'Product Added to Cart.',
        
        status: 'success',
        duration: 2000,
        isClosable: true,
      }),

      dispatch(addToCart(watch))
    )
  }

  return (
  <Container maxW={{base:"full", md:"container.xl"}} p={{base:2, lg:0}}>
    <Grid  templateColumns={{base:"repeat(1,1fr)", md:"repeat(2,1fr)", lg:"repeat(4,1fr)"}} gap={4}>

      {data && data.map((watch)=>(
        <GridItem key={watch.id}>

<Box  bg="#fff" boxShadow="md" _hover={{
                    boxShadow:"xl",
                  }}  border="1px" borderColor="#e5e5e5" pt="22px" px="12px">
                    
                <Box  w="240px" h="215px" justifySelf="center">
                <Image cursor="pointer" w="180px" _hover={{
                    w: "195px",
                  }} src={watch.imag1} alt="" />

                </Box>
                
                <Box
                color="#003380"
                  mt="1"
                  fontWeight="400"
                  as="p"
                  fontSize="15px"
                  lineHeight="tight"
                  noOfLines={2}
                  _hover={{
                    color: "red",
                  }}
                  cursor="pointer"
                  mb="15px"
                >
                 {watch.title}
                </Box>

                <Box display="flex" mt="2" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={
                          i < watch.name ? "rgb(255, 164, 28)" : "gray.300"
                        }
                      />
                    ))}
                  <Box
                    as="span"
                    ml="2"
                    color="rgb(0, 51, 128)"
                    fontSize="sm"
                    fontWeight="500"
                  >
                    ( {watch.name} reviews)
                  </Box>
                </Box>

                <Box display="flex" justifyContent="space-between" color="#666" fontSize="14px" >
                  <Box>
                    <Box
                      as="span"
                      color="black"
                      fontSize="15px"
                      fontWeight="bold"
                    >
                      ₹{watch.dealprice}.00
                    </Box>
                  </Box>

                  <Box>
                    <Box as="span" a="s">
                      ₹{watch.dealpricex}.00
                    </Box>
                  </Box>

                  <Box>
                    <Box as="span" >
                      {watch.savepricex}
                    </Box>
                  </Box>

                  

                  
                </Box>

                <Badge
                    borderRadius="full"
                    px="2"
                    colorScheme="green"
                    border="1px"
                    fontSize="10px"
                  >
                    OFFERS AVAILABLE
                  </Badge>

                  <Box display="flex" gap="5px" my="10px" justifyContent="center">

                  <Button colorScheme="red" varient="outline" disabled={itemAlreadyExists(watch.id,state)} onClick={ ()=>  t(watch) }>
                    Add To Cart
                  </Button>

                  

                  </Box>

                

              </Box>
        </GridItem>
      ))}
    </Grid>

  </Container>
    );
};

export default Product;
