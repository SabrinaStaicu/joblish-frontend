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
                <li><Link to="#">Jobs</Link></li>
                <li><Link to="#">CV</Link></li>
                <li><Link to="#">Chestie</Link></li>
                <li><Link to="#">Join Now</Link></li>
            </ul>

        </>
    );
};



export default NavBar;