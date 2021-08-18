import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import NavBar from "../main/NavBar";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

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
                <div className="apply"><SendIcon /><h5>Apply</h5></div>

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
                    <div className="ab">
                        <img src="https://img.ejobs.ro/img/webcore/no-logo.jpg"/>
                        <span>{job.company_name}</span>
                        <span style={{color:"grey"}}>1 active job</span>
                    </div>
                    <div className="cd">
                        <div className="topSection">
                            <div>
                            <img className="checkimg" src="https://img.ejobs.ro/img/webcore/farafrica/security-neutral.svg" />
                            <h5 className="checkText">APPLY WITHOUT FEAR!</h5>
                            </div>
                        </div>
                        <div className="middleSection">
                            <ul style={{listStyle:"none"}}>
                                <li>
                                    <i><CheckCircleIcon className="greenCheck" /></i>
                                    <span style={{fontWeight:"500"}}>Verified ad</span>
                                    <p style={{transform:"translateX(-18px)", marginTop:"20px"}} class="Saftey__description">The text of this ad has been verified by the Joblish team to eliminate possible errors or discriminatory content.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="ef">asd</div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;