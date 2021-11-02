import { HttpConfig } from './http.constant';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3400/',
  timeout: HttpConfig.RequestTimeout,
});
