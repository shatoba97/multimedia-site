import { AxiosRequestConfig } from 'axios';
import httpRequest from '../../base/request';
import { baseUrl } from '../../const/url-pass';
import { AuthModel } from '../../model/auth.model';
import { store } from '../../store/store';
import actions from '../../store/actions/user-actions/user';

const loginPost = (data: any): Promise<void> => {
  const req: AxiosRequestConfig = {
    method: 'POST',
    data,
    url: `${baseUrl}/token/`,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return httpRequest<AuthModel>(req).then(res => {
    localStorage.setItem('access', res.data.access);
    store.dispatch(actions.setUser({
      refreshToken: res.data.refresh,
      token: res.data.access,
    }));
    return;
  });
};

export default loginPost;