export const enum SignFormStep {
  PREV_EMAIL = 0,
  EMAIL = 1,
  REQUEST_EMAIL_VERIFY = 2,
  CHECK_EMAIL_NUMBER = 3,
  PASSWORD = 4,
  LOGIN_SUCCESS = 5,
}

export type SignFormData = {
  email: string;
  password: string;
  verifyNumber: number;
};
