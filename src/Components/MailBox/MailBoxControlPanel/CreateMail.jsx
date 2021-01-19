import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Modal from '../../Modal';
import './MailBoxControlPanel.scss';
import { sendMailService } from '../../../Services/MailService';

function CreateMail({ isOpen, onClose }) {
  const [formValue, setFormValue] = useState({
    toUserEmail: '',
    subject: '',
    content: '',
  });
  const updateFormValue = (e, key) => {
    setFormValue({
      ...formValue,
      [key]: e.target.value,
    });
  };

  const sendMail = async () => {
    const formData = new FormData();
    formData.append('to_user_email', formValue.toUserEmail);
    formData.append('subject', formValue.subject);
    formData.append('content', formValue.content);
    const serviceResponse = await sendMailService(formData);
    if (serviceResponse.status === 200) {
      onClose();
    }
  };

  const content = (
    <div className="w-100 d-flex">
      <div className="d-flex w-100 create__mail">
        <TextField
          type="text"
          name="To"
          placeholder="To"
          size="small"
          className="w-100 m-v-1"
          onChange={(e) => updateFormValue(e, 'toUserEmail')}
        />
        <TextField
          type="Subject"
          name="Subject"
          placeholder="Subject"
          size="small"
          className="w-100 m-v-1"
          onChange={(e) => updateFormValue(e, 'subject')}
        />
        <TextField
          type="text"
          name="Content"
          placeholder="Content"
          size="small"
          multiline
          className="w-100 m-v-1 text__area"
          onChange={(e) => updateFormValue(e, 'content')}
        />
      </div>
      <div className="create__mail--action w-100 d-flex jc-fe">
        <button className="btn btn-primary" onClick={sendMail}>
          Send
        </button>
      </div>
    </div>
  );
  return (
    <Modal
      content={content}
      title="New Mail"
      isOpen={isOpen}
      onClose={onClose}
    />
  );
}

export default CreateMail;
