import axios from "axios";
import { useAccessTokenStore } from "@/store";
const TOKEN_REISSUE_URL = "/api/user/reissue";

export const useAxios = () => {
  const axiosConfig: { baseURL: string; timeout: number } = {
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 30000, // 30s
  };
  const api = axios.create(axiosConfig);
  const { getAccessToken } = useAccessTokenStore();
  api.interceptors.request.use(
    (config) => {
      if (!config.headers) return config;
      const token = getAccessToken();
      if (token !== undefined) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  api.interceptors.response.use(
    (config) => {
      if (!config.headers) return config;
      return config;
    },
    (error) => {
      /** reissue url의 response가 아니면서 403 forbidden인 경우,
       * reissue 요청을 보내야함 reissue에서까지 403 등 에러라면, 로그인해야함 */
      if (
        error.response.path !== TOKEN_REISSUE_URL &&
        error.response.status === 403
      ) {
        console.log("need to call reissue");
      }
      return Promise.reject(error);
    },
  );

  return api;
};
