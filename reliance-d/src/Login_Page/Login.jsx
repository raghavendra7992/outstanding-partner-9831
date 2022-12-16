import React, { useContext, useState } from 'react'
import { Box,Input,Button,Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Login = () => {
    const navigate=useNavigate();
    const {mobile,setMobile} = useContext(AppContext)
    const [first, setFirst] = useState(false)
  return (
    <div style={{height:"300px"}}>
        <br/>
        <Box marginLeft="65%" width="500px" boxShadow='md' display="flex" flexDirection="column" height="250px" justifyContent="space-around" alignItems="center">
        <Text fontWeight="bold">Login/Register</Text>
        <Input type="number" placeholder='Enter Mobile Number' width="90%" onChange={(e)=>setMobile(e.target.value)}/>
        {first&&<Text color="red" fontSize='sm'>Mobile number is necessary</Text>}
        <Button colorScheme='red' width="90%" onClick={()=>
          {if(mobile.length!==0)
            navigate("/register")
            else
            setFirst(true)
          }}>PROCEED</Button>
        </Box>
        <br/>
    </div>
  )
}

export default Login