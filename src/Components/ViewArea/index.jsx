import React from 'react';
import './ViewArea.scss';
import Header from '../Header';
import Routes from '../../routes';
function ViewArea({ isPanelOpen, togglePanel }) {
  return (
    <div
      className="viewArea"
      style={{
        marginLeft: isPanelOpen ? '185px' : '60px',
        width: isPanelOpen ? 'calc(100% - 185px)' : 'calc(100% - 60px)',
      }}
    >
      <Header togglePanel={togglePanel} />
      <Routes />
    </div>
  );
}

export default ViewArea;
