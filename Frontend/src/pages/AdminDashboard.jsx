import { useState } from "react";
import AdmingLogin from "./AdminLogin.jsx";
import UploadData from "./UploadData.jsx";

function AdminDashboard(){
    const [isLoggedIn, setLogin] = useState(false);

    return(
        <div className="dashboard">
            {!isLoggedIn ? (
                <AdmingLogin onLogin={setLogin}/>
            ):(
                <UploadData onLogout={()=>{setLogin(false)}}/>
            )}
        </div>
    )
}
export default AdminDashboard;