import React from 'react';
import './MailDetails.scss';
import Avatar from '@material-ui/core/Avatar';

function MailDetails() {
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
            <div className="mail__user__name ">Sam Miller</div>
            <div className="mail__user__emailid m-v-2">sammiller@gmail.com</div>
            <div className="mail__user__recipients">to:me</div>
          </div>
        </div>
        <div className="mail__time ">Today 08:45 PM</div>
      </div>
      <div className="mail__details__content m-t-2">
        <p className="content">
          <span className="mail__intro">Hi Santhosh, </span>
          <br />I hope you’re having a wonderful day! I am emailing you today to
          let you know we have opened doors to our CRM. It helps you . Here is a
          testimonial from a recent customer. If you have any questions about
          the product, please respond to this email or use the live chat on the
          product page. Our staff is waiting to respond to you. Thank you,
        </p>
      </div>
    </div>
  );
}

export default MailDetails;
