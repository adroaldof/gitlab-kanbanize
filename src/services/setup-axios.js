/* eslint no-param-reassign: 0 */
import axios from 'axios';

import config from '../../config';

export default function setupAxios () {
  axios.interceptors.request.use(async (axiosConfig) => {
    axiosConfig.headers.apikey = config.env.kanbanizeApiKey;
    axiosConfig.headers.post['Content-Type'] = 'application/json';
    axiosConfig.url = `${config.env.kanbanizeUrl}${axiosConfig.url}`;

    return axiosConfig;
  });
}
