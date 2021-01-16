import React from 'react';
import MailBoxCategories from './MailBoxCategories';
import MailBoxFolders from './MailBoxFolders';
import MailBoxLabels from './MailBoxLabels';
import './MailBoxControlPanel.scss';

function MailBoxControlPanel() {
  return (
    <div className="mailbox__controlpanel d-flex">
      <MailBoxFolders />
      <MailBoxCategories />
      <MailBoxLabels />
    </div>
  );
}

export default MailBoxControlPanel;
