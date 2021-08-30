import React from 'react'
import NavBar from './NavBar'
import malePhoto from './malePhoto.svg'
import { useState } from 'react';
import { useAtom } from 'jotai';
import JobService from "../../service/JobService";
import {searchAtom, jobsAtom} from './Atoms'
import {mockData} from "./MockData"

const Header = () => {
    const [searchInput, setSearch] = useAtom(searchAtom);
    const [categoryInput, setCategoryInput] = useState();
    const [jobs, setJobs] = useAtom(jobsAtom);

    const getSearchInput = (event) => {
        setSearch(event.target.value);
    }


    const search = () => {
        JobService.searchJobs(searchInput, categoryInput).then(r => {
            console.log(r)
            setJobs(r.data);})
    }


    

    const getCategory = (event) => {
        setCategoryInput(event.target.value)
    }


    return (
        <header>
            <NavBar color={"transparent"} homePosition={"absolute"}/>
            <h2 className="headerText">Searching for a job?<br></br>Find the <span style={{color:"rgb(30, 209, 170)", fontSize:"30px"}}>best job</span> <br></br> that fits you!</h2>
            <div className="headerSearchBar">
                <div>
                <input style={{zIndex:"3", border:"none", width:"100%",height:"100%", alignSelf:"center"}} type="text" placeholder="Looking for a job..." onChange={getSearchInput} />
                </div>
                <div>
                <select style={{border:"none"}} onChange={getCategory}>
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
                    <button className="searchButton" onClick={search}>Search Job</button>
            </div>
            <img className="malePhoto" src={malePhoto}  alt=""/>
        </header>
    )
}

export default Header
