import React from 'react'
import NavBar from './NavBar'
import malePhoto from './malePhoto.svg'
import { useState } from 'react';
import { useAtom } from 'jotai';
import JobService from "../../service/JobService";
import {searchAtom, jobsAtom} from './atoms'


const Header = () => {


    const [searchInput, setSearch] = useAtom(searchAtom);

    const [jobs, setJobs] = useAtom(jobsAtom);

    const getSearchInput = (event) => {
        setSearch(event.target.value);
    }


    const search = () => {
        console.log(searchInput)
        if(!searchInput) {
            // if there is no search input - search all jobs
            JobService.getAllJobs().then(response => {setJobs(response.data.jobs)})
        } else {
            JobService.getJobsBySearchInput(searchInput).then(r => {
                console.log(r.data.jobs)
                setJobs(r.data.jobs);
            })
        }

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
                <select style={{border:"none"}}>
                    <option selected>Category</option>
                    <option value="1">Marketing</option>
                    <option value="2">Sales</option>
                    <option value="3">Web Dev</option>
                </select>
                </div>
                {/* <div> */}
                    <button className="searchButton" onClick={search}>Search Job</button>
                {/* </div> */}
            </div>
            <img className="malePhoto" src={malePhoto} />
        </header>
    )
}

export default Header
