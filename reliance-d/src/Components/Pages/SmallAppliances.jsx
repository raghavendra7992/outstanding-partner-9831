import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Checkbox,  Flex,  Input, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, StackDivider, Text, VStack } from '@chakra-ui/react'
import React, { useContext, useEffect, useReducer, useState } from 'react'
import { AppContext } from './AppContext'
import Grid1 from './Grid1';
import { reducer } from './reducer';
const SmallAppliances = () => {
    const {addItems2,inlove}=useContext(AppContext)
    const handle=(e)=>{
        let [l,r]=e;
       let left=l*200+1000;
       let right=21000-(100-r)*200;
    //    console.log(left,right)
       setFirst(left)
       setSecond(right)
    }
    const [first, setFirst] = useState(1000)
    const [second, setSecond] = useState(21000)
    const [item1, setitem1] = useState(addItems2)
    const [exclude, setExclude] = useState(false)
    const [brand1, setBrand1] = useState("")
    const handleSlider=()=>{
        let y=addItems2.filter(e=>(e.price>first&&e.price<second))
        setitem1(y)
    }
    const handleBrand=(val,check)=>{
        let g=check.target.checked;
        if(g===true)
        {let y=addItems2.filter(e=>e.name.includes(val))
        setitem1(y)
        setBrand1(val)}
        else
        {setitem1(addItems2)
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
                    <Flex justifyContent={"space-between"} width="100%"><Text>₹1000</Text><Text>₹21000</Text></Flex>
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
                <Text>SmallAppliancess</Text>
                </Flex>
             </VStack>
             <VStack alignItems="flex-start" paddingLeft="10px">
                <Text>Category</Text>
                <Flex gap="1rem" > <Checkbox onChange={(e)=>handleBrand("boAt",e)}/>
                <Text>boAt</Text>
                </Flex>
                <Flex gap="1rem">
                <Checkbox onChange={(e)=>handleBrand("Prestige",e)}/>
                <Text>Prestige</Text>
                </Flex>
                <Flex gap="1rem">
                <Checkbox onChange={(e)=>handleBrand("Lifelong",e)}/>
                <Text>Lifelong</Text>
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

export default SmallAppliances