import { useState } from "react";
import axios from "../api/axios.js";

function AdmingLogin({onLogin}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin= async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post("/admin/adminLogin",{email, password});
            localStorage.setItem("accessToken", response.data.accessToken);
            onLogin(true)
        }catch(err){
            setError("Invalid credentials");
        }
    }

    return (
        <div className="login-container">
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                <button type="submit">Submit</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    )
}

export default AdmingLogin;