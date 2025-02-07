import mongoose,{Schema} from "mongoose"

const memberSchema= new Schema(
    {
        name:String,
        post:String,
        photo:String,
        role:{
            type:String,
            enum:["Chief","Joint","Member"],
            required: true
        }
},{timestamps: true})

export const Member = mongoose.model("Member", memberSchema);