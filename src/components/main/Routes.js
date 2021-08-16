import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import HomePage from "./HomePage";

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path={"/"} exact component={HomePage} />
                </Switch>
            </Router>
        </div>
    );
};

export default Routes;