const { Schema, model } = require("mongoose");
const UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    require:true,
    unique: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  password: String,
  phonenumbr:{
    type:Number,
    require:true,
    unique:true,
  }
  
});

const UserModel = model("user", UserSchema);
module.exports = UserModel;
