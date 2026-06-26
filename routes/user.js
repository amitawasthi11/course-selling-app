const express = require("express");
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const bcrypt = require("bcrypt");
const {usermodel} = require("../db");
const admin = require("./admin");
const userRouter = express.Router();

const signupSchema = z.object({
  firstname : z.string().min(3),
  lastname: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6)
})

  userRouter.post("/signup",async (req,res)=>{
   try{const result = signupSchema.safeParse(req.body);
    
    

   if(!result.success){
    return res.status(400).json({
      message : "invalid input",
      Errors : result.error.issues
    })
   }

    const{email,password,firstname,lastname} = result.data;
    const existinguser = await usermodel.findOne({email});
    if(existinguser){
      return res.json({
        message : "user already exist"
      })
    }
    const hashedpassword = await bcrypt.hash(password,10);
 
    await usermodel.create({
     firstname : firstname,
    lastname : lastname,
    email : email,
    password : hashedpassword,
    })

res.json({
    message : "signup succeded"
   })
  }catch(e){
     return res.status(500).json({
        message: e.message
    });
    
  }
})



const signinSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
});

userRouter.post("/signin",async(req,res)=>{
console.log("Body:", req.body);


try {
  const result = signinSchema.safeParse(req.body);

if (!result.success) {
    return res.status(400).json({
        message: "Invalid input",
        errors: result.error.issues
    });
}
  const{email,password} = result.data;
 const user = await usermodel.findOne({email});
 if(!user){
  return res.status(401).json({
    message : "user not found"
  });
 }
 const ismatch = await bcrypt.compare(password,user.password);
 if(!ismatch){
  return res.status(401).json({
    message : "invalid password"
  });
 }

 res.json({
  message :"login successfully"
 })
  }catch(e){
   return res.status(500).json({
        message: e.message
    });
  }
})


userRouter.get("/purchases",(req,res)=>{
res.json({
    message : "purchase"
   })
})

module.exports ={
  userRouter : userRouter
}