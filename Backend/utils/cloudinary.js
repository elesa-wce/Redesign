import{v2 as cloudinary} from "cloudinary"
import fs from "fs";

const uploadOnCloudinary = async(filePath)=>{
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    })
    try{
        if(!filePath)
            return null;
        const resp = await cloudinary.uploader.upload(filePath,{
            resource_type: "auto",
        })
        fs.unlinkSync(filePath)
        return resp
    }
    catch(error){
        fs.unlinkSync(filePath)
    }
}

export {uploadOnCloudinary}