const express = require("express");
// const router = express.Router;
const {coursmodel} = require("../db");
 
const courseRouter = express.Router();

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
courseRouter.post("/deleteCourse",(req,res)=>{
    res.json({
        message : "course deleted"
    })
})
module.exports ={
   courseRouter: courseRouter
}