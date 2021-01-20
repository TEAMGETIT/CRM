import React, { useState, useEffect } from 'react';
import './MailList.scss';
import MailListElement from './MailListElement';
import { getMailListService } from '../../../Services/MailService';
import Loader from '../../Loader';

function MailList({ viewMailDetails, selectedFolder }) {
  const [mailList, setMailList] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getMailList(selectedFolder);
  }, [selectedFolder]);

  const getMailList = async (selectedFolder) => {
    setLoader(true);
    const serviceResponse = await getMailListService(selectedFolder);
    if (serviceResponse && serviceResponse.status === 200) {
      setMailList(serviceResponse.data.mail_list);
    }
    setLoader(false);
  };
  return (
    <div className="w-100 bg--white">
      <Loader status={loader} />
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
