import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export default <T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  return axios.request<T, AxiosResponse<T>>(config)
}