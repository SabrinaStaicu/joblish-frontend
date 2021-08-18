import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

const NavBar = ({color}) => {
    return (
        <nav style={{backgroundColor:"" + color}}>
        <div className="logo">
        <Link to="/" style={{display:"inline-block"}}><img src={logo} style={{zIndex:"2", width:"50px",display:"inline-block"}}  alt="logo image"/>joblish</Link>
        </div>
            <ul>
                <li><Link to="/">Jobs</Link></li>
                <li><Link to="/account">My profile</Link></li>
                <li><Link to="/user-applications">Applications</Link></li>
                <li><Link to="/companies">Companies</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="#">Logout</Link></li>
            </ul>
        </nav>
    );
};



export default NavBar;