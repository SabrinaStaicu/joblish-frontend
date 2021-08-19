import React from 'react';
import { Link } from 'react-router-dom';
import JobCard from '../job/JobCard';
import logo from './logo.svg';
import { useEffect, useState } from 'react';


const NavBar = ({color, homePosition}) => {

    const [position, setPosition] = useState("static")
    const [stickyColor, setStickyColor] = useState(color)

    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 90){
            if(window.location.pathname === "/") {
                setPosition("fixed")
            }
            else {
                setPosition("fixed")     
            }
           setStickyColor("white")
        }
        else{
            if(window.location.pathname === "/") {
                setPosition(homePosition)
            }
            else {
                setPosition("static")
            }
            setStickyColor(color)
        }
      }

      useEffect(() => {
        if(window.location.pathname === "/") {
            setPosition(homePosition)
        }
        window.addEventListener('scroll',handleScroll)
      },[])
    

    return (
        <nav style={{backgroundColor:"" + stickyColor, position:"" + position, zIndex:"3"}}>  
        <div className="logo">
        <Link to="/" style={{display:"inline-block"}}><img src={logo} style={{zIndex:"2", width:"50px",display:"inline-block"}} />joblish</Link>
        {/* <Link to="#">jobify</Link> */}
        </div>
            <ul>
                <li><Link to="/jobs">Jobs</Link></li>
                <li><Link to="/user-applications">Applications</Link></li>
                <li><Link to="#">Join</Link></li>
                <li><Link to="#">Logout</Link></li>
            </ul>

        </nav>
    );
};



export default NavBar;