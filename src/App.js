import React, { useState, useEffect } from 'react';
import './App.scss';
import Login from './Components/Login';
import { withRouter, Route, Redirect } from 'react-router-dom';
import SideExpansionPanel from './Components/SideExpansionPanel';
import ViewArea from './Components/ViewArea';

function App({ location }) {
  const [curretRoutePath, setCurretRoutePath] = useState('');
  const [isPanelOpen, setIsPanelOpen] = useState(false);
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
    <div className="app__container">
      {curretRoutePath === '/login' ? (
        <Route path="/login" component={Login} />
      ) : (
        <React.Fragment>
          <SideExpansionPanel isPanelOpen={isPanelOpen}/>
          <ViewArea isPanelOpen={isPanelOpen} togglePanel={() => setIsPanelOpen(!isPanelOpen)}/>
        </React.Fragment>
      )}
    </div>
  );
}

export default withRouter(App);
