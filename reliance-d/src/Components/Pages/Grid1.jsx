import { Box,  Checkbox, Flex, Grid, GridItem, Image,  Text } from '@chakra-ui/react'

import Style from "./Home.module.css";
import { useNavigate } from 'react-router-dom';

const Grid1 = ({list1}) => {
    const navigate=useNavigate();
  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={4} paddingLeft="1%">
                {list1.map(e=>(<GridItem border={"1px solid #D3D3D3"} className={Style.q22} onClick={()=>navigate(`/item/${e.id}`)}>
                <Box boxSize='180px'>
                    <Image src={e.image} alt='Dan Abramov' />
                </Box>

                <Flex flexDirection="column" alignItems="flex-start" paddingLeft="10px" justifyContent="space-around" height="80%">
                <Text className={Style.h1} paddingLeft="10px" color={"#1f4985"}>{e.name}</Text>
                    <Flex justifyContent="space-around" width="70%">
                    <Text>₹{e.price}</Text>
                    <Text textDecoration={"line-through"}>₹{e.offer}</Text>
                    <Text color={"green"}>{e.save}%</Text>
                    </Flex>
                    <button className={Style.b1}>OFFERS AVAILABLE</button>
                </Flex>

                    <Flex width="100%">
                        <Flex border={"1px solid #D3D3D3"} gap="1rem" width="50%" height="40px" alignItems="center" justifyContent="center"><Checkbox /><Text>Compare</Text></Flex>
                        <Flex border={"1px solid #D3D3D3"} gap="1rem" width="50%" height="40px" alignItems="center" justifyContent="center">
                        <img
                      id={Style.e1}
                      src={
                        !e.love
                          ? "https://th.bing.com/th/id/R.5365673f66386551fa6df965535bcfa1?rik=UzbBo%2bjcduyTuQ&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fKTn%2fXnM%2fKTnXnMAgc.png&ehk=vhGmsnENrQL2IH%2f9jIOSj8tJvVOxXNRhYqiiQMzUQGw%3d&risl=&pid=ImgRaw&r=0"
                          : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
                      }
                      alt="no"
                    //   onClick={() => thelove(e.id)}
                    />
                            <Text>Wishlist</Text></Flex>
                    </Flex>
                </GridItem>))}
            </Grid>
  )
}

export default Grid1