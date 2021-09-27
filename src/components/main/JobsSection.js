import React from 'react'
import JobCard from '../job/JobCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAtom } from 'jotai';
import {jobsAtom} from '../navigation/Atoms'

const JobsSection = () => {
    const [jobs, setJobs] = useAtom(jobsAtom);

        return (
            <div className="div-style-12">
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
