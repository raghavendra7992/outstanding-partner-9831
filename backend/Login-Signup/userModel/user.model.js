const {Schema, model} = require("mongoose");


const userSchema = new Schema({
    name:String,
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        unique:true
    },
    phone:{
        type:Number,
        require:true,
        unique:true
    }

})

const userModel = model("user", userSchema);
module.exports = userModel