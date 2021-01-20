import React, { useEffect, useState } from 'react';
import ListItem from '../../ListItem';
import Label from '../../Label';
import { getMailFolderService } from '../../../Services/MailService';
import Loader from '../../Loader';

const mailFoldersDict = {
  inbox: {
    folderDisplayname: 'Inbox',
    iconName: 'inbox',
    id: 'inbox',
    color: 'bg--orange',
  },
  sent: { folderDisplayname: 'Sent', id: 'sent', iconName: 'mail-sent' },
  important: {
    folderDisplayname: 'Important',
    id: 'important',
    iconName: 'mail-important',
  },
  draft: {
    folderDisplayname: 'Draft',
    iconName: 'draft',
    id: 'draft',
    color: 'bg--red',
  },
  trash: { folderDisplayname: 'Trash', id: 'trash', iconName: 'trash' },
};

function MailBoxFolders({ selectedFolder, unreadCount, changeFolder }) {
  const [folderList, setFolderList] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    console.log('test12');
    getMailFoldersData();
  }, []);

  useEffect(() => {
    const folderListCpy = [...folderList];
    folderListCpy.forEach((folder) => {
      if (selectedFolder === folder.id) {
        console.log(selectedFolder, folder.id);
        folder.totalUnread -= 1;
      }
    });
    console.log(folderListCpy);
    setFolderList(folderListCpy);
  }, [unreadCount]);

  const getMailFoldersData = async () => {
    setLoader(true)
    const serviceResponse = await getMailFolderService();
    if (serviceResponse && serviceResponse.status === 200) {
      const mailFolderDatas = serviceResponse.data.mail_folders;
      const folderListCpy = [];
      mailFolderDatas.forEach((data) => {
        const folderData = mailFoldersDict[data.folder_name];
        if (folderData && data.unread_count) {
          folderData['totalUnread'] = data.unread_count;
        }
        folderListCpy.push(folderData);
      });
      setFolderList(folderListCpy);
    }
    setLoader(false)

  };

  return (
    <div className="w-100">
      <Loader status={loader}/>
      <h4 className="m-v-5 mailbox__controlpanel__header">FOLDERS</h4>
      {folderList.map((folder) => (
        <div className="d-flex ai-c m-v-4 folder__item jc-sb">
          <ListItem
            itemName={folder.folderDisplayname}
            itemIconName={folder.iconName}
            iconColor="mail__folder__icon--color"
            onItemClick={() => changeFolder(folder.id)}
          />
          {folder.totalUnread && folder.totalUnread !== 0 && (
            <Label content={folder.totalUnread} bgColorClass={folder.color} />
          )}
        </div>
      ))}
    </div>
  );
}

export default MailBoxFolders;
