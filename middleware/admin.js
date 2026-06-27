const jwt = require("jsonwebtoken");


function adminmiddleware(req,res,next){
    console.log(req.headers);
    console.log("Middleware called");
const token = req.headers.token;
if(!token){
    return res.status(401).json({
        message : "token not provided"
    })
}
try{
const decoded = jwt.verify(token,process.env.JWT_SECRET);
req.createrID = decoded.id;
next();
// if(decoded.role != admin){
//     return res.json({
//         message : "access denied"
//     })
// }
// req.creatorId = decoded.id;
// next();

}catch (e) {
    return res.status(401).json({
        message: e.message
    });
}
}
module.exports ={
 adminmiddleware : adminmiddleware
}


