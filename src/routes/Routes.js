import React, {Fragment} from "react";
import {Route} from "react-router-dom";
import SignUp from "../MainComponents/SignUp";
import SignIn from "../MainComponents/SignIn";
import TaskDash from "../MainComponents/TaskDash"

const Routes = () => {
    return(
        <Fragment>
            <Route path="/" component={SignUp} exact />
            <Route path="/signin" component={SignIn} exact />
            <Route path="/dashboard" component={TaskDash} exact />
        </Fragment>
    )
}

export default Routes;