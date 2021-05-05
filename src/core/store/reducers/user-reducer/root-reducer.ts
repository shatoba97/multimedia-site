import { Reducer } from 'react';
import { REMOVE_USER, SET_USER } from '../../actions/user-actions/user.action';
import initialUserState from '../../initial-state/initial-user-state';
import { ActionIO } from '../../model/action.model';
import { UserIO } from '../../model/user.model';

const UserReducer: Reducer<UserIO, ActionIO> = (state: any, action: ActionIO): UserIO => {
  switch (action.type) {
    case SET_USER: return {...state, ...action.value};
    case REMOVE_USER: return initialUserState;
    default: return initialUserState;
  }
};

export default UserReducer;