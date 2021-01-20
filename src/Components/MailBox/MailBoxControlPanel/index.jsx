import React, { useState } from 'react';
import MailBoxCategories from './MailBoxCategories';
import MailBoxFolders from './MailBoxFolders';
import MailBoxLabels from './MailBoxLabels';
import CreateMail from './CreateMail';
import './MailBoxControlPanel.scss';

function MailBoxControlPanel({ selectedFolder, unreadCount, changeFolder }) {
  const [openCreateMail, setOpenCreateMail] = useState(false);
  const closeModal = () => {
    setOpenCreateMail(false);
  };
  return (
    <div className="mailbox__controlpanel d-flex">
      <CreateMail isOpen={openCreateMail} onClose={closeModal} />
      <button
        className="btn btn-primary w-100"
        onClick={() => setOpenCreateMail(true)}
      >
        Compose Mail
      </button>
      <MailBoxFolders
        selectedFolder={selectedFolder}
        unreadCount={unreadCount}
        changeFolder={changeFolder}
      />
      <MailBoxCategories />
      <MailBoxLabels />
    </div>
  );
}

export default MailBoxControlPanel;
