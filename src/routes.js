import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';




const Routes = () => (
  <Switch>
    <Route path="/dashboard" component={Dashboard} />
    <Redirect from="/" to="/dashboard" />
    
  </Switch>
);

export default Routes;
