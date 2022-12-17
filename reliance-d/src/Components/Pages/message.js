import React from 'react';
// import Alert from 'react-bootstrap/Alert';
import {
    Alert
    
  } from '@chakra-ui/react'
const Message = ({children, variant}) => {
  return (
    <Alert key={variant} variant={variant}>
   {children}
  </Alert>
  )
}

export default Message