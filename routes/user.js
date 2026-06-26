const express = require("express");

const {usermodel} = require("../db");
const userRouter = express.Router();

  userRouter.post("/signup",(req,res)=>{
res.json({
    message : "signup endpoint"
   })
})

userRouter.post("/signin",(req,res)=>{
res.json({
    message : "signin endpoint"
   })
})
userRouter.get("/purchases",(req,res)=>{
res.json({
    message : "purchase"
   })
})

module.exports ={
  userRouter : userRouter
}