import axios, { AxiosRequestConfig } from 'axios';
import httpRequest from '../../base/request';
import { baseUrl } from '../../const/url-pass';
import { AuthModel } from '../../model/auth.model';
import { store } from '../../store/store';
import actions from '../../store/actions/user-actions/user';

const loginPost = async (url: string, data: any) => {
  const body = Object.keys(data)? {...data}: undefined;
  const req: AxiosRequestConfig = {
    method: 'POST',
    data: body,
    url: `${baseUrl}/${url}/`,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  httpRequest<AuthModel>(req).then(res => {
    console.log(res.data.access);
    localStorage.setItem('token', res.data.access);
    store.dispatch(actions.setUser({
      refreshToken: res.data.refresh,
      token: res.data.access,
    }))
  });
};

export default loginPost;