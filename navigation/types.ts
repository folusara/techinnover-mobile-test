import { TransactionModel } from './types';
export type AuthStackParamList = {
  AppIntro: undefined;
  Login: undefined;
  Signup: undefined;
  FirstLogin: undefined;
  ForgotPassword: undefined;
  PasswordSetup: undefined;
  ResetPassword: undefined;
  VerifyPhoneOTP: undefined;
  SuccessScreen: undefined;
  RegistrationCodeScreen: undefined;
  AddBVN: undefined;
};

export type TransactionModel = {
  description: string;
  amount: number;
  category: string;
  date: string;
  icon: React.ReactNode;
};
