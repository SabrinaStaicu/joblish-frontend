import React from 'react';
import { Link } from 'react-router-dom';
import JobCard from '../job/JobCard';
import logo from './logo.svg';

const NavBar = ({color}) => {
    return (
        <nav style={{backgroundColor:"" + color}}>  
        <div className="logo">
        <Link to="#" style={{display:"inline-block"}}><img src={logo} style={{zIndex:"2", width:"50px",display:"inline-block"}} />joblish</Link>
        {/* <Link to="#">jobify</Link> */}
        </div>
            <ul>
                <li><Link to="#">Jobs</Link></li>
                <li><Link to="#">Applications</Link></li>
                <li><Link to="#">Join</Link></li>
                <li><Link to="#">Logout</Link></li>
            </ul>

        </nav>
    );
};



export default NavBar;