import React, { useState, useEffect } from 'react';
import './MailList.scss';
import MailListElement from './MailListElement';
import { getMailListService } from '../../../Services/MailService';

function MailList({ viewMailDetails }) {
  const [mailList, setMailList] = useState([]);
  useEffect(() => {
    getMailList()
  }, []);

  const getMailList = async() => {
    const serviceResponse = await getMailListService('inbox')
    if (serviceResponse && serviceResponse.status === 200) {
      setMailList(serviceResponse.data.mail_list)
    }
  }
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
