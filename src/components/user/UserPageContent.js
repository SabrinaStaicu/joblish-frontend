import React, {useEffect, useState} from 'react'
import UserService from "../../service/UserService";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";

export default function UserPageContent() {
    const history = useHistory();
    const [user, setUser] = useState({})
    const [skills, setSkills] = useState([user.skills])

    useEffect(() => {
        UserService.getUserById(3).then(res => {
            setUser(res.data)
            setSkills(res.data.skills)
        });
    }, [])

    return (
        <div className="square border border-primary" id="user-page-content-style">
            <div className="content-container">
                <div className="container-item">
                    <div style={{width: "20%"}}>Contact info:</div>
                        <div>
                            <strong>Phone number:</strong><br />
                            {user.phone}<br/>
                            <strong>Email:</strong><br />
                            {user.email}<br/>
                        </div>

                </div>
                {/*<hr style={breakLine}/>*/}

                {/*<div style={containerItem}>*/}
                {/*    <div style={containerItemTitle}>Education:</div>*/}
                {/*    <div>*/}
                {/*        <CvContentList resumeData={userData.resume.education}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <hr className="break-line"/>
                <div className="container-item">
                    <div style={{width: "20%"}}>Experience:</div>
                    <div>
                        <p>{user.experience}</p>
                    </div>
                    <Button variant="contained" color="primary" style={{display: "block", marginLeft: "auto", marginRight: "0"}} onClick={() => history.push({
                        pathname: "/update-profile",
                        state: {user: user}
                    })}>Update</Button>
                </div>
                <hr className="break-line"/>
                <div>
                    <div style={{width: "20%"}}>Skills:</div>
                    <div>
                        <ul className="nav">
                            {skills.map(skill => (
                                <li className="active">
                                    <button
                                        className="btn btn-primary"
                                        style={{margin: "2px"}}
                                    >
                                        <i className="glyphicon glyphicon-home">{skill}</i>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}