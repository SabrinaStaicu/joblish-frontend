import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import JobDetails from "../job/JobDetails";
import UserPage from '../user/UserPage';
import UserApplications from "../application/UserApplications";

import Jobs from '../job/Jobs';
import Register from "../login/Register";
import Login from "../login/Login";
import Companies from "../company/Companies";
import Footer from './Footer';
import DashBoard from '../company/DashBoard';


const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path={"/"} exact component={HomePage} />
                    <Route path={"/jobs"} component={Jobs} />
                    <Route path={"/job/:id"} component={JobDetails} />
                    <Route path={"/account"} component={UserPage} />
                    <Route path={"/user-applications"} component={UserApplications}/>
                    <Route path={"/login"} component={Login} />
                    <Route path={"/companies"} component={Companies}/>
                    <Route path={"/dash-board"} component={DashBoard}/>
                    <Route path={"/register"} component={Register}/>
                </Switch>
            </Router>
            <Footer/>
        </>
    );
};

export default Routes;