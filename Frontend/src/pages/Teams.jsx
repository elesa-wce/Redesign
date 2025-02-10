import { useEffect,useState } from "react";
import axios from "../api/axios.js";
import Card from "./MemberCard.jsx";

function Teams(){
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedRole , setRole] = useState("Chief");
    const token = localStorage.getItem("accessToken");

    useEffect(()=>{
        const fetchMember = async ()=>{
            try{
                let url = "/memb/";
                if(selectedRole !=="All")
                    url=`/memb/${selectedRole.toLowerCase()}`;
                const response = await axios.get(url,{
                    headers:{Authorization: `Bearer ${token}`}
                });
                console.log(`Fetched data: `,response.data);
                // setMembers(Array.isArray(response.data)?response.data:[]);
                setMembers(response.data.memb)
                console.log(`After setting members: `, response.data);
            }catch(err)
            {
                console.error("Error fetching members Teams.jsx: ",err);
            }finally{
                setLoading(false);
            }
        }
        fetchMember();
    },[selectedRole,token]);
    console.log(`Current members state: `,members);
    
if(loading)
    return <h3 className="text-center text-lg">Loading ${selectedRole}...</h3>

return (
    <div className="container">
        <h2 className="heading">Our Team</h2>
        <div className="dropdown-container">
            <select
                value={selectedRole}
                onChange={(e)=> setRole(e.target.value)}
                className="dropdown"
            >
                <option value="All">All</option>
                <option value="Chief">Chiefs</option>
                <option value="Joint">Joints</option>    
                <option value="Member">Members</option>
            </select>
        </div>
        <div className="card-grid">
            {Array.isArray(members) && members.length > 0 ? (
                members.map((member) => (
                    <Card
                        key = {member._id}
                        name = {member.name}
                        photo = {member.photo}
                        post = {member.post}
                    />
                ))
            ) : (
                <p className="no-members">No members found</p>
            )}
        </div>
    </div>
)

}
export default Teams