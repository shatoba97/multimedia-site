import { store } from "../store/store";
import actions from '../store/actions/user-actions/user';


export function RefreshToken<T>(fn: (...[]) => Promise<T>): Promise<T> {
  return fn().catch((e: any) => {
    if (e?.response.status === 401) {
      localStorage.setItem('access', '')
      store.dispatch(actions.setUser({...store.getState().userReducer, token: ''}))
    }
    throw e;
  });
}