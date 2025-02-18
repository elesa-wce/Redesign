import { useState } from "react";
import axios from "../api/axios.js";

function UploadData({onLogout}){
    const [name,setName] = useState("");
    const [post,setPost] = useState("");
    const [role,setRole] = useState("Chief");
    const [photo, setPhoto] = useState(null);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem("accessToken");
    const handleSubmit= async(e)=>{
        e.preventDefault();
        setLoading(true);
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
        finally{
            setTimeout(() => setLoading(false), 1500);
        }
    }
    return (
        <div className="member-form">
            <h2>Add your data</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}} required/>
                <input type="text" placeholder="Post" value={post} onChange={(e)=>{setPost(e.target.value)}} required/>
                <select value={role} onChange={(e)=>{setRole(e.target.value)}}>
                    <option value="Chief">Chief</option>
                    <option value="Joint">Joint</option>
                    <option value="Member">Member</option>
                </select>
                <input type="file" accept="image/*" onChange={(e)=>{setPhoto(e.target.files[0])}} required/>
                <button type="submit" disabled={loading}>
                    {loading ? <span className="loader"></span>:"Submit Data"}
                </button>
            </form>
            {loading && <p className="loading-text">Uploading... Please wait.</p>}
            {message && !loading && <p className="message">{message}</p>}
            <button className="logout-btn" onClick={onLogout}>Logout</button>
        </div>
    )
}

export default UploadData;