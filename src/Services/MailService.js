import Axios from 'axios';
import { getApiData } from '../Common/Api';

export const getMailListService = (folderName) => {
  const { apiUrl, authorizationHeader } = getApiData(
    'GET_MAIL_LIST',
    folderName
  );
  return Axios({
    method: 'get',
    url: apiUrl,
    headers: authorizationHeader,
    responseType: 'json',
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getMailDetailService = (mailId, folderName) => {
  const { apiUrl, authorizationHeader } = getApiData(
    'GET_MAIL_DETAILS',
    mailId,
    folderName
  );
  return Axios({
    method: 'get',
    url: apiUrl,
    headers: authorizationHeader,
    responseType: 'json',
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getMailFolderService = () => {
  const { apiUrl, authorizationHeader } = getApiData(
    'GET_MAIL_FOLDERS'
  );
  return Axios({
    method: 'get',
    url: apiUrl,
    headers: authorizationHeader,
    responseType: 'json',
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const sendMailService = (formData) => {
  const { apiUrl, authorizationHeader } = getApiData('SEND_MAIL');
  authorizationHeader['Content-Type'] = 'multipart/form-data';
  return Axios({
    method: 'post',
    url: apiUrl,
    data: formData,
    headers: authorizationHeader,
    responseType: 'json',
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};
