import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import MailBox from './Components/MailBox';
import UnderConstruction from './Components/UnderConstruction';

const Routes = () => (
  <Switch>
    <Route path="/dashboard" component={UnderConstruction} />
    <Route path="/layout" component={UnderConstruction} />
    <Route path="/graph" component={UnderConstruction} />
    <Route path="/mailbox" component={MailBox} />
    <Route path="/metrics" component={UnderConstruction} />
    <Route path="/widgets" component={UnderConstruction} />
    <Route path="/forms" component={UnderConstruction} />
    <Route path="/app-view" component={UnderConstruction} />
    <Route path="/documents" component={UnderConstruction} />
    <Route path="/locations" component={UnderConstruction} />
    <Route path="/extra-widgets" component={UnderConstruction} />
    <Route path="/mobile-view" component={UnderConstruction} />
    <Redirect from="/" to="/dashboard" />
  </Switch>
);

export default Routes;
