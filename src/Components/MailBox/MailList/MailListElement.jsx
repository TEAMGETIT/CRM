import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';

function MailListElement({data: {from, subject, attachment, time, read, label}}) {
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <div className={"w-100 d-flex ai-c mail__list__elm "+ (read ? 'bg--mailRead read' : 'bg--white')}>
      <div className="w-5">
      <Checkbox
        value={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      </div>
      <div className="mail__Elm__from w-30">{from}</div>
      <div className="mail__Elm__subject w-50">{subject}</div>
      <div className="mail__Elm__attachment w-5"></div>
      <div className="mail__Elm__time w-10 t-al-r">{time}</div>
    </div>
  );
}

export default MailListElement;
