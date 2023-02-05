import axios from 'axios';
// eslint-disable-next-line import/no-unresolved
import { API_URL } from 'src/constants/Constants';

const instance = axios.create({
  baseURL: API_URL,
});

export default instance;
