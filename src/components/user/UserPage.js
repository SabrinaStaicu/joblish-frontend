import React, {useState, useEffect} from 'react';
import UserDetails from './UserDetails';
import NavBar from "../main/NavBar";
import UserService from "../../service/UserService";

export default function UserPage() {
    const [user, setUser] = useState({});

    useEffect(() => {
        UserService.getUserById(3).then(res => {
            setUser(res.data)});
    },[])

    return (
        <>
            <div className="user-page" style={{height: '100%', width: '100%', display: 'grid'}}>
                <NavBar color={"rgba(0, 0, 255, 0.534)"} />
                <div className="jobsTop">
                    <h1 style={{color:"white"}}>User profile</h1>
                </div>
                <UserDetails user={user} />
            </div>
        </>
    )
}

