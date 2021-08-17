import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import JobDetails from "../job/JobDetails";
import UserPage from '../user_page/UserPage';

const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path={"/"} exact component={HomePage} />
                    <Route path={"/job/:id"} component={JobDetails} />
                    <Route path={"/account"} component={UserPage} />
                </Switch>
            </Router>
        </>
    );
};

export default Routes;