import React from 'react';
import './MailBox.scss'
import MailBoxControlPanel from './MailBoxControlPanel';
import MailActionBar from './MailActionBar';
import MailList from './MailList';

export default function MailBox({}) {
  return (
    <div className="w-100 d-flex">
      <div className="w-30">
        <MailBoxControlPanel />
      </div>
      <div className="w-67 m-t-2 m-r-2 mail__list">
        <MailActionBar />
        <MailList />
      </div>
    </div>
  );
}
