import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import JobDetails from "../job/JobDetails";
import Application from "../application/Application";
import UserPage from '../user_page/UserPage';
import UserApplications from "../application/UserApplications";
import Jobs from '../Jobs_page/Jobs';

const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path={"/"} exact component={HomePage} />
                    <Route path={"/jobs"} component={Jobs} />
                    <Route path={"/apply/:jobId"} component={Application}/>
                    <Route path={"/job/:id"} component={JobDetails} />
                    <Route path={"/account"} component={UserPage} />
                    <Route path={"/user-applications"} component={UserApplications}/>
                </Switch>
            </Router>
        </>
    );
};

export default Routes;