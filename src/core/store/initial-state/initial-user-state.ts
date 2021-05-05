import { UserIO } from '../model/user.model';

const initialUserState: UserIO = {
  login: '',
  password: '',
  refreshToken: '',
  token: '',
};

export default initialUserState;