import React, { useEffect } from 'react'
import axios from 'axios'

const Laptop = () => {
   const getUser = ()=> {
       
          axios.get("cd").then((res)=>{
            console.log(res)
          }).catch((e)=>{
            console.log(e)
          })
        
      }
      
    useEffect(()=>{
        getUser()
    },[])
   
    // setData = axios.get("https://relianceapi.onrender.com/laptop")
    // console.log(data)
  return (
    <div>Laptop</div>
  )
}

export default Laptop