const endpoint = 'http://127.0.0.1:8000/api';
const urls = {
  LOGIN: () => '/login',
  SIGN_OUT: () => '/logout',
  GET_MAIL_LIST: (folderName) => `/${folderName}/get_mails`,
  SEND_MAIL: () => '/send_mail',
  GET_MAIL_DETAILS: (mailId, folderName) => `/mail_id/${mailId}/folder_name/${folderName}/mail_details`,
  GET_MAIL_FOLDERS: () => '/mail_folder_data'
};

export function getApiData(name, ...data) {
  const url = urls[name](...data);
  const apiUrl = endpoint + url;
  const authenticationToken = localStorage.getItem('authenticationToken');
  const authorizationHeader = {
    Authorization: `Token ${authenticationToken}`,
  };
  return { apiUrl, authorizationHeader };
}
