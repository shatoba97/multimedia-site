import { ActionIO } from '../../model/action.model';
import { UserIO } from '../../model/user.model';
import { SET_USER } from './user.action';

const setUser = (user: UserIO): ActionIO => ({
  type: SET_USER,
  value: user,
});

const removeUser = (): ActionIO => ({
  type: SET_USER,
  value: null,
});

export default {setUser, removeUser};