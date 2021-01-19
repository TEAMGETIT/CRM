import React, { useState, useEffect } from 'react';
import './App.scss';
import Login from './Components/Login';
import { withRouter, Route, Redirect } from 'react-router-dom';
import SideExpansionPanel from './Components/SideExpansionPanel';
import ViewArea from './Components/ViewArea';

function App({ location }) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  
  return (
    <div className="app__container">
      {location.pathname === '/login' ? (
        <Route path="/login" component={Login} />
      ) : localStorage.getItem('userdetails') ? (
        <React.Fragment>
          <SideExpansionPanel isPanelOpen={isPanelOpen} />
          <ViewArea
            isPanelOpen={isPanelOpen}
            togglePanel={() => setIsPanelOpen(!isPanelOpen)}
          />
        </React.Fragment>
      ) : (
        <Redirect push to="/login" />
      )}
    </div>
  );
}

export default withRouter(App);
