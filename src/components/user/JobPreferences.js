import React from 'react'
import Button from "@material-ui/core/Button";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

export default function JobPreferences({closeModal, user, editHandler, state}) {

    return (
        <div className="div-style-6">
            <div className="div-style-7">
                <h3>Job preferences</h3>
                <div className="div-style-3">
                    <Button color="primary" onClick={closeModal}>X</Button>
                </div>
            </div>
            <div >
                <div className="div-style-8">
                    <div className="profile-picture-div">
                        <a><img className="profile-picture-modal" src={user.picture ? user.picture : "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"}  alt="profile"/></a>
                    </div>
                    <div>
                        <h3 className="div-style-4-h3">
                            <strong className="div-style-4-h3-strong">{user.firstName} {user.lastName}</strong>
                            {state.checkedB ? (<p>is open to work</p>) : (<p>is not open to work</p>)}
                        </h3>
                    </div>
                    <div>
                        <EditOutlinedIcon className="classes-root" onClick={editHandler} />
                    </div>
                </div>
                <ul className="ul-style">
                    <li className="ul-li-style-2">
                        <h3 className="ul-li-h3">Job titles</h3>
                        <ul className="nav">
                            {
                                user.jobPreferences.jobTitles.map(
                                    title => (
                                        <li className="active">
                                            <button
                                                className="btn btn-primary"
                                                style={{margin: "2px"}}
                                            >
                                                <i className="glyphicon glyphicon-home">{title}</i>
                                            </button>
                                        </li>
                                    )
                                )
                            }
                        </ul>
                    </li>
                    <li className="ul-li-style-2">
                        <h3 className="ul-li-h3">Job locations</h3>
                        <ul className="nav">
                            {
                                user.jobPreferences.locations.map(
                                    location => (
                                        <li className="active">
                                            <button
                                                className="btn btn-primary"
                                                style={{margin: "2px"}}
                                            >
                                                <i className="glyphicon glyphicon-home">{location}</i>
                                            </button>
                                        </li>
                                    )
                                )
                            }
                        </ul>
                    </li>
                    <li className="ul-li-style-2">
                        <h3 className="ul-li-h3">Job types</h3>
                        <ul className="nav">
                            {
                                user.jobPreferences.jobTypes.map(
                                    jobType => (
                                        <li className="active">
                                            <button
                                                className="btn btn-primary"
                                                style={{margin: "2px"}}
                                            >
                                                <i className="glyphicon glyphicon-home">{jobType.toLowerCase().replace("_", " ")}</i>
                                            </button>
                                        </li>
                                    )
                                )
                            }
                        </ul>
                    </li>

                </ul>
            </div>
        </div>
    )
}