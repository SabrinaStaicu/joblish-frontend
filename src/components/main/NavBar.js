import React from 'react';
import { Link } from 'react-router-dom';
import JobCard from '../job/JobCard';
import logo from './logo.svg';

const NavBar = () => {
    return (
        <>  
        <div className="logo">
        <Link to="#"><img src={logo} style={{zIndex:"2", width:"50px"}} />joblish</Link>
        {/* <Link to="#">jobify</Link> */}
        </div>
            <ul>
                <li><Link to="#">My profile</Link></li>
                <li><Link to="#">Applications</Link></li>
                <li><Link to="#">Join now</Link></li>
                <li><Link to="#">Logout</Link></li>
            </ul>

        </>
    );
};



export default NavBar;