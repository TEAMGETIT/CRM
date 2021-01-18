import React, { useState, useEffect } from 'react';
import './MailList.scss';
import MailListElement from './MailListElement';

function MailList({viewMailDetails}) {
  const [mailList, setMailList] = useState([]);
  useEffect(() => {
    setMailList([
      {
        from: 'Anna Smith',
        id: 1,
        subject: 'Many desktop publishing packages and web page editors',
        time: '6:10 AM',
        read: true,
      },
      {
        from: 'Jack Nowak',
        id: 2,
        subject: 'Testing Mail Page Working',
        time: '8:20 AM',
        read: false,
      },
      {
        from: 'Anna Smith',
        id: 1,
        id: 1,
        subject: 'Many desktop publishing packages and web page editors',
        time: '6:10 AM',
        read: true,
        label: 'clients',
      },
      {
        from: 'Jack Nowak',
        id: 2,
        subject: 'Testing Mail Page Working',
        time: '8:20 AM',
        read: false,
      },
      {
        from: 'Anna Smith',
        id: 1,
        subject: 'Many desktop publishing packages and web page editors',
        time: '6:10 AM',
        read: true,
      },
      {
        from: 'Jack Nowak',
        id: 2,
        subject: 'Testing Mail Page Working',
        time: '8:20 AM',
        read: false,
      },
      {
        from: 'Anna Smith',
        id: 1,
        subject: 'Many desktop publishing packages and web page editors',
        time: '6:10 AM',
        read: true,
      },
      {
        from: 'Jack Nowak',
        id: 2,
        subject: 'Testing Mail Page Working',
        time: '8:20 AM',
        read: false,
      },
      {
        from: 'Anna Smith',
        id: 1,
        subject: 'Many desktop publishing packages and web page editors',
        time: '6:10 AM',
        read: true,
      },
      {
        from: 'Jack Nowak',
        id: 2,
        subject: 'Testing Mail Page Working',
        time: '8:20 AM',
        read: false,
      },
      {
        from: 'Anna Smith',
        id: 1,
        subject: 'Many desktop publishing packages and web page editors',
        time: '6:10 AM',
        read: true,
      },
      {
        from: 'Jack Nowak',
        id: 2,
        subject: 'Testing Mail Page Working',
        time: '8:20 AM',
        read: false,
      },
      {
        from: 'Anna Smith',
        id: 1,
        subject: 'Many desktop publishing packages and web page editors',
        time: '6:10 AM',
        read: true,
      },
      {
        from: 'Jack Nowak',
        id: 2,
        subject: 'Testing Mail Page Working',
        time: '8:20 AM',
        read: false,
      },
      {
        from: 'Anna Smith',
        id: 1,
        subject: 'Many desktop publishing packages and web page editors',
        time: '6:10 AM',
        read: true,
      },
      {
        from: 'Jack Nowak',
        id: 2,
        subject: 'Testing Mail Page Working',
        time: '8:20 AM',
        read: false,
      },
    ]);
  }, []);

 
  
  return (
    <div className="w-100 bg--white">
      {mailList.map((mail) => (
        <MailListElement
          data={mail}
          onMailElmClick={() => {
            viewMailDetails(mail);
          }}
        />
      ))}
    </div>
  );
}

export default MailList;
