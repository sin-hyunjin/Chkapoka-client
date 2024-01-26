import { useAxios } from "@/plugins/axios";
import { AxiosError, AxiosResponse } from "axios";
import { UseMutationOptions, useMutation } from "vue-query";

export const EmailType = {
  DEFAULT: "DEFAULT",
  GOOGLE: "GOOGLE",
  KAKAO: "KAKAO",
};

export type NextActionType = "LOGIN" | "JOIN";

type ResultCode = "SUCCESS" | "ERROR";

type EmailCheckSuccessResponse = {
  resultCode: ResultCode;
  data: {
    nextAction: NextActionType;
    email: string;
  };
  message?: string;
};

type Error = {
  resultCode: ResultCode;
  data: Record<string, string>;
  message?: string;
};

export const useEmailCheck = (
  options?: UseMutationOptions<
    AxiosResponse<EmailCheckSuccessResponse>,
    AxiosError<Error>,
    { email: string; emailType: string },
    unknown
  >,
) => {
  const api = useAxios();
  const { mutate } = useMutation(
    ["email-check"],
    (payload: { email: string; emailType: string }) => {
      return api.post("/api/user/emailcheck", {
        email: payload.email,
        emailType: payload.emailType,
      });
    },
    options,
  );

  return {
    mutate,
  };
};
