import { AxiosRequestConfig } from 'axios'
import { baseUrl } from '../../const/url-pass'
import { BaseRequestModel } from '../../model/base-request.model';
import httpRequest from '../../base/request';
import { store } from '../../store/store';
import actions from '../../store/actions/toDayAnimals/animals';
import { AnimalsModel } from '../../model/animal.model';
import { ToDayAnimalsModel } from '../../model/to-day-animals.model';


export class AnimalService {
  function getAllAnimals(): Promise<AnimalsModel[]> {
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
    return httpRequest<BaseRequestModel<AnimalsModel[]>>(req).then(res => {
      console.log(res.data.results);
      store.dispatch(actions.setAllAnimals(res.data.results));
      return res.data.results;
    });
  }
  
  function getToDayAnimals(): Promise<ToDayAnimalsModel[]> {
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
    return httpRequest<BaseRequestModel<ToDayAnimalsModel[]>>(req).then(res => {
      console.log(res.data.results);
      store.dispatch(actions.setToDayAnimals(res.data.results));
      return res.data.results;
    });
  }
  
  @RefreshToken
  function getAnimalById(id: number): Promise<AnimalsModel> {
    const req: AxiosRequestConfig = {
      method: 'GET',
      url: `${baseUrl}/v1/animals/${id}/`,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        'current-shelter': 1,
        'Authorization': `Bearer ${localStorage.getItem('access')}`,
      }
    };
    return httpRequest<AnimalsModel>(req).then(res => {
      console.log(res.data);
      return res.data;
    });
  }
}


export {getAllAnimals, getToDayAnimals, getAnimalById}
