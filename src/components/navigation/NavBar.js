import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useEffect, useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import AuthService from "../../service/AuthService";

const NavBar = ({ color, homePosition, userHasApplied, applyBtn }) => {
    const history = useHistory();

    const [position, setPosition] = useState("static")
    const [stickyColor, setStickyColor] = useState(color)
    const [stickyBorder, setStickyBorder] = useState("transparent")

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 90) {
            if (window.location.pathname === "/") {
                setPosition("fixed")
            }
            else {
                setPosition("sticky")
            }
            setStickyColor("white")
            setStickyBorder("1px solid rgba(0, 0, 255, 0.534)")
        }
        else {
            if (window.location.pathname === "/") {
                setPosition(homePosition)
            }
            else {
                setPosition("static")
            }
            setStickyColor(color)
            setStickyBorder("transparent")
        }
    }

    useEffect(() => {
        if (window.location.pathname === "/") {
            setPosition(homePosition)
        }
        window.addEventListener('scroll', handleScroll)
    }, [])

    const logout = () => {
        AuthService.logout();
        history.push("/login");
    }

    return (
        <nav style={{backgroundColor:"" + stickyColor, position:"" + position, zIndex:"3", borderBottom: stickyBorder , animation:position === "sticky" ? "fadein 0.3s" : "none"}}>
        <div className="logo">
        <Link to="/" style={{display:"inline-block"}}><img src={logo} style={{zIndex:"2", width:"50px",display:"inline-block"}}  alt="joblish logo"/>joblish</Link>
        </div>
            {
                AuthService.getCurrentUser() ? (
                    <ul>
                        <li><Link to="/jobs">Jobs</Link></li>
                        <li><Link to="/account">My profile</Link></li>
                        <li><Link to="/user-applications">Applications</Link></li>
                        <li><Link to="/companies">Companies</Link></li>
                        <li><Link to="/" onClick={logout}>Logout</Link></li>
                        {!userHasApplied  && position == "sticky" && window.location.pathname.match("/job/") ? (
                        <li> <div onClick={applyBtn} className="apply-nav"><SendIcon /><h5 className="btn-title">Apply</h5></div></li>
                        ) : (
                            ""
                        )}
                    </ul>
                ) : (
                    <ul>
                        <li><Link to="/jobs">Jobs</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                )
                // ))
            }
        </nav >
    )
};



export default NavBar;