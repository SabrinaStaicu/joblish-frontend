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


// const NavBar = ({color}) => {
//     const loggedIn = true;

//     return (
//         <nav style={{backgroundColor:"" + color}}>
//         <div className="logo">
//         <Link to="/" style={{display:"inline-block"}}><img src={logo} style={{zIndex:"2", width:"50px",display:"inline-block"}}  alt="logo image"/>joblish</Link>
//         </div>
//             {
//                 loggedIn ? (
//                     <ul>
//                         <li><Link to="/">Jobs</Link></li>
//                         <li><Link to="/account">My profile</Link></li>
//                         <li><Link to="/user-applications">Applications</Link></li>
//                         <li><Link to="/companies">Companies</Link></li>
//                         <li><Link to="/login">Login</Link></li>
//                         <li><Link to="#">Logout</Link></li>
//                     </ul>
//                 ) : (
//                     <ul>
//                         <li><Link to="/login">Login</Link></li>
//                         <li><Link to="/register">Register</Link></li>
//                     </ul>
//                 )
//             }

        </nav>
    );
};



export default NavBar;