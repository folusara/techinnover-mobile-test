export type AuthStateModel = {
  refreshToken?: string | null;
  phone_number: string | null;
  user_id: number | null;
  token: string | null;
  email: string | null;
  first_name: string | null;
  last_name: string | null;
  isAuthenticated: boolean;
};
