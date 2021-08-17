import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import NavBar from "../main/NavBar";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "@material-ui/core/Button";

import Header from "../main/Header"

import {useHistory} from "react-router-dom/cjs/react-router-dom";



const JobDetails = () => {
    const location = useLocation();
    const job = location.state.job;
    const history = useHistory();

    useEffect(() => {
        console.log(job)
    })

    const apply = () => {
        history.push(`/apply/${job.id}`)
    }

    return (
        <div>
            <NavBar color={"rgba(0, 0, 255, 0.534)"} />
            <div className="jobDetails">
                <h1>{job.title}</h1>
                <h3>{job.company_name}</h3>
                <p>{job.publication_date}</p>
            </div>
            <div style={{display:"flex"}}>
                <div style={{flex:"2"}}><div className="jobInfo">
                <div>
                    <h5>Location : <p style={{display:"inline-block"}}>{job.candidate_required_location}</p></h5>
                    <h5>Department : <p style={{display:"inline-block"}}>{job.category}</p></h5>
                </div>
                <div>
                    <h5>Job Type : <p style={{display:"inline-block"}}>{job.job_type}</p></h5>
                    <h5>Salary : <span style={{display:"inline-block"}}>{job.salary}</span></h5>
                </div>
            </div>
            <div className="jobDescription" dangerouslySetInnerHTML={{ __html:job.description}}/>
            {/* <Button color="primary" variant="contained">Apply</Button> */}</div>
                <div style={{flex:"0.8", marginTop:"25px"}}>
                    <div className="ab">asd</div>
                    <div className="cd">asd</div>
                    <div className="ef">asd</div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;