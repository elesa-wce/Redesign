import mongoose,{Schema} from "mongoose"

const memberSchema= new Schema(
    {
        name:{
            type: String,
            required: true,
        },
        post:{
            type: String,
            required: true
        },
        photo:{
            type: String,
            required: true
        },
        role:{
            type:String,
            enum:["Chief","Joint","Member"],
            required: true
        }
},{timestamps: true})

export const Member = mongoose.model("Member", memberSchema);