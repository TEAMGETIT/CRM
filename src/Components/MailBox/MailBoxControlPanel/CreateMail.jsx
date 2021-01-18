import React from 'react';
import TextField from '@material-ui/core/TextField';
import Modal from '../../Modal';
import './MailBoxControlPanel.scss';

function CreateMail({ isOpen, onClose }) {

  const updateFormValue = () => {
    console.log('test')
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
          onChange={(e) => updateFormValue(e, 'username')}
        />
        <TextField
          type="Subject"
          name="Subject"
          placeholder="Subject"
          size="small"
          className="w-100 m-v-1"
          onChange={(e) => updateFormValue(e, 'username')}
        />
        <TextField
          type="text"
          name="Content"
          placeholder="Content"
          size="small"
          multiline
          className="w-100 m-v-1 text__area"
          onChange={(e) => updateFormValue(e, 'username')}
        />
      </div>
      <div className="create__mail--action w-100 d-flex jc-fe">
        <button className="btn btn-primary" onClick={onClose}>Send</button>
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
