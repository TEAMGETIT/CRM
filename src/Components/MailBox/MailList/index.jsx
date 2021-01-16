import React, { useState, useEffect } from 'react';
import './MailList.scss';
import MailListElement from './MailListElement';

function MailList({}) {
  const [mailList, setMailList] = useState([]);

  useEffect(() => {
    setMailList([
      {
        from: 'Anna Smith',
        subject: 'Many desktop publishing packages and web page editors',
        time: '6:10 AM',
        label: 'Documents',
        read: true,
      },
      {
        from: 'Jack Nowak',
        subject: 'Testing Mail Page Working',
        time: '8:20 AM',
        label: 'Documents',
        read: false,
      },
      {
        from: 'Anna Smith',
        subject: 'Many desktop publishing packages and web page editors',
        time: '6:10 AM',
        label: 'Documents',
        read: true,
      },
      {
        from: 'Jack Nowak',
        subject: 'Testing Mail Page Working',
        time: '8:20 AM',
        label: 'Documents',
        read: false,
      },
      {
        from: 'Anna Smith',
        subject: 'Many desktop publishing packages and web page editors',
        time: '6:10 AM',
        label: 'Documents',
        read: true,
      },
      {
        from: 'Jack Nowak',
        subject: 'Testing Mail Page Working',
        time: '8:20 AM',
        label: 'Documents',
        read: false,
      },
      {
        from: 'Anna Smith',
        subject: 'Many desktop publishing packages and web page editors',
        time: '6:10 AM',
        label: 'Documents',
        read: true,
      },
      {
        from: 'Jack Nowak',
        subject: 'Testing Mail Page Working',
        time: '8:20 AM',
        label: 'Documents',
        read: false,
      },
      {
        from: 'Anna Smith',
        subject: 'Many desktop publishing packages and web page editors',
        time: '6:10 AM',
        label: 'Documents',
        read: true,
      },
      {
        from: 'Jack Nowak',
        subject: 'Testing Mail Page Working',
        time: '8:20 AM',
        label: 'Documents',
        read: false,
      },
      {
        from: 'Anna Smith',
        subject: 'Many desktop publishing packages and web page editors',
        time: '6:10 AM',
        label: 'Documents',
        read: true,
      },
      {
        from: 'Jack Nowak',
        subject: 'Testing Mail Page Working',
        time: '8:20 AM',
        label: 'Documents',
        read: false,
      },
      {
        from: 'Anna Smith',
        subject: 'Many desktop publishing packages and web page editors',
        time: '6:10 AM',
        label: 'Documents',
        read: true,
      },
      {
        from: 'Jack Nowak',
        subject: 'Testing Mail Page Working',
        time: '8:20 AM',
        label: 'Documents',
        read: false,
      },
      {
        from: 'Anna Smith',
        subject: 'Many desktop publishing packages and web page editors',
        time: '6:10 AM',
        label: 'Documents',
        read: true,
      },
      {
        from: 'Jack Nowak',
        subject: 'Testing Mail Page Working',
        time: '8:20 AM',
        label: 'Documents',
        read: false,
      },
    ]);
  }, []);
  return (
    <div className="w-100 bg--white">
      {mailList.map((mail) => (
        <MailListElement data={mail} />
      ))}
    </div>
  );
}

export default MailList;
