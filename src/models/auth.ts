import {AuthStateModel} from './authState';

export type AuthContextState = {
  authState: AuthStateModel;
  logOut: () => void;
  deleteUser: () => void;
  // deleteUse
  loginWithGoogle: () => void;
  login: (username: string, password: string) => void;
  updateHasProfile: () => void;
  updateIsVerified: () => void;
};
