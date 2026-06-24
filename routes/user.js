const express = require("express");
const router = express.Router;

const userRouter = router();


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