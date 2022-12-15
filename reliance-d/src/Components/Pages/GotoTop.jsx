import React from 'react'
import {Button,Link} from "@chakra-ui/react"
import {  ChevronUpIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";


function GotoTop() {
  return (

    <div>
        <Button pos="fixed" bottom="6"  w="30px" h="30px" opacity="0.7" textAlign="center" bg="gray.100" fontSize="20px" right="4" ><Link textDecoration="none" href="#"><Icon as={ChevronUpIcon} /></Link></Button>
    </div>
  )
}

export default GotoTop