import React, {useEffect, useState} from 'react'
import UserService from "../../service/UserService";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";
import AuthService from "../../service/AuthService";
import {Collapse} from "@material-ui/core";

export default function UserPageContent() {
    const history = useHistory();
    const [user, setUser] = useState({})
    const [skills, setSkills] = useState([user.skills])
    const [showSkillsInput, setShowSkillsInput] = useState(false);
    const [newSkill, setNewSkill] = useState("");

    useEffect(() => {
        UserService.getUserById(AuthService.getCurrentUser().id).then(res => {
            setUser(res.data)
            setSkills(res.data.skills)
        });
    }, [])

    const toggleSkillsInput = () => {
        setShowSkillsInput(!showSkillsInput);
    }

    const addNewSkill = () => {
        if(newSkill.length > 0) {
            UserService.addNewSkill(AuthService.getCurrentUser().id, newSkill).then(res => {
                setSkills([...skills, newSkill])
                setNewSkill("")
            })
        }
    }

    return (
        <div className="square border border-primary" id="user-page-content-style">
            <div className="content-container">
                <div className="container-item">
                    <div className="div-width-20-percent">Contact info:</div>
                        <div>
                            <strong>Phone number:</strong><br />
                            {user.phone}<br/>
                            <strong>Email:</strong><br />
                            {user.email}<br/>
                        </div>

                </div>
                <hr className="break-line"/>
                <div className="container-item">
                    <div className="div-width-20-percent">Experience:</div>
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
                    <div className="div-width-20-percent">Skills:</div>
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
                        <Button variant="contained" color="primary" className="button-float-right" onClick={toggleSkillsInput}>Add skill</Button>
                        <Collapse in={showSkillsInput}>
                            <br/>
                            <p>Enter a new skill</p>
                            <div className="flexed-container">
                                <input type="text" className="form-control" onChange={e => setNewSkill(e.target.value)}/>
                                <Button color="primary" variant="contained" value={newSkill} onClick={addNewSkill}>Add</Button>
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    )
}