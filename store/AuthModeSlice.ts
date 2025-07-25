import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthStateModel} from '../models/authState';
import {RootState} from './store';

const initialState: AuthStateModel = {
  user_id: null,
  token: null,
  email: null,
  first_name: null,
  last_name: null,
  isAuthenticated: false,
  phone_number: null,
};

export const colorModeSlice = createSlice({
  name: 'AuthMode',
  initialState: initialState,
  reducers: {
    reduxLogin: (state, action: PayloadAction<AuthStateModel>) => {
      return {...action.payload};
    },
    reduxLogOut: () => {
      return initialState;
    },
  },
});

export const {reduxLogin, reduxLogOut} = colorModeSlice.actions;

export const getAuthModeState = (state: RootState) => state.authMode;

export default colorModeSlice.reducer;
