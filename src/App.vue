<template>
  <div class="wrap">
    <router-view :layout-type="layoutType"></router-view>
  </div>
</template>

<script setup lang="ts">
import { useWindowSizeWrap } from "@/composables/use-window-size-wrap";
import { useHandleRoutingWithToken } from "@/composables/use-handle-routing-with-token";
import { onMounted } from "vue";
import { useReissue } from "@/composables/use-user-api";
import { useAccessTokenStore } from "@/store";
import { useRoute, useRouter } from "vue-router";

const { layoutType } = useWindowSizeWrap();
useHandleRoutingWithToken();

/** 이미 브라우저의 localstorage에 access token이 존재하면,
 * 자동로그인이므로, reissue를 요청하고, 성공시 메인 페이지로 이동
 */
onMounted(() => {
  const route = useRoute();
  const router = useRouter();
  const { setAccessToken, getAccessToken, clearAccessToken } =
    useAccessTokenStore();
  const { mutate: reissue } = useReissue({
    onSuccess: (data) => {
      setAccessToken(data.data.data.accessToken);
      if (route.path === "/") {
        router.push({ name: "ChukaPokaMain" });
      }
    },
    onError: (error) => {
      /** useReissue는 localstorage에 access token 값이 존재할 때만 진행되는데  */
      console.error(error);
      if (getAccessToken()) {
        clearAccessToken();
      }
    },
  });

  /** localstorage에 access token 값이 존재할 때만 reissue 호출 */
  if (getAccessToken()) {
    reissue();
  }
  setInterval(
    () => {
      if (getAccessToken()) {
        reissue();
      }
    },
    4.5 * 60 * 1000,
  ); // 4분 30초마다 access token refresh
});
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100vh;
  padding: var(--cp-number-16);
}
</style>
