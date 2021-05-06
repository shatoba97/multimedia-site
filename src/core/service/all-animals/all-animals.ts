import { AxiosRequestConfig } from 'axios'
import { baseUrl } from '../../const/url-pass'
import { BaseRequestModel } from '../../model/base-request.model';
import httpRequest from '../../base/request';
import { store } from '../../store/store';
import actions from '../../store/actions/toDayAnimals/animals';
import { AnimalsModel } from '../../model/animal.model';



const getAllAnimals = (): Promise<AnimalsModel[]> => {
  const req: AxiosRequestConfig = {
    method: 'GET',
    url: `${baseUrl}/v1/animals/`,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
      'current-shelter': 1,
      'Authorization': `Bearer ${localStorage.getItem('access')}`,
    }
  };
  return httpRequest<BaseRequestModel<AnimalsModel>>(req).then(res => {
    console.log(res.data.results);
    store.dispatch(actions.setAllAnimals(res.data.results));
    return res.data.results;
  });
}

export {getAllAnimals}
