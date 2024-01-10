export const enum SignFormCurrentStep {
  EMAIL = "EMAIL",
  EMAIL_VERIFY = "EMAIL_VERIFY",
  PASSWORD = "PASSWORD",
}

export type SignFormData = {
  email: string;
  password: string;
};
