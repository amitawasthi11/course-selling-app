const express = require("express");
// const router = express.Router;
const {coursemodel} = require("../db");
 
const courseRouter = express.Router();

courseRouter.post("/purchase",(req,res)=>{
res.json({
    message : "purchase"
   })
})

courseRouter.get("/preview",async(req,res)=>{
      console.log("preview is hit");
      
    const courses = await coursemodel.find({});
res.json({
    message : "signup endpoint",
    courses
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