import { useState } from "react";
import axios from "../api/axios.js";

function UploadData({onLogout}){
    const [name,setName] = useState("");
    const [post,setPost] = useState("");
    const [role,setRole] = useState("chief");
    const [photo, setPhoto] = useState(null);
    const [message, setMessage] = useState("");
    const token = localStorage.getItem("accessToken");
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("name",name);
        formData.append("post",post);
        formData.append("photo",photo);
        formData.append("role", role);

        try{
            const response = await axios.post("/memb/upload",formData,{
                headers:{
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            })
            setMessage("Members added successfully");
        }
        catch(err){
            setMessage("Error adding members in UploadData.jsx");
        }
    }
    return (
        <div className="member-form">
            <h2>Add your data</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}} required/>
                <input type="text" placeholder="Post" value={post} onChange={(e)=>{setPost(e.target.value)}} required/>
                <select value={role} onChange={(e)=>{setRole(e.target.value)}}>
                    <option value="chief">Chief</option>
                    <option value="joint">Joint</option>
                    <option value="member">Member</option>
                </select>
                <input type="file" accept="image/*" onChange={(e)=>{setPhoto(e.target.files[0])}} required/>
                <button type="submit">Submit Data</button>
            </form>
            {message && <p>{message}</p>}
            <button className="logout-btn" onClick={onLogout}>Logout</button>
        </div>
    )
}

export default UploadData;