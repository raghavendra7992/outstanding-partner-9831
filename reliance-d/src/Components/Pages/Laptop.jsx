import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Checkbox,  Flex,Input, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack,  StackDivider, Text, VStack } from '@chakra-ui/react'
import React, { useContext, useEffect, useReducer, useState } from 'react'
import { AppContext } from './AppContext'
import Grid1 from './Grid1';
import { reducer } from './reducer';
const Laptop = () => {
    const {addItems1,inlove}=useContext(AppContext)
    const [loading, setLoading] = useState(false);
    const handle=(e)=>{
        let [l,r]=e;
       let left=l*200+26999;
       let right=46999-(100-r)*200;
    //    console.log(left,right)
       setFirst(left)
       setSecond(right)
    }
    useEffect(() => {
        setLoading(true);
        addItems1()
          .then((res) => {
            inlove(res);
            setLoading(false);
            console.log(res);
          })
          .catch((err) => {
            // eslint-disable-next-line no-undef
            toast({
              title: "Something Went Wrong",
              description: `${err.message}`,
              status: "error",
              duration: 3000,
              isClosable: true,
              variant: "top-accent",
              position: "top",
            });
          });
      }, []);
    const [first, setFirst] = useState(26999)
    const [second, setSecond] = useState(46999)
    const [item1, setitem1] = useState(addItems1)
    const [brand1, setBrand1] = useState("")
    const [exclude, setExclude] = useState(false)
    const handleSlider=()=>{
        let y=addItems1.filter(e=>(e.price>first&&e.price<second))
        setitem1(y)
    }

    const handleBrand=(val,check)=>{
        let g=check.target.checked;
        if(g===true)
        {let y=addItems1.filter(e=>e.name.includes(val))
        setitem1(y)
        setBrand1(val)}
        else
        {setitem1(addItems1)
            setBrand1("")}
    }

    const [state, dispatch] = useReducer(reducer,inlove)
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  return (
    <Box>
        <Flex justifyContent="flex-start">
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>         <BreadcrumbLink href='#'><i class="fa-solid fa-house-chimney"></i></BreadcrumbLink>    </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage><BreadcrumbLink href='#'>Search</BreadcrumbLink></BreadcrumbItem>
        </Breadcrumb>
        </Flex>
        <hr/>
        <Flex>
            <Box width={"20%"} borderRight="1px solid #D3D3D3">
            <VStack  divider={<StackDivider borderColor='gray.200' />}  spacing={4}  align='stretch'>
            <Box h='40px' >FILTERS</Box>
            <Box>
                <VStack>
                    <Text>Price</Text>
                    <RangeSlider  aria-label={['min', 'max']}  defaultValue={[0,100]} onChange={(e)=>handle(e)}>
                        <RangeSliderTrack>
                            <RangeSliderFilledTrack />
                        </RangeSliderTrack>
                            <RangeSliderThumb index={0} />
                            <RangeSliderThumb index={1} />
                    </RangeSlider>
                    <Flex justifyContent={"space-between"} width="100%"><Text>₹26999</Text><Text>₹46999</Text></Flex>
                    <br/>
                    <Flex>
                        <Input value={first} onChange={(e)=>setFirst(e.target.value)}/>
                        <Text>to</Text>
                        <Input value={second} onChange={(e)=>setSecond(e.target.value)}/>
                        <Button onClick={handleSlider}>GO</Button>
                    </Flex>
                </VStack>
            </Box>
            <br/>
            <VStack alignItems="flex-start" paddingLeft="10px">
                <Text>Availability</Text>
                <Flex gap="1rem">
                <Checkbox onChange={(e)=>setExclude(e.target.checked)}/>
                <Text>Exclude out of Stock</Text>
                </Flex>
             </VStack>
             <VStack alignItems="flex-start" paddingLeft="10px">
                <Text>Category</Text>
                <Flex gap="1rem">
                <Checkbox />
                <Text>Laptops</Text>
                </Flex>
             </VStack>
             <VStack alignItems="flex-start" paddingLeft="10px">
                <Text>Category</Text>
                <Flex gap="1rem" > <Checkbox onChange={(e)=>handleBrand("Lenovo",e)}/>
                <Text>Lenovo</Text>
                </Flex>
                <Flex gap="1rem">
                <Checkbox onChange={(e)=>handleBrand("Acer",e)}/>
                <Text>Acer</Text>
                </Flex>
                <Flex gap="1rem">
                <Checkbox onChange={(e)=>handleBrand("HP",e)}/>
                <Text>Hp</Text>
                </Flex>
             </VStack>
            </VStack>
            </Box>
            <Box>
                <Flex color="#b0b5b9" justifyContent="flex-start" height="50px" paddingLeft="20px" alignItems="center">
                        <Box>(Showing 1- {item1.length} products of {item1.length} products)</Box>
                </Flex>
                <hr/><br/>
                <Flex alignItems="center" gap="1rem">
                    <Text paddingLeft="20px">Filters:</Text>
                    <Flex gap="1rem">
                        {exclude&&<Box border={"1px solid #D3D3D3"} padding="0px 10px 0px 10px">Exclude out of Stock</Box>}
                        <Box border={"1px solid #D3D3D3"} padding="0px 10px 0px 10px">₹ {first} to ₹ {second}</Box>
                        <Box border={"1px solid #D3D3D3"} padding="0px 10px 0px 10px">Brand: {brand1.length===0?"All":brand1}</Box>
                    </Flex>
                </Flex>
            <Box>
            <hr/><br/>
            <Grid1 list1={item1}/>
            </Box>
            </Box>
        </Flex>
    </Box>
  )
}

export default Laptop