import React from 'react'
import NavBar from "../main/NavBar";
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
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
        setFilterInputs({...filterInputs, ["location"]: event.target.value})
      }

      const handleCategory = (event) => {
        setFilterInputs({...filterInputs, ["category"]: event.target.value})
      }

    //   const GreenCheckbox = withStyles({
    //     root: {
    //       color: green[400],
    //       '&$checked': {
    //         color: green[600],
    //       },
    //     },
    //     checked: {},
    //   })((props) => <Checkbox color="default" {...props} />);



    useEffect(() => {
        JobService.getAllJobs().then(response => {setJobs(response.data.jobs)})
    },[])

    const filter = (e) => {
        setFilterInputs({...filterInputs, ...state})
        if(!filterInputs.category && !filterInputs.location && !filterInputs.checkedA && !filterInputs.checkedB) {
            // if there is no filters - search all jobs
            JobService.getAllJobs().then(response => {setJobs(response.data.jobs)})
        } else if (filterInputs.category && !filterInputs.location && !filterInputs.checkedA && !filterInputs.checkedB) {
            // if there is only a category input - search by category
            JobService.getJobsByCategory(filterInputs.category).then(response => {setJobs(response.data.jobs)})
        } else if ((!filterInputs.category && !filterInputs.location && (filterInputs.checkedA || filterInputs.checkedB))) {
            JobService.getJobsBySearchInput(filterInputs.checkedA ? filterInputs.checkedA : filterInputs.checkedB).then(r => {setJobs(r.data.jobs);})
        }
    }

    console.log(jobs)




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
                        <option value="Software">Software</option>
                        <option value="Finance">Finance</option>
                        <option value="Healthcare">Healthcare</option>
                        </select>
                    </div>
                    <div className="type">
                        <h4>Job Type</h4>
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" value="full_time" />}
                            label="Full time"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" value="part_time" />}
                            label="Part time"
                        />
                    </div>
                    <div className="category">
                        <h4>Location</h4>
                        <select onChange={handleLocation} className="catSelect">
                        <option default selected>Location</option>
                            <option>USA</option>
                            <option>Anywhere</option>
                        </select>
                    </div>
                    <div className="type">
                        <h4>Experience Level</h4>
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedC} onChange={handleChange} name="checkedC" />}
                            label="Entry-Level (< 2 Ani)"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedD} onChange={handleChange} name="checkedD" />}
                            label="Mid-Level (2-5 Ani)"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedE} onChange={handleChange} name="checkedE" />}
                            label="Senior-Level (> 5 Ani)"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedF} onChange={handleChange} name="checkedF" />}
                            label="Manager"
                        />
                    </div>
                    <Button onClick={filter} variant="contained" color="secondary">
                        Apply
                    </Button>
                </div>
                <div className="jobsSection">
                    {jobs.map(job => <JobPageCard job={job} />)}
                </div>
            </div>
        </div>
    )
}

export default Jobs



