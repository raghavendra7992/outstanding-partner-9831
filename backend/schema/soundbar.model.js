const { Schema, model } = require("mongoose");
const soundbarschema = new Schema({
  id:Number,
  imglink: String,
  name: String,
  MRP: Number,
  MRPx: String,
  brand: String,
  dealprice: Number,
  dealpricex:String,
  discount: Number,
  discountx:String,
  saveprce: Number,
  saveprcex:String,
  cashback:String,
  img1: String,
  img2: String,
  img3: String,
});

const soundbarModel = model("soundbar", soundbarschema);
module.exports = soundbarModel;
