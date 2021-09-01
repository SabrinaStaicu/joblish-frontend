import React, {useEffect, useState} from 'react'
import { Card } from 'react-bootstrap';
import UserPageContent from './UserPageContent';
import JobService from "../../service/JobService";
import JobCard from "../job/JobCard";

export default function UserDetails({ user }) {
    const [savedJobs, setSavedJobs] = useState([]);

    useEffect(() => {
        JobService.getSavedJobs(3).then(res => setSavedJobs(res.data));
    }, [])

    return (
        <>
            <Card className="user-card">
                <img className="user-profile-picture" src={user.picture ? user.picture : "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"} alt="user's personal avatar" />
                <br/>
                <Card.Body>
                    <Card.Text style={{ textAlign: 'center' }}>
                        <h5>{user.firstName} {user.lastName}</h5>
                        {user.country} {user.city} <br />
                        <h5 style={{margin: "10px"}}>{user.lookingForJob ? "OPEN TO WORK" : "NOT LOOKING FOR A JOB"}</h5>
                    </Card.Text>
                    <UserPageContent user={user} />
                </Card.Body>
                <div style={{alignText: "center", margin: "auto"}}><h5>Jobs saved to favorites:</h5></div>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"row"}}>
                    {
                        savedJobs.length > 0 ? (
                            savedJobs.map(
                                job =>  <JobCard picture={job.company.logo} job={job} />)
                        ) : (<p>You did not save any jobs to favorites.</p>)
                    }
                </div>
            </Card>
        </>
    )
}