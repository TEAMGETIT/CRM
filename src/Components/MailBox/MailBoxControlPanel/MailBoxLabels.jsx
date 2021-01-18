import React from 'react';
import Icon from '../../Icon';

function MailBoxLabels() {
  const labels = [
    'Family',
    'Work',
    'Home',
    'Children',
    'Holidays',
    'Music',
    'Photography',
    'Film',
  ];
  return (
    <div className="w-100">
      <h4 className="m-v-5 mailbox__controlpanel__header">Labels</h4>
      <div className="d-flex">
        {labels.map((label) => (
          <div className="d-flex ai-c jc-c m-1 controlpanel__label__elm">
            <Icon name="tag" color="bg--color1"/>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MailBoxLabels;
