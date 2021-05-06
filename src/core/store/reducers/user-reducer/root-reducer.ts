import { Reducer } from 'react';
import { REMOVE_USER, SET_USER } from '../../actions/user-actions/user.action';
import initialUserState from '../../initial-state/initial-user-state';
import { ActionIO } from '../../model/action.model';
import { UserIO } from '../../model/user.model';

const UserReducer: Reducer<UserIO, ActionIO> = (user: UserIO, action: ActionIO): UserIO => {
  switch (action.type) {
    case SET_USER: return {...user, ...action.value};
    case REMOVE_USER: return initialUserState;
    default: return initialUserState;
  }
};

export default UserReducer;