import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NavBar from '../navigation/NavBar';
import {useHistory} from "react-router-dom";
import {useForm} from 'react-hook-form';
import {useStyles} from "../../util/FormStyling";
import AuthService from "../../service/AuthService";

export default function Register() {
  const classes = useStyles();
  const history = useHistory()

  const eventHandler = () => {
      history.push("/login")
  }

  const { register, handleSubmit, formState: {errors} } = useForm();

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
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={
            handleSubmit((data) => {
                AuthService.register(data).then(res => history.push("/login"))
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
              {errors.firstName && <span className="required-field-error-1">This field is required!</span>}
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
              {errors.lastName && <span className="required-field-error-1">This field is required!</span>}
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
               {errors.email && <span className="required-field-error-1">Please enter a valid email!</span>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                {...register("password", {required: true, minLength: 6, maxLength: 15 })}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {errors.password && <span className="required-field-error-1">Password must be between 6-12 characters</span>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                  variant="outlined"
                  required
                  fullWidth
                  {...register("phone", {required: true, minLength: 5, maxLength: 30, pattern: /^[0-9\b]+$/ })}
                  label="Phone number"
                  id="phone"
                  autoComplete="phone"
              />
              {errors.phone && <span className="required-field-error-1">Password must be between 6-12 characters</span>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                  variant="outlined"
                  required
                  fullWidth
                  {...register("city", {required: true, minLength: 3, maxLength: 30 })}
                  label="City"
                  type="city"
                  id="city"
                  autoComplete="city"
              />
              {errors.city && <span className="required-field-error-1">Password must be between 6-12 characters</span>}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2" onClick={eventHandler}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </div>
  );
}