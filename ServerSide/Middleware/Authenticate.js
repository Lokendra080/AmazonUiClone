const jwt = require('jsonwebtoken')
const USER= require("../Models/userSchema");
const secretKey= process.env.KEY;
// const Cookies = require("cookie-parser")


const athenticate = async(req,res,next)=>{
    try {
        const token=req.Cookie;
        const verifyCookieSecretKey= jwt.verify(token,secretKey) 
        console.log(verifyCookieSecretKey);

        const finduserWithId=await USER.findOne({_id:verifyCookieSecretKey._id,"tokens.token":token})
        console.log(finduserWithId);
        if(!finduserWithId){throw new Error("User not found")}
        req.token= token;
        req.finduserWithId=finduserWithId;
        req.userId=finduserWithId._id;

        next()
    } catch (error) {
        res.status(401).json({ error: "Unauthorized: No token provided by authe"  });
        console.log(error);
    }
}

module.exports =athenticate;