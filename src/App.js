import React, { useState, useEffect } from 'react';
import './App.scss';
import Login from './Components/Login'
import { withRouter, Route, Redirect } from 'react-router-dom';
import SideExpansionPanel from './Components/SideExpansionPanel';

function App({location}) {
  const [curretRoutePath, setCurretRoutePath] = useState('')
  useEffect(() => {
    if (
      location.pathname !== '/login' &&
      !localStorage.getItem('userdetails')
    ) {
      window.location.href = '/login';
    } else {
      setCurretRoutePath(location.pathname);
    }
  }, [location]);

  return (
    <div className="app-container">
      {curretRoutePath === '/login' ? (
        <Route path="/login" component={Login} />
      ) : (
        <React.Fragment>
          <SideExpansionPanel />
          {/* <ViewArea isPanelOpen={isPanelOpen} /> */}
        </React.Fragment>
      )}
    </div>
  );
}

export default withRouter(App);
