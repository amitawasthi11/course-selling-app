const express = require("express");
const router = express.Router;

const courseRouter = router();

courseRouter.post("/purchase",(req,res)=>{
res.json({
    message : "purchase"
   })
})

courseRouter.get("/preview",(req,res)=>{
res.json({
    message : "signup endpoint"
   })
})

module.exports ={
   courseRouter: courseRouter
}