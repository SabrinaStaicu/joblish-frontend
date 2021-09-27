import React, {useState, useEffect} from 'react';
import UserDetails from './UserDetails';
import NavBar from "../navigation/NavBar";
import UserService from "../../service/UserService";
import AuthService from "../../service/AuthService";

export default function UserPage() {
    const [user, setUser] = useState({});

    useEffect(() => {
        UserService.getUserById(AuthService.getCurrentUser().id).then(res => {
            setUser(res.data)});
    },[])

    return (
        <>
            <div className="user-page">
                <NavBar color={"rgba(0, 0, 255, 0.534)"} />
                <div className="jobsTop">
                    <h1 style={{color:"white"}}>User profile</h1>
                </div>
                <UserDetails user={user} />
            </div>
        </>
    )
}

