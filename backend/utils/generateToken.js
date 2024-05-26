import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'60d'
    });
    res.cookie("jwt",token,{
        maxAge:60*24*60*60*1000,
        httpOnly:true,//prevent cross scripting attacks xss
        sameSite:"strict",//prevents cross-site request forgery ttacks csfr
        secure: process.env.NODE_ENV !=="development",
    });
}
export default generateTokenAndSetCookie;