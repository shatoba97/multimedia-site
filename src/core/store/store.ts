import { createStore, combineReducers } from 'redux';
import { UserIO } from './model/user.model';
import UserReducer from './reducers/user-reducer/root-reducer'

export const store  = createStore(combineReducers({UserReducer}));
