import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useLocation} from "react-router-dom";

const JobDetails = () => {
    const location = useLocation();
    const job = location.state.job

    useEffect(() => {
        console.log(job)
    })

    return (
        <div>
            {job.title}
        </div>
    );
};

export default JobDetails;