import React from 'react'
import Button from "@material-ui/core/Button";
import Switch from '@material-ui/core/Switch';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import UserService from "../../service/UserService";
import AuthService from "../../service/AuthService";

export default function EditUser({editClasses, handleSubmit, editHandler, state,
                                     setUser, closeModal, user, handleChange, register, errors, value, handleChangeRadio}) {
    return (
        <form className={editClasses.root} onSubmit={
            handleSubmit((data) => {
                UserService.updateJobPreferences(AuthService.getCurrentUser().id, state.checkedB)
                editHandler();
                UserService.getUserById(AuthService.getCurrentUser().id).then(res => setUser(res.data));
                window.location.reload();

            })
        } noValidate>
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
                            <a><img className="profile-picture-modal" src={user.picture ? user.picture : "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"}  alt="profile-picture"/></a>
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
                                        {...register("title", {required: true})}
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="title"
                                        label="Title"
                                        autoFocus
                                    />
                                    {errors.title && <span className="required-field-error-1">This field is required!</span>}
                                </Grid>
                            </Grid>
                            <h3 className="ul-li-h3">Job titles</h3>
                            <p>Junior Developer · Marketing Specialist · System Administrator</p>
                        </li>
                        <li className="ul-li-style">
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        size="small"
                                        autoComplete="location"
                                        {...register("location", {required: true})}
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="location"
                                        label="Location"
                                        autoFocus
                                    />
                                    {errors.location && <span className="required-field-error-1">This field is required!</span>}
                                </Grid>
                            </Grid>
                            <h3 className="ul-li-h3">Job locations</h3>
                            <p>Bucharest, Bucharest, Romania</p>
                        </li>
                        <li className="ul-li-h3">
                            <FormControl component="fieldset">
                                <RadioGroup aria-label="startDate" name="startDate" value={value} onChange={handleChangeRadio}>
                                    <FormControlLabel value="Immediately, I’m actively applying" control={<Radio color="primary" />} label="Immediately, I’m actively applying" />
                                    <FormControlLabel value="Flexible, I’m casually browsing" control={<Radio color="primary" />} label="Flexible, I’m casually browsing" />
                                </RadioGroup>
                            </FormControl>
                            <h3 className="ul-li-h3-2">Start date</h3>
                            <p>Immediately, I’m actively applying</p>
                        </li>
                        <li className="ul-li-style">
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        size="small"
                                        autoComplete="jobType"
                                        {...register("jobType", {required: true})}
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="jobType"
                                        label="Job type"
                                        autoFocus
                                    />
                                    {errors.jobType && <span style={{color:"red"}}>This field is required!</span>}
                                </Grid>
                            </Grid>
                            <h3 className="ul-li-h3">Job types</h3>
                            <p>Full-time · Remote · Part-time</p>
                        </li>
                    </ul>
                    <Button color="primary" type="submit">Save</Button>
                </div>
            </div>
        </form>
    )
}