import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import jwt from "jsonwebtoken";


const ADMIN_CREDENTIALS = {
  _id: "admin24_25", 
  name: "Admin",
  email: "elesalogin@gmail.com",
  role: "Admin"
};

const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    
    if (!token) {
      throw new apiError(401, "Unauthorized request - No access token found");
    }
    const decodedInfo = jwt.verify(token, process.env.JWT_SECRET);
    if (decodedInfo.role !== "Admin" || decodedInfo.email !== ADMIN_CREDENTIALS.email) {
      throw new apiError(403, "Forbidden - Invalid admin access");
    }
    req.user = ADMIN_CREDENTIALS;
    next();
  } catch (error) {
    throw new apiError(401, error?.message || "Invalid access token");
  }
});

export {verifyJWT}
