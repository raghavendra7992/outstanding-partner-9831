import React, { useContext, useRef, useState } from 'react'
import { Box,Input,Button,Text,Flex, useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Register = () => {
    const navigate=useNavigate();
    const {mobile,setemail,email,setlastName,lastName,setfirstName,firstName,mobile1,setMobile1} = useContext(AppContext)
    const [first, setfirst] = useState(true)
    const [firstnam, setfirstnam] = useState("")
    const [verified, setverified] = useState(false)
    const ref1=useRef({})
    const handleEmail=()=>{
      if(email==="")
      setfirst(true)
      else
      {setfirst(false)
      alert("3456")}
    }
    const handleOTP=()=>{
      if(verified)
      alert("Already verified")
      else
     { if(Number(ref1.current.otp.value)===3456)
      {alert("OTP verified")
      setverified(true)}
      else
      alert("Wrong OTP")}
    }
    const handle123=()=>{
      if(firstnam!==""&&lastName!==""&&email!=="")
            {setfirstName(firstnam); 
                
              navigate("/");
            }
            else
            setfirst(true)
            
    }
    const toast = useToast()
  return (
    <div style={{height:"700px"}}>
        <br/>
        <Box margin="auto" width="500px" boxShadow='md' display="flex" flexDirection="column" height="600px" justifyContent="space-around" alignItems="center">
        <Text fontWeight="bold">Register New Account</Text>
        <Input placeholder='First Name*' width="90%" onChange={(e)=>setfirstnam(e.target.value)}/>
        <Input placeholder='Last Name*' width="90%" onChange={(e)=>setlastName(e.target.value)}/>
        <Input placeholder='Email Address*' width="90%" onChange={(e)=>setemail(e.target.value)}/>
        {first&&<Text color="red" fontSize='sm'>Field marked * are mandatory</Text>}
        <Text  fontSize='xs'>Your email address will be used to send order invoice, order updates etc.</Text>
        {first?<Button colorScheme='red' variant='outline' onClick={handleEmail}>
            Verify Email
        </Button>:<Flex>
        <Input placeholder='Enter OTP' width="90%" ref={(e)=>ref1.current["otp"]=e}/>
        <Button colorScheme={verified?'green':'red'} variant='solid' onClick={handleOTP}>
            {verified?"Verified 🗸":"Submit OTP"}
        </Button></Flex>
        }
        <Input placeholder='Mobile Number*' width="90%" value={mobile}/>
        <Text  fontSize='xs'>Your mobile number will be used to avail benefits such as Jio Mart Cashback and ROne Loyality Points and receive quick notifications.

</Text>
        <Button colorScheme='red' width="90%" onClick={()=>{
          if(firstnam!==""&&lastName!==""&&email!=="")
          {setfirstName(firstnam); 
          toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        }) 
        navigate("/checkout")
        }
        else
        setfirst(true)}}>PROCEED</Button>
        <Flex justifyContent="center" alignItems="center" >
        <Text  fontSize='xs'>Already registered?</Text>
        <Button colorScheme='red' variant='link'>
            LOGIN
        </Button>
        </Flex>
        
        <br/>
        </Box>
        <br/>
    </div>
  )
}

export default Register