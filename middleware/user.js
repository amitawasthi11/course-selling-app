const jwt = require("jsonwebtoken");
function usermiddleware(req,res,next){
    const token = req.headers.token;
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    if(decoded.role != user){
        res.json({
            message : "access denied"
        })
        req.userId = decoded.id;
        next();
    }else{
        res.json({
            message : "not signed in"
        })
    }
}
module.exports = {
    usermiddleware : usermiddleware
}