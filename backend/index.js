require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const applianceModel = require("./schema/appliance.model");
const laptopModel = require("./schema/laptops.model");
const soundbarModel = require("./schema/soundbar.model");
const telivisionModel = require("./schema/telivision.model");
const UserModel = require("./schema/user.model");
const watchModel = require("./schema/watch.model");

const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/soundbar", async (req, res) => {
  try {
    let sound = await soundbarModel.find({});

    res.status(200).send(sound);
  } catch (e) {
    res.status(401).send("Invalid api");
  }
});

app.get("/watch", async (req, res) => {
  try {
    let laptop = await watchModel.find({});
    res.status(200).send(laptop);
  } catch (e) {
    res.status(401).send("Invalid api");
  }
});
app.get("/appliance", async (req, res) => {
  try {
    let laptop = await applianceModel.find({});
    res.send(laptop);
  } catch (e) {
    res.status(401).send("Invalid api");
  }
});
app.get("/laptop", async (req, res) => {
  try {
    let laptop = await laptopModel.find({});
    res.status(200).send(laptop);
  } catch (e) {
    res.status(401).send("Invalid api");
  }
});

app.get("/telivison", async (req, res) => {
  try {
    let telivision = await telivisionModel.find({});
    res.status(200).send(telivision);
  } catch (e) {
    res.status(401).send("Invalid api");
  }
});

app.post("/laptop", async (req, res) => {
  try {
    const { id, imglink,name,MRP,MRPx,brand,dealprice,dealpricex,discount,discountx,saveprce,saveprcex,cashback,img1,img2,img3,} = req.body;
    let laptop =  new laptopModel({id, imglink,name,MRP,MRPx,brand,dealprice,dealpricex,discount,discountx,saveprce,saveprcex,cashback,img1,img2,img3});
   await laptop.save();
    res.status(200).send(laptop);
  } catch (e) {
    res.status(401).send("Invalid api");
  }
});
app.post("/watch", async (req, res) => {
  try {
    const { id, imglink,name,MRP,MRPx,brand,dealprice,dealpricex,discount,discountx,saveprce,saveprcex,cashback,img1,img2,img3,} = req.body;
    let watch =  new watchModel({id, imglink,name,MRP,MRPx,brand,dealprice,dealpricex,discount,discountx,saveprce,saveprcex,cashback,img1,img2,img3});
   await watch.save();
    res.status(200).send(watch);
  } catch (e) {
    res.status(401).send("Invalid api");
  }
});
app.post("/soundbar", async (req, res) => {
  try {
    const { id, imglink,name,MRP,MRPx,brand,dealprice,dealpricex,discount,discountx,saveprce,saveprcex,cashback,img1,img2,img3,} = req.body;
    let sound =  new soundbarModel({id, imglink,name,MRP,MRPx,brand,dealprice,dealpricex,discount,discountx,saveprce,saveprcex,cashback,img1,img2,img3});
   await sound.save();
    res.status(200).send(sound);
  } catch (e) {
    res.status(401).send("Invalid api");
  }
});
app.post("/appliance", async (req, res) => {
  try {
    const { id, imglink,name,MRP,MRPx,brand,dealprice,dealpricex,discount,discountx,saveprce,saveprcex,cashback,img1,img2,img3,} = req.body;
    let appliance =  new applianceModel({id, imglink,name,MRP,MRPx,brand,dealprice,dealpricex,discount,discountx,saveprce,saveprcex,cashback,img1,img2,img3});
   await appliance.save();
    res.status(200).send(appliance);
  } catch (e) {
    res.status(401).send("Invalid api");
  }
});
app.post("/telivison", async (req, res) => {
  try {
    const { id, imglink,name,MRP,MRPx,brand,dealprice,dealpricex,discount,discountx,saveprce,saveprcex,cashback,img1,img2,img3} = req.body;
    let telivision =  new telivisionModel({id, imglink,name,MRP,MRPx,brand,dealprice,dealpricex,discount,discountx,saveprce,saveprcex,cashback,img1,img2,img3});
     
   await telivision.save();
    res.status(200).send(telivision);
  } catch (e) {
    res.status(e).send("Invalid api");
  }
});

app.post("/signup", (req, res) => {
  try {
    const { name, email, role, password,phonenumber } = req.body;
    let user = new UserModel({ name, email, role, password,phonenumber});
    user.save();
    res.send(user);
  } catch (e) {
    res.status(401).send("Invalid creditional");
  }
});
app.post("/login", async(req, res) => {
 
  try {
    const { email,password,phonenumber} = req.body;
    
    const user = await UserModel.findOne({ email,password,phonenumber });
   
    res.status(200).send(user);
  } catch (error) {
    res.status(401).send(error);
  }
});
mongoose.connect(process.env.db_url).then(() => {
  app.listen(8080, () => {
    console.log("server statrted on port 8080");
  });
});
