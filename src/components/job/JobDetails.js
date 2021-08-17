import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import NavBar from "../main/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "@material-ui/core/Button";
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
            <NavBar />
            <div className="container emp-profile">

            </div>
            {job.title}
            Company: {job.company_name}
            Date: {job.publication_date}
            <br/>
            Description : {job.description}
            <Button color="primary" variant="contained" onClick={apply}>Apply</Button>
        </div>
    );
};

export default JobDetails;