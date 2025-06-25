import jwt from "jsonwebtoken"

const createToken = (userId,res,req) =>{
 const Token = jwt.sign({userId},process.env.JWT_TOKEN,{
    expiresIn:"10d"
 })
 res.cookie("jwt",Token,{
    httpOnly:true,
    secure:true,
    sameSite:"lax"
 })
}

export default createToken