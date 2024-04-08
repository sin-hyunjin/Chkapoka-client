import { BaseErrorResponse, BaseResultResponse, ResultCode, useAxios } from "@/plugins/axios";
import { computed } from "vue";
import { UseMutationOptions, useMutation } from "vue-query";


/** api/user/reissue START */
export type TokenResponse = {
  accessToken: string;
};

export const useReissue = (
  options?: UseMutationOptions<
    BaseResultResponse<{ accessToken: string; }>,
    BaseErrorResponse,
    void,
    unknown
  >,
) => {
  const api = useAxios();
  const { mutate, data } = useMutation(
    ["reissue"],
    () => {
      return api.post("/api/user/reissue");
    },
    options,
  );

  return {
    mutate,
    data,
  };
};
/** api/user/reissue END */

/** api/user/emailCheck START */
export const EmailType = {
  DEFAULT: "DEFAULT",
  GOOGLE: "GOOGLE",
  KAKAO: "KAKAO",
} as const;
export type EmailTypes = keyof typeof EmailType;
export const AllEmailTypes: EmailTypes[] = Object.values(EmailType);

export const NextActionType = {
  LOGIN: "LOGIN",
  JOIN: "JOIN",
} as const;
export type NextActionTypes = keyof typeof NextActionType;
export const AllNextActionTypes: NextActionTypes[] =
  Object.values(NextActionType);

export type EmailCheckRequest = {
  email: string;
  emailType: string;
};


export const useEmailCheck = (
  options?: UseMutationOptions<
    BaseResultResponse<{
      nextAction: NextActionTypes;
      email: string;
    }>,
    BaseErrorResponse,
    EmailCheckRequest,
    unknown
  >,
) => {
  const api = useAxios();
  const { mutate } = useMutation(
    ["email-check"],
    (payload: EmailCheckRequest) => {
      return api.post("/api/user/emailCheck", {
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

/** api/user/emailCheck START */

/** api/user/authNumber START */
export type AuthNumberRequest = {
  email: string;
};

export const useAuthNumber = (
  options?: UseMutationOptions<
    BaseResultResponse<{
      resultCode: ResultCode;
      email: string;
      authNum: string;
      createdAt: string;
      expireAt: string;
    }>,
    BaseErrorResponse,
    AuthNumberRequest,
    unknown
  >,
) => {
  const api = useAxios();
  const { mutate, data, isLoading } = useMutation(
    ["auth-number"],
    (payload: AuthNumberRequest) => {
      return api.get("/api/user/authNumber", {
        params: payload,
      });
    },
    options,
  );

  const authNumber = computed<string | undefined>(
    () => data.value?.data.data.authNum,
  );

  return {
    mutate,
    authNumber,
    isLoading,
  };
};
/** api/user/authNumber END */

/** api/user/emailCheck START */

/** /api/user START */
export type JoinLoginRequest = {
  email: string;
  emailType: EmailTypes;
  password: string;
  actionType: NextActionTypes;
};

export const useJoinLogin = (
  options?: UseMutationOptions<
    BaseResultResponse<{
      resultType: ResultCode;
      email: string;
      userId: number;
      token: TokenResponse;
    }>,
    BaseErrorResponse,
    JoinLoginRequest,
    unknown
  >,
) => {
  const api = useAxios();
  const { mutate } = useMutation(
    ["join-login"],
    (payload: JoinLoginRequest) => {
      return api.post("/api/user", payload);
    },
    options,
  );

  return {
    mutate,
  };
};
/** /api/user END */

/** /api/user/logout START */
export type LogoutSuccessResponse = {
  resultCode: ResultCode;
  data: ResultCode;
  message?: string;
};

export const useLogout = (
  options?: UseMutationOptions<
    BaseResultResponse<ResultCode>,
    BaseErrorResponse,
    void,
    unknown
  >,
) => {
  const api = useAxios();
  const { mutate } = useMutation(
    ["logout"],
    () => {
      return api.post("/api/user/logout");
    },
    options,
  );

  return {
    mutate,
  };
};
/** /api/user/logout END*/
