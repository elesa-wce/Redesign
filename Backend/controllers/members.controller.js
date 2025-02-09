import { Member } from "../models/members.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const addMember = asyncHandler(async(req,res)=>{
    try{
        const {name,post,role} = req.body;
        if([name,post].some((field)=>field?.trim()===""))
            throw new apiError(400,"All field are compulsory");
        const existedUser = await Member.findOne({
            $or: [{name},{post}]
        })
        if(existedUser)
            throw new apiError(409, "User already exits");
        console.log(req.file.path);
        const photoPath = req.file.path
        if(!photoPath)
            throw new apiError(400,"Photo is a required field");
        const pic = await uploadOnCloudinary(photoPath)
        const member = await Member.create({
            name,
            post,
            photo: pic.url,
            role,
        })
        const createdMember = await Member.findById(member._id)
        if(!createdMember)
            throw new apiError(500, "Something went wrong while adding members");
        return res.status(200).json({message: "Member created successfully"})
    }catch(err)
    {
        console.log("Error: ", err);
        throw new apiError(400,"Error is caused in addMember");
    }
})


const getAllMembers = asyncHandler(async(req,res)=>{
    try{
        const members = await Member.find();
        return res.status(200).json({memb: members})
    }
    catch(err){
        throw new apiError(500,"Error fetching all members")
    }
})

const Chiefs = asyncHandler(async(req,res)=>{
    try{
        const members = await Member.find({role:"Chief"});
        return res.status(200).json({memb: members})
    }
    catch(err){
        throw new apiError(500,"Error fetching all members")
    }
})

const Joints = asyncHandler(async(req,res)=>{
    try{
        const members = await Member.find({role:"Joint"});
        return res.status(200).json({memb: members})
    }
    catch(err){
        throw new apiError(500,"Error fetching all members")
    }
})

const Members = asyncHandler(async(req,res)=>{
    try{
        const members = await Member.find({role:"Member"});
        return res.status(200).json({memb: members})
    }
    catch(err){
        throw new apiError(500,"Error fetching all members")
    }
})

export {addMember, getAllMembers, Chiefs,Joints,Members}