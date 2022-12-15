import React from "react";

import {
  Box,
  Heading,
  Img,
  Link,
  Text,
  Divider,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Select,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Input,
  Button,
  Checkbox,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,

} from "@chakra-ui/react";

import {  ChevronRightIcon } from "@chakra-ui/icons";

import Carousel from "better-react-carousel";

import { FaHome } from "react-icons/fa";
import Product from "./Product"

const bestDealsSlider = [
  {
    image:
      "https://www.reliancedigital.in/medias/iPhone14-Buy-now-CLP-Banner-15-09-2022.jpg?context=bWFzdGVyfGltYWdlc3w5OTQ1MHxpbWFnZS9qcGVnfGltYWdlcy9oNjQvaGRjLzk4OTQwNTU3Mzk0MjIuanBnfDI2NTE3MWZjYjg0MzI3OTM1MTcxZmQ3MTJiMjYwY2IyNDRjZDY5ZjNkZGM5NDYyZTJlNDY4NTQyOTIxMDM5OTY",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Motorola-G71-CLP-Banner-22-09-2022.jpg?context=bWFzdGVyfGltYWdlc3wyMjMyNTd8aW1hZ2UvanBlZ3xpbWFnZXMvaDhiL2hmZS85OTAyMTc3OTc2MzUwLmpwZ3w0YmYxMTFiNGNlYTg0OTk3MjFhZmVlODU0NmU0OTVlMGRlZWY3M2E3NjViN2U1NDEyOGMzMjE0MTUyMDgwM2Mx",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Vivo-V25-CLP-Banner-22-09-2022.jpg?context=bWFzdGVyfGltYWdlc3w5NTAwM3xpbWFnZS9qcGVnfGltYWdlcy9oMWQvaDE1Lzk4OTU0MDI2MDI1MjYuanBnfDE4ZDk1NTYwYmUxYzZkYTBlNzcwNjYyNDVjNTIxMWUyZjc5YTY3YWM4MjU4ZDQ2ZjIxYTg1MGM1NTFiYjQ2OWQ",
  },
  {
    image:
      "https://www.reliancedigital.in/medias/Redmi-9-Activ-CLP-Banner-22-09-2022.jpg?context=bWFzdGVyfGltYWdlc3wyMTA1MTN8aW1hZ2UvanBlZ3xpbWFnZXMvaGNhL2g2ZC85ODk1NDAxOTQ3MTY2LmpwZ3wzOWNkODI4ZGY5NTVlNTI3MDljY2RkM2E0M2NiMWM4YzJhYTFlOTEyYzVlZGMwNzE5OGU5MzAzODVjMjA3MzJh",
  },
  {
    image:
      "https://www.reliancedigital.in/medias/Motorola-E32s-CLP-Banner-6999-22-09-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDE5NzN8aW1hZ2UvanBlZ3xpbWFnZXMvaDY5L2g0My85ODk5OTQ4OTY1OTE4LmpwZ3w1YTZmYjJiODBhYTNhMjIwZjc2ODRjNDM1YWE4NzJmMjNkYWNiZWYzZmFhNzU4OGU4OTE4ZGM5NmVjOTgwZWJh",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/GET-Tecno-Ace-A2-HEADSET-RD-CLP-D.jpg?context=bWFzdGVyfGltYWdlc3w5NjYyMnxpbWFnZS9qcGVnfGltYWdlcy9oYTEvaDY3Lzk4ODEzMDcwNTQxMTAuanBnfDMwNjhiYTA4OTU1M2E3YmFkYWRlMGM3NjgxNjViMjIxYzAxYzQxZWFjNDdkOGU5MzBkYmY1OGZjYjJjM2M5ZjA",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Vivo-Y22-CLP-Banner-22-09-2022.jpg?context=bWFzdGVyfGltYWdlc3wyMDQ4ODR8aW1hZ2UvanBlZ3xpbWFnZXMvaDM4L2g3NC85ODk1NDAyMzQwMzgyLmpwZ3wxNmY4NzE5OWQ3MDA4NWFjYzYxZjc0ZmViNzZlOWVlZDFmZjZiYmMwMmRjNzhkNDgzMTY5MTQ5ZjdkNzE1MWEy",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Xiaomi-HD-Ready-Smart-TV-Carousel-Banner.jpg?context=bWFzdGVyfGltYWdlc3w4NzQwMnxpbWFnZS9qcGVnfGltYWdlcy9oNzIvaGFhLzk4OTg1NDkwODQxOTAuanBnfDBkNGFlNjVlZjY4ODY5MjMyOWZkYTNlNjRlN2I2MzYyZDE1NmU2ZmU0ODI1YjFmNTI3NjZmNmVlMmM1OGQ4Zjg",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Oppo-A77-CLP-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5NTM0OHxpbWFnZS9qcGVnfGltYWdlcy9oYmQvaDA4Lzk4ODcwODM3MjQ4MzAuanBnfDI4ZGVlZjUwZTkyYjA2OTYzZmFkNzVhMWJlMTZiODcwMjg1ZDFjMzMyZTJhMWM0NmMwNDQ0MmYzMjNkNjgwNGE",
  },
];




function SmartPhones() {
  return (
    <Box mb="8px">

      <Carousel cols={1} rows={1} loop={true} showDots={true} autoplay={2000}>
        {bestDealsSlider.map((img) => (
          <Carousel.Item>
            <Link>
              <Img w="100%" src={img.image} />
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>


      <Box bg="#f9f9fa" py="6px">
        <Breadcrumb
          spacing="8px"
          ml="14px"
          fontSize="14px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <FaHome />
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Smartpones</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>

<Divider border="0.5px"/>

<Box bg="#f5f7f7">
<Flex  gap="8px">
  <Box w='300px' h="full" ml="8px" bg="#FFFFFF" boxShadow="xs" pt="20px" px="16px">
    <Heading as="h3" fontSize="18px" my="10px"  fontWeight="400" >FILTERS</Heading>
    <Divider border="0.5px"/>

    <Box  py="16px" >
    <Heading as="h4" fontSize="14px" my="10px"  fontWeight="400"  color="#5a5a59">Price</Heading>

    <RangeSlider defaultValue={[0, 100]} min={0} max={100} step={1} >
  <RangeSliderTrack bg='red.100'>
    <RangeSliderFilledTrack bg='#000' />
  </RangeSliderTrack>
  <RangeSliderThumb boxSize={4} index={0} bg="blue" />
  <RangeSliderThumb boxSize={4} index={1} bg="blue"/>
</RangeSlider>

<Flex alignItems="center" gap="2">
  <Input type="number" placeholder="Min. Price" />
  to
  <Input type="number" placeholder="Max. Price" />
  <Button bg="#003380" borderRadius="0" color="white">Go</Button>
</Flex>

    </Box>

    <Divider border="0.5px"/>

    <Box  py="16px">
    <Heading as="h4" fontSize="14px" my="10px"  fontWeight="400"  color="#5a5a59">Availability</Heading>

    <Checkbox my="16px">Exclude out of Stock</Checkbox>


    </Box>

    <Divider border="0.5px"/>

    <Box  py="16px">
    <Heading as="h4" fontSize="14px" my="10px"  fontWeight="400"  color="#5a5a59">Brand</Heading>

    <Box display="flex" flexDirection="column" fontSize="13px">
    <Checkbox mb="16px">Xiaomi</Checkbox>
    <Checkbox mb="16px">Samsung</Checkbox>
    <Checkbox mb="16px">Apple</Checkbox>
    <Checkbox mb="16px">Realme</Checkbox>

    
    </Box>
        
    </Box>

    <Divider border="0.5px"/>
    
    <Box  py="16px">
    <Heading as="h4" fontSize="14px" my="10px"  fontWeight="400"  color="#5a5a59">Discount Percent</Heading>

    <Box display="flex" flexDirection="column" fontSize="13px">
    <Checkbox mb="16px">10% t0 20%</Checkbox>
    <Checkbox mb="16px">Upto 10%</Checkbox>
    </Box>
        
    </Box>

    <Accordion allowToggle>
  <AccordionItem py="8px">
    <h2>
      <AccordionButton p="0" >
        <Box flex='1' textAlign='left' p="0">
        <Heading as="h4" fontSize="14px" my="10px"  fontWeight="400"  color="#5a5a59">Features</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel p="0">
    <Box display="flex" flexDirection="column" fontSize="13px">
    <Checkbox mb="16px">Bluetooth</Checkbox>
    <Checkbox mb="16px">Fingerprint Recognition </Checkbox>
    <Checkbox mb="16px">EDGE</Checkbox>
    <Checkbox mb="16px">Wi-Fi</Checkbox>
    </Box>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem py="8px">
    <h2>
      <AccordionButton p="0" >
        <Box flex='1' textAlign='left' p="0">
        <Heading as="h4" fontSize="14px" my="10px"  fontWeight="400"  color="#5a5a59">Memory RAM</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel p="0">
    <Box display="flex" flexDirection="column" fontSize="13px">
    <Checkbox mb="16px">16 GB</Checkbox>
    <Checkbox mb="16px">8 GB </Checkbox>
    <Checkbox mb="16px">4 GB</Checkbox>
    </Box>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem py="8px">
    <h2>
      <AccordionButton p="0" >
        <Box flex='1' textAlign='left' p="0">
        <Heading as="h4" fontSize="14px" my="10px"  fontWeight="400"  color="#5a5a59">Primary Camera</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel p="0">
    <Box display="flex" flexDirection="column" fontSize="13px">
    <Checkbox mb="16px">8 MP</Checkbox>
    <Checkbox mb="16px">5 MP </Checkbox>
    <Checkbox mb="16px">2 MP</Checkbox>
    </Box>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
  </Box>

  <Box flex="1" display="flex" flexDirection="column" mr="8px"  gap="8px">

  <Box display="flex" alignItems="center" justifyContent="space-between" bg="#FFFFFF" px="15px" py="12px" pr="12px" boxShadow="xs" >
    <Box>

    <Box >
      <Heading as="h1" fontSize="24px" color="#333333">SMARTPHONES</Heading>
    </Box>
    <Box>
      <Text fontSize="14px" color="#666666">(Showing 1- 24 products of 1117 products)</Text>
    </Box>

    </Box>

    <Box px="15px" >
      <Box px="8px" alignItems="center" py="6px" border="1px" borderColor="#ccc" display="flex">
        <Text as="span" fontSize="14px" color="#9b9b9b">Sort By :</Text>
        <Box  px="6px">
        <Select variant="unstyled" pl="3px" spacing="2px" fontWeight="600" fontSize="14px" icon="false" >
  <option value='Relevance'>Relevance</option>
  <option value='Price(Low-High)'>Price(Low-High)</option>
  <option value='Price(High-Low)'>Price(High-Low)</option>
</Select>
        </Box>

      </Box>
    </Box>
  </Box>


  
    <Product />
  

  </Box>
 
</Flex>
</Box>

    </Box>
  );
}

export default SmartPhones;
