import React , {useState} from "react"
import "./Signup.css"
import axios from "axios"
// import Message from "./message"
import {Link,useNavigate} from "react-router-dom"


function Login(){
    const [formdata,setformdata]=useState({})
    const navigate=useNavigate()
    const onNameChange=(e)=>{
      
        const inputname=e.target.name
       
        
        if(inputname==="email"){
            setformdata({
                ...formdata,
                email:e.target.value
            })
        }
      

        if(inputname==="password"){
            setformdata({
                ...formdata,
                password:e.target.value
            })
        }

       
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
       
        axios.post("https://relianceapi.onrender.com/login",formdata).then(res=>{
            console.log(res)
            if(res.data.message){
                // alert(res.data.message)
            }
            else{
                // alert(res.data.data)
            }
        })

        navigate("/")
       
    }



    return(<div style={{"paddingTop":"170px","paddingBottom":"20px"}}>

    <div style={{"paddingBottom":"20px","borderRadius":"5px","margin":"auto","width":"35%","backgroundColor":"#ffffff","border":"1px solid black","height":"auto","boxShadow": "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
    
    <div style={{"margin":"auto"}}>
        <h1>Log In</h1>
    </div>
    <hr/>

    <div>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email Address*" name="email" className="inpelem" onChange={onNameChange}/> <br/>
            <input type="password" placeholder="Password*" name="password" className="inpelem" onChange={onNameChange}/> <br/>
            {/* <input type="submit">Proceed</input> */}
            <button style={{"width":"480px","marginTop":"30px","height":"30px","marginLeft":"42px"}}>Proceed</button>
            <Link to="/signup"  className=" btn mt-2  text-decoration-none text-center" >Create an account</Link>
        </form>
    </div>

    </div>
    
   
    </div>)
   

}

export default Login