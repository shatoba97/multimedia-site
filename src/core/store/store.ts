import UserReducer from './reducers/user-reducer/root-reducer'
import AnimalsReducer from './reducers/animals-reducer/root-reducer'
import { combineReducers, createStore } from 'redux';

export const reducers = combineReducers({ userReducer: UserReducer, animalsReducer: AnimalsReducer });

export const store = createStore(reducers);

export type StoreModel = ReturnType<typeof reducers>;
