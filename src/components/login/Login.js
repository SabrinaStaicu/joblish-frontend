import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NavBar from '../main/NavBar';
import {useHistory} from "react-router-dom";
import {useForm} from 'react-hook-form';
import {useStyles} from "../../util/FormStyling";
import AuthService from "../../service/AuthService";

export default function SignIn() {
    const history = useHistory();
    const classes = useStyles();
    const { register, handleSubmit, formState: {errors} } = useForm();


    const eventHandler = () => {
        history.push("/login")
    }

    return (
        <div>
        <NavBar color={"rgba(0, 0, 255, 0.534)"} />
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate onSubmit={
                        handleSubmit((data) => {
                            AuthService.login(data).then(
                                res => history.push("/"),
                                error => console.log(error)
                            )
                        })
                        }>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        {...register("email", {required: true})}
                        autoComplete="email"
                        autoFocus
                        // onChange={getEmail}
                    />
                    {errors.email && <span style={{color:"red"}}>This field is required!</span>}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        {...register("password", {required: true})}
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        // onChange={getPassword}
                    />
                    {errors.password && <span style={{color:"red"}}>This field is required!</span>}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="/register" variant="body2" onClick={eventHandler}>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
        </div>
    );
}