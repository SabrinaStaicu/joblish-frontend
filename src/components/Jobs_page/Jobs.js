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

const Jobs = () => {
    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
      });

      const [jobs, setJobs] = useState([])
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

      const GreenCheckbox = withStyles({
        root: {
          color: green[400],
          '&$checked': {
            color: green[600],
          },
        },
        checked: {},
      })((props) => <Checkbox color="default" {...props} />);

      const search = () => {
            JobService.getAllJobs().then(response => {setJobs(response.data.jobs)})
    }

    useEffect(() => {
        search()

    },[])



    return (
        <div>
            <NavBar color={"rgba(0, 0, 255, 0.534)"} />
            <div className="jobsTop">
                <h1 style={{color:"white"}}>Get your Job!</h1>
            </div>
            <div className="searchHeader">
                <span><FilterListIcon className="greenCheck" />filter jobs</span>
                <span>.... Jobs found</span>
                <span>Sort by</span>
            </div>
            <div className="jobsMiddle">
                <div className="jobsFilter">
                    <div className="category">
                        <h4>Job Category</h4>
                        <select className="catSelect">
                            <option>asd</option>
                            <option>asd</option>
                        </select>
                    </div>
                    <div className="type">
                        <h4>Job Type</h4>
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                            label="Full time"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                            label="Part time"
                        />
                    </div>
                </div>
                <div className="jobsSection">
                    {jobs.map(job => <JobPageCard job={job} />)}
                </div>
            </div>
        </div>
    )
}

export default Jobs


