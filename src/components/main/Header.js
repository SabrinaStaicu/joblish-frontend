import React from 'react'
import NavBar from './NavBar'
import malePhoto from './malePhoto.svg'
import { useState } from 'react';
import { useAtom } from 'jotai';
import JobService from "../../service/JobService";
import {searchAtom, jobsAtom} from './Atoms'


const Header = () => {


    const [searchInput, setSearch] = useAtom(searchAtom);
    // const [categoryInput, setCategoryInput] = useAtom(searchCategoryAtom)
    const [categoryInput, setCategoryInput] = useState();


    const [jobs, setJobs] = useAtom(jobsAtom);

    const getSearchInput = (event) => {
        setSearch(event.target.value);
    }


    const search = () => {
        if(!searchInput && !categoryInput) {
            // if there is no search input - search all jobs
            JobService.getAllJobs().then(response => {setJobs(response.data.jobs)})
        } else if (!searchInput && categoryInput) {
            // if there is only a category input - search by category
            JobService.getJobsByCategory(categoryInput).then(response => {
                setJobs(response.data.jobs)
            })
        } else {
            JobService.getJobsBySearchInput(searchInput).then(r => {
                setJobs(r.data.jobs);
            })
        }

    }

    const getCategory = (event) => {
        console.log(event.target.value)
        setCategoryInput(event.target.value)
    }

    return (
        <header>
            <NavBar color={"transparent"}/>
            <h2 className="headerText">Searching for a job?<br></br>Find the <span style={{color:"rgb(30, 209, 170)", fontSize:"30px"}}>best job</span> <br></br> that fits you!</h2>
            <div className="headerSearchBar">
                <div>
                <input style={{zIndex:"3", border:"none", width:"100%",height:"100%", alignSelf:"center"}} type="text" placeholder="       Search Job" onChange={getSearchInput} />
                </div>
                <div>
                <select style={{border:"none"}} onChange={getCategory}>
                    <option selected></option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                    <option value="Web">Web Dev</option>
                </select>
                </div>
                    <button className="searchButton" onClick={search}>Search Job</button>
            </div>
            <img className="malePhoto" src={malePhoto} />
        </header>
    )
}

export default Header
