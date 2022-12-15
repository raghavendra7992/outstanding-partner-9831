require("dotenv/config")
const mongoose=require("mongoose");
const app=require("./app");

mongoose.connect(process.env.MONGODB_URL_LOCAL,{
    useN
})