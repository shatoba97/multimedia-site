import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { RefreshToken } from './refresh-token';

export default <T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  return RefreshToken<AxiosResponse<T>>(() => axios.request<T, AxiosResponse<T>>(config));
}