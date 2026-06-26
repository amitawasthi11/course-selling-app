const jwt = require("jsonwebtoken");


function adminiddleware(req,res,next){
const token = req.headers.token;
try{
const decoded = jwt.verify(token,process.env.JWT_SECRET);
if(decoded.role != admin){
    return res.json({
        message : "access denied"
    })
}
req.adminId = decoded.id;
next();
}catch(e){
    console.log("invalid token");
    
}
}
module.exports ={
 adminiddleware : adminiddleware
}
