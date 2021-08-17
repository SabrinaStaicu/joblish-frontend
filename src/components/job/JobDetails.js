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
            <div className="container emp-profile">

            </div>
            {job.title}
            Company: {job.company_name}
            Date: {job.publication_date}
            <br/>
            Description : <div dangerouslySetInnerHTML={{ __html:job.description}}/>
            <Button color="primary" variant="contained" onClick={apply}>Apply</Button>
        </div>
    );
};

export default JobDetails;