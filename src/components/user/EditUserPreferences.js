import React, {useState} from 'react'
import Button from "@material-ui/core/Button";
import Switch from '@material-ui/core/Switch';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import UserService from "../../service/UserService";
import AuthService from "../../service/AuthService";

export default function EditUserPreferences({editClasses, state, closeModal, user, handleChange}) {
    const [jobTitles, setJobTitles] = useState([user.jobPreferences.jobTitles][0])
    const [locations, setLocations] = useState([user.jobPreferences.locations][0]);
    const [jobTypes, setJobTypes] = useState([user.jobPreferences.jobTypes][0])

    const [jobTitle, setJobTitle] = useState("");
    const [location, setLocation] = useState("");
    const [jobType, setJobType] = useState("");

    const addJobTitle = () => {
        if (!jobTitles.includes(jobTitle)) {
            setJobTitles([...jobTitles, jobTitle]);
        }
    }

    const addJobLocation = () => {
        if (!locations.includes(location)) {
            setLocations([...locations, location]);
        }
    }

    const addJobType = () => {
        if (!jobTypes.includes(jobType)) {
            setJobTypes([...jobTypes, jobType]);
        }
    }

    const updatePreferences = () => {
        const jobPreferences = {
            openToWork: state.checkedB,
            jobTitles: jobTitles,
            locations: locations,
            jobTypes: jobTypes
        }
        UserService.updateJobPreferences(AuthService.getCurrentUser().id, jobPreferences).then(
            res => {
                closeModal()
                window.location.reload()
            }
        )
    }

    return (
        <div className={editClasses.root}>
            <div className="div-style-1">
                <div className="div-style-2">
                    <h3>Edit job preferences</h3>
                    <div className="div-style-3">
                        <Button color="primary" onClick={closeModal}>X</Button>
                    </div>
                </div>
                <div >
                    <div className="div-style-4">
                        <div className="profile-picture-div">
                            <a><img className="profile-picture-modal" src={user.picture ? user.picture : "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"}  alt="profile"/></a>
                        </div>
                        <div>
                            <h3 className="div-style-4-h3">
                                <strong className="div-style-4-h3-strong">{user.firstName} {user.lastName}</strong>
                                {state.checkedB ? (<p>is open to work</p>) : (<p>is not open to work</p>)}
                            </h3>
                        </div>
                        <div className="div-style-5">
                            <Switch
                                checked={state.checkedB}
                                onChange={handleChange}
                                color="primary"
                                name="checkedB"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        </div>
                    </div>
                    <ul className="ul-style">
                        <li className="ul-li-style">
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        size="small"
                                        autoComplete="title"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="title"
                                        label="Title"
                                        autoFocus
                                        onChange={e => setJobTitle(e.target.value)}
                                    />
                                    <Button color="primary" onClick={addJobTitle}>+</Button>
                                </Grid>
                            </Grid>
                        </li>
                        <li className="ul-li-style-2">
                            <h3 className="ul-li-h3">Job titles</h3>
                            <ul className="nav">
                                {
                                    jobTitles.map(
                                        title => (
                                            <li className="active" >
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
                        <li className="ul-li-style">
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        size="small"
                                        autoComplete="location"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="location"
                                        label="Location"
                                        autoFocus
                                        onChange={e => setLocation(e.target.value)}
                                    />
                                    <Button color="primary" onClick={addJobLocation}>+</Button>
                                </Grid>
                            </Grid>
                        </li>
                        <li className="ul-li-style-2">
                            <h3 className="ul-li-h3">Job types</h3>
                            <ul className="nav">
                                {
                                    locations.map(
                                        jobType => (
                                            <div>
                                                <button
                                                    className="btn btn-primary"
                                                    style={{margin: "2px"}}
                                                >
                                                    <i className="glyphicon glyphicon-home">{jobType}</i>
                                                </button>
                                            </div>
                                        )
                                    )
                                }
                            </ul>
                        </li>
                        <li className="ul-li-style">
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        size="small"
                                        autoComplete="jobType"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="jobType"
                                        label="Job type"
                                        autoFocus
                                        onChange={e => setJobType(e.target.value)}
                                    />

                                    <Button color="primary" onClick={addJobType}>+</Button>
                                </Grid>
                            </Grid>
                        </li>
                        <li className="ul-li-style-2">
                            <h3 className="ul-li-h3">Job types</h3>
                            <ul className="nav">
                                {
                                    jobTypes.map(
                                        jobType => (
                                            <li className="active">
                                                <button
                                                    className="btn btn-primary"
                                                    style={{margin: "2px"}}
                                                >
                                                    <i className="glyphicon glyphicon-home">{jobType.toLowerCase().replace("_ ", " ")}</i>
                                                </button>
                                            </li>
                                        )
                                    )
                                }
                            </ul>
                        </li>
                    </ul>
                    <Button color="primary" onClick={updatePreferences}>Save</Button>
                </div>
            </div>
        </div>
    )
}