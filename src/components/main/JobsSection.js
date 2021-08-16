import React, {useEffect, useState} from 'react'
import JobCard from '../job/JobCard'
import JobService from "../../service/JobService";
import SearchBar from "./SearchBar";
import 'bootstrap/dist/css/bootstrap.min.css';


const JobsSection = () => {
    const [isLoading, setIsLoading] = useState();
    const [jobs, setJobs] = useState();

    useEffect(() => {

        JobService.getJobs().then(r => {
            console.log(r.data.jobs)
            setJobs(r.data.jobs)
        })
    }, [])



    return (
        <div>
            <SearchBar />
            <JobCard />
        </div>
    )
}

export default JobsSection
