import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import JobDetails from "../job/JobDetails";
import Application from "../application/Application";
import UserPage from '../user_page/UserPage';
import UserApplications from "../application/UserApplications";

import Jobs from '../job/Jobs';

import Login from "../login/Login";
import Companies from "../company/Companies";
import Footer from './Footer';


const Routes = () => {
    return (
        <div >
            <div style={{display:"flex", flexDirection:"column"}}>
            <Router>
                <Switch>
                    <Route path={"/"} exact component={HomePage} />
                    <Route path={"/jobs"} component={Jobs} />
                    <Route path={"/apply/:jobId"} component={Application}/>
                    <Route path={"/job/:id"} component={JobDetails} />
                    <Route path={"/account"} component={UserPage} />
                    <Route path={"/user-applications"} component={UserApplications}/>
                    <Route path={"/login"} component={Login} />
                    <Route path={"/companies"} component={Companies}/>
                </Switch>
            </Router>
            </div>
            <div>
                <Footer/>
            </div>

        </div>
    );
};

export default Routes;