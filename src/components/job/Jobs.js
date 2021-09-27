import React from 'react'
import NavBar from "../navigation/NavBar";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useState, useEffect } from 'react';
import FilterListIcon from '@material-ui/icons/FilterList';
import JobService from '../../service/JobService';
import JobPageCard from './JobPageCard';
import Button from '@material-ui/core/Button';

const Jobs = () => {
    const [state, setState] = useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        checkedE: false,
        checkedF: false,
      });

      const [jobs, setJobs] = useState([])

      const [filterInputs, setFilterInputs] = useState([])

      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        setFilterInputs({...filterInputs, [event.target.name]: event.target.checked, [event.target.name + "Value"]: event.target.value })
      };

      const handleLocation = (event) => {
        setFilterInputs({...filterInputs, "location": event.target.value})
      }

      const handleCategory = (event) => {
        setFilterInputs({...filterInputs, "category": event.target.value})
      }


    useEffect(() => {
        JobService.getAllJobs().then(response => {setJobs(response.data)})
    },[])

    const filter = (e) => {
        const jobType = filterInputs.checkedA ? filterInputs.checkedAValue : filterInputs.checkedBValue
        console.log(filterInputs)
        JobService.filterJobs(filterInputs.category, filterInputs.location, filterInputs.checkedA ? filterInputs.checkedAValue : "undefined", filterInputs.checkedB ? filterInputs.checkedBValue : "undefined", filterInputs.checkedC ? filterInputs.checkedCValue : "undefined", filterInputs.checkedD ? filterInputs.checkedDValue : "undefined", filterInputs.checkedE ? filterInputs.checkedEValue : "undefined", filterInputs.checkedF ? filterInputs.checkedFValue : "undefined").then(r => {setJobs(r.data);})
    }



    return (
        <div>
            <NavBar color={"rgba(0, 0, 255, 0.534)"} />
            <div className="jobsTop">
                <h1 style={{color:"white"}}>Get your Job!</h1>
            </div>
            <div className="searchHeader">
                <span><FilterListIcon className="greenCheck" />Filter jobs</span>
                <span>{jobs.length} Jobs found</span>
                <span>Sort by</span>
            </div>
            <div className="jobsMiddle">
                <div className="jobsFilter">
                    <div className="category">
                        <h4>Job Category</h4>
                        <select onChange={handleCategory} className="catSelect">
                        <option default selected>Category</option>
                        <option value="Arts">Arts</option>
                        <option value="Education">Education</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Sales">Sales</option>
                        <option value="IT">Software</option>
                        <option value="Finance">Finance</option>
                        <option value="Healthcare">Healthcare</option>
                        </select>
                    </div>
                    <div className="type">
                        <h4>Job Type</h4>
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" value="FULL_TIME" />}
                            label="Full time"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" value="PART_TIME" />}
                            label="Part time"
                        />
                    </div>
                    <div className="category">
                        <h4>Location</h4>
                        <select onChange={handleLocation} className="catSelect">
                        <option default selected>Location</option>
                            <option>USA</option>
                            <option>Romania</option>
                        </select>
                    </div>
                    <div className="type">
                        <h4>Experience Level</h4>
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedC} onChange={handleChange} name="checkedC" value="JUNIOR"/>}
                            label="Entry-Level (< 2 years)"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedD} onChange={handleChange} name="checkedD" value="MID" />}
                            label="Mid-Level (2-5 years)"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedE} onChange={handleChange} name="checkedE" value="SENIOR" />}
                            label="Senior-Level (> 5 years)"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedF} onChange={handleChange} name="checkedF" value="MANAGER" />}
                            label="Manager"
                        />
                    </div>
                    <Button onClick={filter} variant="contained" color="secondary">
                        Apply
                    </Button>
                </div>
                <div className="jobsSection">
                    {
                        jobs.length > 0 ? (
                            jobs.map(job => <JobPageCard job={job} />)
                        ) : (
                            <h3 style={{marginLeft:"15%"}}>No results found for your search.</h3>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Jobs



