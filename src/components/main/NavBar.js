import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <Link to="#" className="logo">LOGO</Link>
            <ul>
                <li><Link to="#">Jobs</Link></li>
                <li><Link to="#">CV</Link></li>
                <li><Link to="#">Chestie</Link></li>
            </ul>

        </>
    );
};



export default NavBar;