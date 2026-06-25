const express = require("express");
const router = express.Router;
const {adminModel} = require("../db");

const adminRouter = express.Router();
// adminRouter.use(adminMiddleware);

 adminRouter.post("/signup",(req,res)=>{
res.json({
    message : "signup endpoint"
   })
})

adminRouter.post("/signin",(req,res)=>{
res.json({
    message : "signin endpoint"
   })
})

adminRouter.post("/course",(req,res)=>{
    res.json({
        message : "course created"
    })
})

adminRouter.put("/course",(req,res)=>{
    res.json({
        message : "course created"
    })
})

adminRouter.get("/course/bulk",(req,res)=>{
    res.json({
        message : "course created"
    })
})



module.exports = {
    adminRouter:adminRouter
}