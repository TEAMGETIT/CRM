import React, { useState } from 'react';
import MailBoxCategories from './MailBoxCategories';
import MailBoxFolders from './MailBoxFolders';
import MailBoxLabels from './MailBoxLabels';
import CreateMail from './CreateMail';
import './MailBoxControlPanel.scss';

function MailBoxControlPanel() {
  const [openCreateMail, setOpenCreateMail] = useState(false);
  console.log(openCreateMail);
  const closeModal = () => {
    setOpenCreateMail(false)
    console.log('test')
  };
  return (
    <div className="mailbox__controlpanel d-flex">
      <CreateMail
        isOpen={openCreateMail}
        onClose={closeModal}
      />
      <button
        className="btn btn-primary w-100"
        onClick={() => setOpenCreateMail(true)}
      >
        Compose Mail
      </button>
      <MailBoxFolders />
      <MailBoxCategories />
      <MailBoxLabels />
    </div>
  );
}

export default MailBoxControlPanel;
