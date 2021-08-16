import React, {useEffect, useState} from 'react'
import JobCard from '../job/JobCard'
import JobService from "../../service/JobService";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCol } from "mdbreact";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const JobsSection = () => {
    const classes = useStyles();
    const [jobs, setJobs] = useState();
    const [searchInput, setSearchInput] = useState();

    const getSearchInput = (event) => {
        setSearchInput(event.target.value);
    }

    const search = () => {
        console.log(searchInput)
        JobService.getJobsBySearchInput(searchInput).then(r => {
            console.log(r.data.jobs)
            setJobs(r.data.jobs);
        })
    }


        return (
            <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
                <MDBCol md="6">
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={getSearchInput}/>
                </MDBCol>
                <div className={classes.root}>
                    <Button variant="contained" color="primary" onClick={search}>
                        Primary
                    </Button>
                </div >
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
