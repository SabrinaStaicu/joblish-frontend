import React, {useEffect, useState} from 'react'
import JobCard from '../job/JobCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCol } from "mdbreact";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useAtom } from 'jotai';
import {jobsAtom, searchCategoryAtom} from './Atoms'

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//         },
//     },
// }));

const JobsSection = () => {
    const [jobs, setJobs] = useAtom(jobsAtom);
    // const classes = useStyles();


        return (
            <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
                {
                    jobs ? (
                        <div className="jobSection">
                            {
                                jobs.map(
                                    job => <JobCard key={job.id} job={job}/>
                                )
                            }
                        </div>
                    ) : ("")
                }
            </div>
        )

}

export default JobsSection
