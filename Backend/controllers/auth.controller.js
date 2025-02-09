import jwt from "jsonwebtoken";
import {apiError} from "../utils/apiError.js";
import {asyncHandler} from "../utils/asyncHandler.js";

const ADMIN_CREDENTIALS = {
    _id: "admin24_25", 
    name: "Admin",
    email: "elesalogin@gmail.com",
    role: "Admin"
};

const generateAccessToken=()=>{
    return jwt.sign({role:"Admin", email:ADMIN_CREDENTIALS.email},process.env.JWT_SECRET,{expiresIn:process.env.SECRET_EXP});
}

const generateRefreshToken = ()=>{
    return jwt.sign({role:"Admin", email : ADMIN_CREDENTIALS.email},process.env.REFRESH_TOKEN_SECRET,{expiresIn: process.env.REF_EXP})
}

const loginAdmin = asyncHandler(async (req,res)=>{
    try {
        const {email , password} = req.body;
        if(email !== ADMIN_CREDENTIALS.email || password !== "elesaBoardLogin25")
            return res.status(401).json({error:"Invalid admin credentials"});
        res.clearCookie(`refreshToken`);
        const accessToken = generateAccessToken();
        const refreshToken = generateRefreshToken();
        const option={
            httpOnly: true,
            secure: true,
            sameSite : "None"
        }
        return res.cookie("accessToken",accessToken,option).cookie("refreshToken", refreshToken,option).json({accessToken,admin :ADMIN_CREDENTIALS});
    } catch (error) {
         throw new apiError(500,"Login Failed")
    }
})

const logoutAdmin = asyncHandler (async (req,res)=>{
    if(!req.cookies.refreshToken)
        return res.status(400).json({error:`Already logged out`});
    return res.clearCookie("refreshToken").clearCookie("accessToken").json({message:"Logged out successfully"});
})

export {loginAdmin, logoutAdmin}