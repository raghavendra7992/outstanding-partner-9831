// import React from "react";
// import axios from "axios"
// import { useEffect,useState,useContext } from "react";
// import {
//   Box,
//   Stack,
//   Skeleton,
//   Container,
//   Alert,
//   AlertIcon,
//   AlertDescription,
//   Grid,
//   GridItem,
//   Image,
//   Button,
//   Badge,
//   useToast,
  
// } from '@chakra-ui/react'

// import {CartContext} from "../Context/CartContext/CartContextProvider";
// import {addToCart} from "../Context/CartContext/action"
// import { StarIcon } from "@chakra-ui/icons";

// const itemAlreadyExists = (id,cartItems) =>{
//   if(cartItems.find((item)=>item.id === id)){
//     return true
//   }
//   return false
// }

// const Product = () => {
//   const toast = useToast()
//   const [data,setData]= useState([]);
//   const [loading , setLoading] = useState(false);
//   const [error, setError] = useState(false)

//   const {state,dispatch} = useContext(CartContext)
//   const getdata = ()=>{
//     return axios.get("https://relianceapi.onrender.com/laptop")
     
//   }
//   useEffect(()=>{
//     getdata().then((res)=>{ setData(res.data)}).catch((e)=>{console.log(e)})
//     console.log(data[0]._id)
//     setLoading(true);

//   },[])
//   if(loading){
//     return (
//       <Stack my={20}>
//         <Skeleton height="40px" />
//         <Skeleton height="40px" />
//         <Skeleton height="40px" />
//         <Skeleton height="40px" />
//         <Skeleton height="40px" />
//         <Skeleton height="40px" />
//         <Skeleton height="40px" />
//         <Skeleton height="40px" />
//         <Skeleton height="40px" />
//         <Skeleton height="40px" />
//         <Skeleton height="40px" />
//         <Skeleton height="40px" />
//         <Skeleton height="40px" />

//       </Stack>
//     )
//   }

//   if(error){
//     return (
//       <Container width={{base:"full", sm:"full", md:"container.xl", lg:"container.lg",}} centerContent={true}>
// <Alert status="error" py={{base:4, sm:4, md:4, lg:6 }} my={{base:24, sm:24, md:28, lg:40 }} px={{base:1, sm:1, md:4, lg:6 }}>
//   <AlertIcon/>
//   <AlertDescription>Something went wrong. Please refresh</AlertDescription>

// </Alert>
//       </Container>
//     )
//   }

//   const t = ( data)=>{
//     return(
//       toast({
//         title: 'Product Added to Cart.',
        
//         status: 'success',
//         duration: 2000,
//         isClosable: true,
//       }),

//       dispatch(addToCart(data))
     
//     )
//   }

//   return (
//   <Container maxW={{base:"full", md:"container.xl"}} p={{base:2, lg:0}}>
//     <Grid  templateColumns={{base:"repeat(1,1fr)", md:"repeat(2,1fr)", lg:"repeat(4,1fr)"}} gap={4}>

//       {data && data.map((data)=>(
//         <GridItem key={data[0]._id}>

// <Box  bg="#fff" boxShadow="md" _hover={{
//                     boxShadow:"xl",
//                   }}  border="1px" borderColor="#e5e5e5" pt="22px" px="12px">
                    
//                 <Box  w="240px" h="215px" justifySelf="center">
//                 <Image cursor="pointer" w="180px" _hover={{
//                     w: "195px",
//                   }} src={data[0][0].imglink} alt="" />

//                 </Box>
                
//                 <Box
//                 color="#003380"
//                   mt="1"
//                   fontWeight="400"
//                   as="p"
//                   fontSize="15px"
//                   lineHeight="tight"
//                   noOfLines={2}
//                   _hover={{
//                     color: "red",
//                   }}
//                   cursor="pointer"
//                   mb="15px"
//                 >
//                  {data[0].name}
//                 </Box>

//                 <Box display="flex" mt="2" alignItems="center">
//                   {Array(5)
//                     .fill("")
//                     .map((_, i) => (
//                       <StarIcon
//                         key={i}
//                         color={
//                           i < data[0].name ? "rgb(255, 164, 28)" : "gray.300"
//                         }
//                       />
//                     ))}
//                   <Box
//                     as="span"
//                     ml="2"
//                     color="rgb(0, 51, 128)"
//                     fontSize="sm"
//                     fontWeight="500"
//                   >
//                     ( {data[0].name} reviews)
//                   </Box>
//                 </Box>

//                 <Box display="flex" justifyContent="space-between" color="#666" fontSize="14px" >
//                   <Box>
//                     <Box
//                       as="span"
//                       color="black"
//                       fontSize="15px"
//                       fontWeight="bold"
//                     >
//                       ₹{data[0].dealprice}.00
//                     </Box>
//                   </Box>

//                   <Box>
//                     <Box as="span" a="s">
//                       ₹{data[0].dealpricex}.00
//                     </Box>
//                   </Box>

//                   <Box>
//                     <Box as="span" >
//                       {data[0].savepricex}
//                     </Box>
//                   </Box>

                  

                  
//                 </Box>

//                 <Badge
//                     borderRadius="full"
//                     px="2"
//                     colorScheme="green"
//                     border="1px"
//                     fontSize="10px"
//                   >
//                     OFFERS AVAILABLE
//                   </Badge>

//                   <Box display="flex" gap="5px" my="10px" justifyContent="center">

//                   <Button colorScheme="red" varient="outline" disabled={itemAlreadyExists(data[0].id,state)} onClick={ ()=>  t(data[0]) }>
//                     Add To Cart
//                   </Button>

                  

//                   </Box>

                

//               </Box>
//         </GridItem>
//       ))}
//     </Grid>

//   </Container>
//     );
// };

// export default Product;


import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Context/CartContext/action";

const getData = async (typeOfProduct) => {
  let response = await axios.get(
    `https://rus-digital-api.vercel.app/${typeOfProduct}`
  );
  return response.data;
};

const Products = ({ typeOfProduct }) => {
  // const [productArr, setProductArr] = useState([]);
  const productsList = useSelector((store) => store.product.data);
  const loading = useSelector((store) => store.product.loading);
  const error = useSelector((store) => store.product.error);

  const dispatch = useDispatch();
  //   console.log("in the products page and productlist is :-",productsList,"loading status is:- ",loading,"error status is :-",error);

  const category = {
    mobilesandtablets: "MOBILES AND TABLETS",
    televisions: "TELEVISIONS",
    headphones: "HEADPHONES",
    homeappliances: "HOME-APPLIANCES",
    computers: "COMPUTERS",
    cameras: "CAMERAS",
    kitchen: "KITCHEN-APPLIANCES",
    personalcare: "PERSONAL-CARE",
    accessories: "ACCESSORIES",
    whishlist:"whishlist"
  };

  useEffect(() => {
    // getData(typeOfProduct).then((res) => setProductArr(res));
    dispatch(getProducts(typeOfProduct));
  }, [typeOfProduct]);

  if (error) {
    return (
      <Heading
        size="3xl"
        textAlign="center"
        color="red.500"
        marginTop={10}
        marginBottom="200px"
      >
        Some thing went wrong...
      </Heading>
    );
  }

  return (
    <Box p="5">
      <Heading p="5" marginBottom={5}>
        {category[typeOfProduct]}
      </Heading>
      {loading ? (
        <Heading
          size="3xl"
          textAlign="center"
          color="blue.400"
          marginTop={10}
          marginBottom="200px"
        >
          Loading...
        </Heading>
      ) : (
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2,1fr)",
            "repeat(3,1fr)",
            "repeat(4,1fr)",
            "repeat(5,1fr)",
          ]}
          gap={3}
        >
          {productsList.map((elem, i) => {
            // console.log("in the products page in the map method and elem is :- ", elem);
            return (
              <GridItem
                key={elem.name + i}
                w="100%"
                bg="white.500"
                boxShadow="rgba(0, 0, 0, 0.15) 0px 2px 8px"
                padding="25px 25px 0px 25px"
                _hover={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                  cursor: "pointer",
                }}
              >
                <Product data={elem} typeOfProduct={typeOfProduct} />
              </GridItem>
            );
          })}
        </Grid>
      )}
    </Box>
  );
};

export default Products;


