import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <Link to="#">LOGO</Link>
            <ul>
                <li>Jobs</li>
                <li>CV</li>
                <li>Chestie</li>
            </ul>

        </>
    );
};



export default NavBar;