import React from 'react';
import ListItem from '../../ListItem';

function MailBoxFolders() {
  const folderList = [
    { folderDisplayname: 'Inbox', iconName: 'inbox' },
    { folderDisplayname: 'Sent', iconName: 'mail-sent' },
    { folderDisplayname: 'Important', iconName: 'mail-important' },
    { folderDisplayname: 'Draft', iconName: 'draft' },
    { folderDisplayname: 'Trash', iconName: 'trash' },
  ];
  return (
    <div className="w-100">
      <h4 className="m-v-5 mailbox__controlpanel__header">FOLDERS</h4>
      {folderList.map((folder) => (
        <div className="d-flex ai-c m-v-4 folder__item">
          <ListItem
            itemName={folder.folderDisplayname}
            itemIconName={folder.iconName}
            iconColor="mail__folder__icon--color"
          />
        </div>
      ))}
    </div>
  );
}

export default MailBoxFolders;
