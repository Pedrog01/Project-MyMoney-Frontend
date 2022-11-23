import React from "react";
import { Router, Route, Redirect, hashHistory } from "react-router";

import dashboard2 from '../dashboard2/dashboard2'
import BillingCycle from '../billingCycle/billingCycle'


export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={dashboard2} />
        <Route path='/billingCycles' component={BillingCycle} />
        <Redirect from='*' to='/' />
    </Router>
)