const express = require("express");
const  mongoose = require("mongoose");
const userModel = require("./userModel/user.model")
const app = express();


app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.get("/", (res, req)=>res.send("Home"))

app.post("/signup", async (req, res)=>{
    const {name, email, password, phone} = req.body;
    const user = new userModel({name, email, password, phone});
try{
    await user.save()
    return res.status(201).send("User created Successfull")

}
catch(e){
res.send("user already exist")
}   

})



app.post("/login", async (req, res)=>{
    const {phone} = req.body;
    const user = await userModel.findOne({phone});
    if(user){
        return res.status(200).send("Signup Success", user)
    }
    else{
        return res.status(401).send("Invalid User")
    } 
})




mongoose.connect("mongodb://127.0.0.1:27017/admin").then(()=>{
    app.listen(8080, (res, req)=>{
        console.log("server Started in http://localhost:8080")
    })
})