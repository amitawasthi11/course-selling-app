const express = require("express");
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const bcrypt = require("bcrypt");
const {adminmodel} = require("../db");


const adminRouter = express.Router();
// adminRouter.use(adminMiddleware);

const signupSchema = z.object({
  firstname : z.string().min(3),
  lastname: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6)
})


 adminRouter.post("/signup",async(req,res)=>{   
try{const result = signupSchema.safeParse(req.body);
    
    

   if(!result.success){
    return res.status(400).json({
      message : "invalid input",
      Errors : result.error.issues
    })
   }

    const{email,password,firstname,lastname} = result.data;
    const existinguser = await adminmodel.findOne({email});
    if(existinguser){
      return res.json({
        message : "user already exist"
      })
    }
    const hashedpassword = await bcrypt.hash(password,10);
 
    await adminmodel.create({
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



adminRouter.post("/signin",async (req,res)=>{
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
 const admin = await adminmodel.findOne({email});
 if(!admin){
  return res.status(401).json({
    message : "user not found"
  });
 }
 const ismatch = await bcrypt.compare(password,admin.password);
 if(!ismatch){
  return res.status(401).json({
    message : "invalid password"
  });
 }

 const token = jwt.sign({
  id: admin._id
 },process.env.JWT_SECRET)


 res.json({
  message :"login successfully",
  token : token
 })
}catch(e){
   return res.status(500).json({
        message: e.message
    });
  }
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