const express = require('express')
const  mongoose  = require('mongoose')
const applianceModel = require('./schema/appliance.model')
const soundbarModel = require('./schema/soundbar.model')
const UserModel = require('./schema/user.model')
const watchModel = require('./schema/watch.model')
 

const app = express()

app.use(express.urlencoded({extended:true}))

app.use(express.json())



app.get("/soundbar", async(req,res)=>{
try{ let sound = await soundbarModel.find({})
  
    res.send(sound)}
    catch(e){
        console.log("error")
    }
})

app.get("/watch", async(req,res)=>{
   try {let laptop = await watchModel.find({})
    res.send(laptop)}
    catch(e){
        console.log("error")
    }
})
app.get("/appliance", async(req,res)=>{
    try {let laptop = await applianceModel.find({})
     res.send(laptop)}
     catch(e){
         console.log("error")
     }
 })
 app.get("/laptop", async(req,res)=>{
    try {let laptop = await laptop.find({})
     res.send(laptop)}
     catch(e){
         console.log("error")
     }
 })

app.post("/signup",(req,res)=>{
   try {const{name,email,role,password,phonenumber}= req.body
    let user = new UserModel({name,email,role,password,phonenumber});
    user.save()
    res.send(user)}
    catch(e){
        console.log("error")
    }
})
app.post("/login",(req,res)=>{
    try {
        const{email,password,phonenumber}= req.body
    let user =  UserModel.findOne({email,password,phonenumber});
   
    res.send(user)}
    catch(e){
        console.log("error")
    }
})
mongoose.connect("mongodb+srv://Krushna:8788@cluster0.ottwj2f.mongodb.net/Reliance?retryWrites=true&w=majority").then(()=>{
    app.listen(8080,()=>{  console.log('server statrted on port 8080')})
})

