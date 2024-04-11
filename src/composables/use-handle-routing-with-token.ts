import { useRouter } from "vue-router";
import { useAccessTokenStore } from "@/store";

export const useHandleRoutingWithToken = () => {
  const router = useRouter();
  const { getAccessToken } = useAccessTokenStore();

  /** 라우팅처리가 진행되기 전 상태확인 */
  router.beforeEach((to, _from, next) => {
    /** 액세스 토큰이 존재하지 않으면 항상 로그인 & 회원가입 화면으로 이동 */
    // access token not exist -> go to Login & Join Page
    /** 링크페이지로 접근시 액세스 토큰이 존재하지 않으면, 로그인 & 회원가입으로 유도 */
    if (!getAccessToken() && to.path !== "/" && !to.path.includes("/link/") && !to.path.includes("/send/")) {
      return next({ path: "/" });
    } else {
      return next();
    }
  });

  return {
    getAccessToken,
  }
};
