import React from 'react';
import { Link } from 'react-router-dom';
import JobCard from '../job/JobCard';
import SignUpModal from '../sign_up/SignUpModal';
import logo from './logo.svg';

const NavBar = () => {

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        e.stopPropagation();
        setShow(true);
    }


    return (
        <>  
        <div className="logo">
        <Link to="/"><img src={logo} style={{zIndex:"2", width:"50px"}} />joblish</Link>
        {/* <Link to="#">jobify</Link> */}
        </div>
            <ul>
                <li><Link to="/account">My profile</Link></li>
                <li><Link to="#">Applications</Link></li>
                <li><Link to={{state: {modal: true }}}>Join now</Link></li>
                <li><Link to="#">Logout</Link></li>
            </ul>

            <SignUpModal show={show} handleClose={handleClose}/>
        </>
    );
};



export default NavBar;