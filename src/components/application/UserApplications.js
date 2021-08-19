import React, {useState, useEffect} from 'react';
import NavBar from "../main/NavBar";
import "./ApplicationCard.css";

const UserApplications = () => {
    const [applications, setApplications] = useState([{
        company: "Codecool",
        jobTitle: "Java developer",
        category: "Software",
        type: "Full-time",
        status: "Denied",
        date: "12/05/2021",
        location: "Bucharest"
    }, {
        company: "Codecool",
        jobTitle: "Mentor",
        category: "Software",
        type: "Full-time",
        status: "Not seen",
        date: "11/05/2021",
        location: "Bucharest"
    }, {
        company: "Codecool",
        jobTitle: "Python developer",
        category: "Software",
        type: "Part-time",
        status: "Accepted",
        date: "14/05/2021",
        location: "Bucharest"
    }])
    
    return (
        <div>
            <NavBar color={"rgba(0, 0, 255, 0.534)"} />
            <div className="jobsTop">
                <h1 style={{color:"white"}}>Current job applications</h1>
            </div>
            <div className="container mt-5 mb-3">
                <br/>
                <div className="row">
                    {
                        applications.map(
                            application =>  <div className="col-md-4">
                                <div className="card p-3 mb-2">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">
                                            <div className="icon"><i className="bx bxl-mailchimp"></i></div>
                                            <div className="ms-2 c-details">
                                                <h6 className="mb-0">{application.company}</h6> <span>{application.date}</span>
                                            </div>
                                        </div>
                                        <div className="badge"><span>{application.category}</span></div>
                                    </div>
                                    <div className="mt-5">
                                        <h3 className="heading">{application.jobTitle}<br/>{application.location}</h3>
                                        <p>{application.type}</p>
                                        <span>{application.status}</span>
                                        <div className="mt-5">
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{width: "50%"}}
                                                     aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="mt-3"><span className="text1">32 Applied <span className="text2">of 50 capacity</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default UserApplications;