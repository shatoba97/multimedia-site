import UserReducer from './reducers/user-reducer/root-reducer'
import AnimalsReducer from './reducers/animals-reducer/root-reducer'
import { combineReducers, createStore } from 'redux';

export const reducers = combineReducers({UserReducer, AnimalsReducer});

export const store  = createStore(reducers);
