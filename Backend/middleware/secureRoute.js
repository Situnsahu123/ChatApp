import jwt from "jsonwebtoken";
import User from '../models/User.module.js'


const secureRoute = async (req,res,next) =>{
try {
    const token = req.cookies.jwt;
    if(!token){
        return res.status(401).json({error: "no token found "})
    }
    const decoded = jwt.verify(token,process.env.JWT_TOKEN);
    if(!decoded){
        return res.status(401).json({error:"invalid token"})
    }
    const user = await User.findById(decoded.userId).select("-password")
    if(!user){
       return res.status(401).json({error:"no user found"})  
    }
    req.user = user;
    next()
} catch (error) {
    console.log("Error in  seciure route :" , error)
    res.status(500).json({error: "Internet server error "})
}
}

export default secureRoute