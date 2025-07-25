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

export interface TransactionModel {
  id: string;
  title: string;
  description: string;
  amount: string;
  status: 'pending' | 'completed' | 'failed';
  date: string;
}

// Notification type
export interface NotificationModel {
  id: string;
  title: string;
  description: string;
  is_read: boolean;
  type: 'transaction' | 'security' | 'billing' | 'onboarding';
  date: string;
}
