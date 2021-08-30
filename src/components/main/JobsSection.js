import React from 'react'
import JobCard from '../job/JobCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAtom } from 'jotai';
import {jobsAtom} from './Atoms'

const JobsSection = () => {
    const [jobs, setJobs] = useAtom(jobsAtom);

        return (
            <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
                {
                    jobs && (
                        <div className="jobSection">
                            {
                                jobs.map(
                                    job => <JobCard key={job.id} job={job}/>
                                )
                            }
                        </div>
                    ) 
                }
            </div>
        )

}

export default JobsSection
