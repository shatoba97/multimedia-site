import { RequestParams } from '../model/request-params.model'

export const httpRequest = (params: RequestParams) => {
  return fetch(params.url, {
    
  })
}