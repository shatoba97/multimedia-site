import { AxiosRequestConfig } from 'axios'
import { baseUrl } from '../../const/url-pass'
import { BaseRequestModel } from '../../model/base-request.model';
import { ToDayAnimalsModel } from '../../model/to-day-animals.model';
import httpRequest from '../../base/request';
import { store } from '../../store/store';
import actions from '../../store/actions/toDayAnimals/animals';



const getToDayAnimals = (): Promise<ToDayAnimalsModel[]> => {
  const req: AxiosRequestConfig = {
    method: 'GET',
    url: `${baseUrl}/v1/prescriptions/today/`,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
      'current-shelter': 1,
      'Authorization': `Bearer ${localStorage.getItem('access')}`,
    }
  };
  return httpRequest<BaseRequestModel<ToDayAnimalsModel>>(req).then(res => {
    console.log(res.data.results);
    store.dispatch(actions.setToDayAnimals(res.data.results));
    return res.data.results;
  });
}

export {getToDayAnimals}
