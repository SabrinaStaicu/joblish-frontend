import React, {useState} from 'react';
import NavBar from "../main/NavBar";
import {useStyles} from "../../util/FormStyling";
import {useHistory, useLocation} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {useForm} from "react-hook-form";
import UserService from "../../service/UserService";

const UpdateUserProfile = () => {
    const location = useLocation();
    const classes = useStyles();
    const history = useHistory()
    const [preloadedValues, setPreloadedValues] = useState({
        firstName: location.state.user.firstName,
        lastName: location.state.user.lastName,
        email: location.state.user.email,
        city: location.state.user.city,
        experience: location.state.user.experience,
        phone: location.state.user.phone
    });

    const { register, handleSubmit, formState: {errors} } = useForm({
        defaultValues: preloadedValues
    });

    return (
        <div>
            <NavBar color={"rgba(0, 0, 255, 0.534)"} />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Please fill in your details
                    </Typography>
                    <form className={classes.form} onSubmit={
                        handleSubmit((data) => {
                            UserService.updateUser(data, 3)
                            history.push("/account")
                        })
                    } noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    {...register("firstName", {required: true})}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                                {errors.firstName && <span style={{color:"red"}}>This field is required!</span>}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    {...register("lastName", {required: true})}
                                    autoComplete="lname"
                                />
                                {errors.lastName && <span style={{color:"red"}}>This field is required!</span>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    {...register("email", {required: true,  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
                                    autoComplete="email"
                                />
                                {errors.email && <span style={{color:"red"}}>Please enter a valid email!</span>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    {...register("city", {required: true, minLength: 2, maxLength: 30 })}
                                    label="City"
                                    type="city"
                                    id="city"
                                    autoComplete="city"
                                />
                                {errors.password && <span style={{color:"red"}}>Please enter a valid city name!</span>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    {...register("experience", {required: true, minLength: 2})}
                                    label="Experience"
                                    type="experience"
                                    id="experience"
                                    autoComplete="experience"
                                />
                                {errors.password && <span style={{color:"red"}}>Please a description of your professional experience!</span>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    {...register("phone", {required: true, minLength: 2, maxLength: 20, pattern: /^[0-9\b]+$/ })}
                                    label="Phone number"
                                    type="phone"
                                    id="phone"
                                    autoComplete="phone"
                                />
                                {errors.password && <span style={{color:"red"}}>Please enter a valid phone number!</span>}
                            </Grid>
                            {/*<Grid item xs={12}>*/}
                            {/*    <label style={{marginRight: "10px"}}>Looking for a job</label>*/}
                            {/*    <input name="lookingForJob" id="lookingForJob" {...register("lookingForJob")} type="checkbox"/>*/}
                            {/*</Grid>*/}
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Update
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default UpdateUserProfile;