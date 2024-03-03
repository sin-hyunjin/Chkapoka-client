import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { computed, ref } from "vue";
const accessToken = useStorage<{ token: string | undefined }>(
  "access_token",
  {
    token: undefined,
  },
  localStorage,
);

export const useAccessTokenStore = defineStore("access_token", () => {
  const innerAccessToken = computed<string | undefined>(
    () => accessToken.value.token,
  );

  const isLogin = ref<boolean>(innerAccessToken.value !== undefined);

  const setAccessToken = (newToken: string) => {
    accessToken.value.token = newToken;
    if (!isLogin.value) isLogin.value = true;
  };

  const getAccessToken = (): string | undefined => {
    return innerAccessToken.value;
  };
  const clearAccessToken = () => {
    accessToken.value.token = undefined;
    isLogin.value = false;
  };

  return {
    accessToken: innerAccessToken,
    isLogin,
    setAccessToken,
    clearAccessToken,
    getAccessToken,
  };
});
