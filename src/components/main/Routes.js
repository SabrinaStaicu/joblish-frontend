import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import HomePage from "./HomePage";
import JobDetails from "../job/JobDetails";
import Application from "../application/Application";

const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path={"/"} exact component={HomePage} />
                    <Route path={"/job/:id"} component={JobDetails}/>
                    <Route path={"/apply/;jobId"} component={Application}/>
                </Switch>
            </Router>
        </>
    );
};

export default Routes;