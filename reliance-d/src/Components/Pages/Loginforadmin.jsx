import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';

import { Link  } from "react-router-dom"
import {useNavigate} from "react-router-dom"



const Loginforadmin=()=> {
    const [text, setText] = useState({
        email : "",
        password:""
    })
    const handelChangeInput  =(e)=>{
        setText({...text,[e.target.type]:e.target.value})
    }
    const navigate = useNavigate()
    const handelSubmit = ()=>{
        if(text.email === "reliance@gmail.com" && text.password === "ambani"){
            //send dashboard
            navigate("/admin-Dashboard")
        }else if(text.email === "reliance@gmail.com" && text.password !== "ambani"){
            //password wrong
        }else if(text.email !== "reliance@gmail.com" && text.password === "ambani"){
            //email wrong
        }else{
            //all this are wrong
        }
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to Admin Account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        Create New Account <Link to="/signup" style={{ textDecoration: 'none', color: 'blue' }} >Signup</Link>
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" value={text.email} onChange={handelChangeInput}/>
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" value={text.password} onChange={handelChangeInput}/>
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Link color={'blue.400'}>Forgot password?</Link>
                            </Stack>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }} onClick = {handelSubmit}>
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
 );
}
export default Loginforadmin