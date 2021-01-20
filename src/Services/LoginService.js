import Axios from 'axios';
import { getApiData } from '../Common/Api';

export const loginService = (data) => {
  const { apiUrl } = getApiData('LOGIN');
  return Axios({
    method: 'post',
    url: apiUrl,
    data,
    responseType: 'json',
  })
    .then((response) => {
        return (response)
    })
    .catch((error) => {
      console.log(error);
    });
};

