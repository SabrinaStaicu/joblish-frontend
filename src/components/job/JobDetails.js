import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import NavBar from "../main/NavBar";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "@material-ui/core/Button";
import Header from "../main/Header"


const JobDetails = () => {
    const location = useLocation();
    const job = location.state.job;

    useEffect(() => {
        console.log(job)
    })

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
            <Button color="primary" variant="contained">Apply</Button>
        </div>
    );
};

export default JobDetails;