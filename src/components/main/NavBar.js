import React from 'react';
import { Link } from 'react-router-dom';
import JobCard from '../job/JobCard';
import logo from './logo.svg';

const NavBar = () => {
    return (
        <>  
        <div className="logo">
        <Link to="/"><img src={logo} style={{zIndex:"2", width:"50px"}}  alt="logo"/>joblish</Link>
        </div>
            <ul>
                <li><Link to="/account">My profile</Link></li>
                <li><Link to="/user-applications">Applications</Link></li>
                <li><Link to="#">Join now</Link></li>
                <li><Link to="#">Logout</Link></li>
            </ul>

        </>
    );
};



export default NavBar;