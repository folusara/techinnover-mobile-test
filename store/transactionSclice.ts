import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TransactionModel} from '../navigation/types';
import {RootState} from './store';

const initialState: TransactionModel[] = [];

export const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<TransactionModel>) => {
      state.push(action.payload);
    },
    reduxResetTransaction: () => {
      return initialState;
    },
  },
});

export const {addTransaction, reduxResetTransaction} = transactionSlice.actions;
export const getAllTransactions = (state: RootState) => state.transactions;
export default transactionSlice.reducer;
