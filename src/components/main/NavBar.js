import React from 'react';
import { Link } from 'react-router-dom';
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
                setPosition("sticky")     
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


    const loggedIn = !!(localStorage.getItem("joblishUser"))
    // const loggedIn = false;

    return (
        <nav style={{backgroundColor:"" + stickyColor, position:"" + position, zIndex:"3"}}>
        <div className="logo">
        <Link to="/" style={{display:"inline-block"}}><img src={logo} style={{zIndex:"2", width:"50px",display:"inline-block"}}  alt="logo image"/>joblish</Link>
        </div>
            {
                loggedIn ? (
                    <ul>
                        <li><Link to="/jobs">Jobs</Link></li>
                        <li><Link to="/account">My profile</Link></li>
                        <li><Link to="/user-applications">Applications</Link></li>
                        <li><Link to="/companies">Companies</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/" onClick={() => {localStorage.clear()}}>Logout</Link></li>
                    </ul>
                ) : (
                    <ul>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                )
            }
        </nav>
    )
};



export default NavBar;