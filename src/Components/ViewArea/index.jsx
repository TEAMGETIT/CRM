import React from 'react';
import './ViewArea.scss';
import Header from '../Header';
import Routes from '../../routes';
function ViewArea({ isPanelOpen }) {
  return (
    <div
      className="viewArea"
      style={{
        width: isPanelOpen ? 'calc(100% - 185px)' : 'calc(100% - 60px)',
      }}
    >
      <Header />
      <Routes />
    </div>
  );
}

export default ViewArea;
