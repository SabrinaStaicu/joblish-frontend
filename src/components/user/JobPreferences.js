import React from 'react'
import Button from "@material-ui/core/Button";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import './userStyle.css';

export default function JobPreferences({closeModal, user, editHandler, state}) {
    return (
<div class="div-style-6">
                            <div class="div-style-7">
                                <h3>Job preferences</h3>
                                <div class="div-style-3">
                                <Button color="primary" onClick={closeModal}>X</Button>
                                </div>
                            </div>
                            <div >
                                <div class="div-style-8">
                                    <div class="profile-picture-div">
                                    <a><img className="profile-picture-modal" src={user.picture ? user.picture : "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"} /></a>
                                    </div>
                                    <div>
                                    <h3 class="div-style-4-h3">
                                        <strong class="div-style-4-h3-strong">{user.firstName} {user.lastName}</strong>
                                        {state.checkedB ? (<p>is open to work</p>) : (<p>is not open to work</p>)}
                                    </h3>
                                    </div>
                                    <div>
                                    <EditOutlinedIcon className="classes-root" onClick={editHandler} />
                                    </div>
                                </div>
                                <ul class="ul-style">
                                    <li class="ul-li-style-2">
                                        <h3 class="ul-li-h3">Job titles</h3>
                                        {/* <p>Junior Developer · Marketing Specialist · System Administrator</p> */}
                                        <ul className="nav">
                                                <li className="active">
                                                    <button
                                                        className="btn btn-primary"
                                                        style={{margin: "2px"}}
                                                    >
                                                        <i className="glyphicon glyphicon-home">Junior Developer</i>
                                                    </button>
                                                </li>
                                                <li className="active">
                                                    <button
                                                        className="btn btn-primary"
                                                        style={{margin: "2px"}}
                                                    >
                                                        <i className="glyphicon glyphicon-home">Marketing Specialist</i>
                                                    </button>
                                                </li>
                                                <li className="active">
                                                    <button
                                                        className="btn btn-primary"
                                                        style={{margin: "2px"}}
                                                    >
                                                        <i className="glyphicon glyphicon-home">System Administrator</i>
                                                    </button>
                                                </li>
                                        </ul>
                                    </li>
                                    <li class="ul-li-style-2">
                                        <h3 class="ul-li-h3">Job locations</h3>
                                        {/* <p>Bucharest, Bucharest, Romania</p> */}
                                        <ul className="nav">
                                                <li className="active">
                                                    <button
                                                        className="btn btn-primary"
                                                        style={{margin: "2px"}}
                                                    >
                                                        <i className="glyphicon glyphicon-home">Bucharest</i>
                                                    </button>
                                                </li>
                                                <li className="active">
                                                    <button
                                                        className="btn btn-primary"
                                                        style={{margin: "2px"}}
                                                    >
                                                        <i className="glyphicon glyphicon-home">Bucharest</i>
                                                    </button>
                                                </li>
                                                <li className="active">
                                                    <button
                                                        className="btn btn-primary"
                                                        style={{margin: "2px"}}
                                                    >
                                                        <i className="glyphicon glyphicon-home">Romania</i>
                                                    </button>
                                                </li>
                                        </ul>
                                    </li>
                                    <li class="ul-li-style-2">
                                        <h3 class="ul-li-h3">Start date</h3>
                                        <p>Immediately, I’m actively applying</p>
                                    </li>
                                    <li class="ul-li-style-2">
                                        <h3 class="ul-li-h3">Job types</h3>
                                        {/* <p>Full-time · Remote · Part-time</p> */}
                                        <ul className="nav">
                                                <li className="active">
                                                    <button
                                                        className="btn btn-primary"
                                                        style={{margin: "2px"}}
                                                    >
                                                        <i className="glyphicon glyphicon-home">Full-time</i>
                                                    </button>
                                                </li>
                                                <li className="active">
                                                    <button
                                                        className="btn btn-primary"
                                                        style={{margin: "2px"}}
                                                    >
                                                        <i className="glyphicon glyphicon-home">Remote</i>
                                                    </button>
                                                </li>
                                                <li className="active">
                                                    <button
                                                        className="btn btn-primary"
                                                        style={{margin: "2px"}}
                                                    >
                                                        <i className="glyphicon glyphicon-home">Part-time</i>
                                                    </button>
                                                </li>
                                        </ul>
                                    </li>

                                </ul>
                            </div>
                        </div>
    )
}
