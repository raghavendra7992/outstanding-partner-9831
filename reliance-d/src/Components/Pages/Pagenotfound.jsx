import React from 'react'
import {Box,Image,Center,Link,Text} from "@chakra-ui/react"


function Pagenotfound() {
  return (
    <div>
        <Center>
            
            <Image w="60%" src="https://www.reliancedigital.in/build/client/images/404-Page.jpg" />
            
        </Center>

        <Center m="30px">
            <Box>

            
        <Box display="flex" >
            <Image w="35px" mr="10px" h="35px"src='https://www.reliancedigital.in/build/client/images/check-square.png'/>
            
            <Text as="span" fontSize="24px">View exciting offers on our <Link color="blue" href='/'>Home Page</Link></Text>
        </Box>

        <Box display="flex" >
            <Image w="35px" mr="10px" h="35px"src='https://www.reliancedigital.in/build/client/images/check-square.png'/>
            
            <Text as="span" fontSize="24px">Use the Search bar on top of this page to discover products of interest.</Text>
        </Box>
        </Box>
        </Center>
        
        

    </div>
  )
}

export default Pagenotfound