import React, { useState, useEffect } from 'react';
import './MailDetails.scss';
import Avatar from '@material-ui/core/Avatar';
import { getMailDetailService } from '../../../Services/MailService';

function MailDetails({ mailId, folder }) {
  const [mailDetails, setMailDetails] = useState({});
  useEffect(() => {
    getmailDetails(mailId);
  }, [mailId]);
  const getmailDetails = async (mailId) => {
    const serviceResponse = await getMailDetailService(mailId, folder);
    if (serviceResponse && serviceResponse.status == 200) {
      setMailDetails(serviceResponse.data.mail_details)
    }
  };
  const iconPath = `${window.location.origin}/images/mail.png`;
  return (
    <div className="mail__details">
      <div className="mail__details__header d-flex jc-sb">
        <div className="d-flex w-50 ai-c">
          <Avatar
            alt="User"
            src="https://i.pravatar.cc/200?img=68"
            className="avatar m-r-4"
          />
          <div>
            <div className="mail__user__name ">{mailDetails.username}</div>
            <div className="mail__user__emailid m-v-2">{mailDetails.user_email}</div>
            <div className="mail__user__recipients">to:me</div>
          </div>
        </div>
        <div className="mail__time ">Today 08:45 PM</div>
      </div>
      <div className="mail__details__content m-t-2">
        <p className="content">
          {mailDetails.content}
        </p>
      </div>
    </div>
  );
}

export default MailDetails;
