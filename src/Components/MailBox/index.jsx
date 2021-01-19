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
    count: 0,
  });
  const [unreadCount, setUnreadCount] = useState(0);
  const [selectedFolder, setSelectedFolder] = useState('inbox');

  const viewMailDetails = (mailDeatils) => {
    setSelectedMailDetails({
      id: mailDeatils.id,
      header: mailDeatils.subject,
      label: mailDeatils.label,
    });
    if (!mailDeatils.is_read) {
      setUnreadCount(unreadCount + 1);
    }
  };

  const resetView = () => {
    setSelectedMailDetails({
      id: null,
      header: '',
      lable: '',
    });
  };
  return (
    <div className="w-100 d-flex mailbox">
      <div className="w-30  m-t-2 ">
        <MailBoxControlPanel
          selectedFolder={selectedFolder}
          unreadCount={unreadCount}
        />
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
        {selectedMailDeatils.id && (
          <MailDetails
            mailId={selectedMailDeatils.id}
            folder={selectedFolder}
          />
        )}
      </div>
    </div>
  );
}
export default withRouter(MailBox);
