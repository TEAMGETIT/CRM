import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './MailBox.scss';
import MailBoxControlPanel from './MailBoxControlPanel';
import MailActionBar from './MailActionBar';
import MailList from './MailList';
import MailDetails from './MailDetails';

function MailBox({}) {
  const [selectedMailDeatils, setSelectedMailDetails] = useState({
    id: null,
    header: '',
    label: '',
  });

  const [selectedFolder, setSelectedFolder] = useState('Inbox');

  const viewMailDetails = (mailDeatils) => {
    console.log(mailDeatils)
    setSelectedMailDetails({
      id: mailDeatils.id,
      header: mailDeatils.subject,
      label: mailDeatils.label,
    });
  };

  const resetView = () => {
    setSelectedMailDetails({
      id: null,
      header: '',
      lable: ''
    });
  };
  return (
    <div className="w-100 d-flex mailbox">
      <div className="w-30  m-t-2 ">
        <MailBoxControlPanel />
      </div>
      <div className="w-67 m-t-2 m-r-2 mail__list">
        <MailActionBar
          header={selectedMailDeatils.header || selectedFolder}
          isFolder={!selectedMailDeatils.id}
          viewList={resetView}
          label={selectedMailDeatils.label}
        />
        {!selectedMailDeatils.id && (
          <MailList viewMailDetails={viewMailDetails} />
        )}
        {selectedMailDeatils.id && <MailDetails />}
      </div>
    </div>
  );
}
export default withRouter(MailBox);
