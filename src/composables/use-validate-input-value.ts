import { Ref, computed, unref } from "vue";

export const pattern = {
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  password: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/, // 영문 숫자 조합 8자리 이상
};

export const useValidateInputValue = (value: {
  email?: Ref<string> | string;
  password?: Ref<string> | string;
  verifyNumber?: Ref<number> | number;
}) => {
  const isValidEmailValue = computed<boolean>(() => {
    const v = unref(value.email);
    if (v !== undefined) {
      return (
        v.length === 0 || // input data가 비어있다면
        !v.match(pattern.email) // input data가 email형식이 아니라면
      );
    } else {
      return false;
    }
  });
  const isValidPasswordValue = computed<boolean>(() => {
    const v = unref(value.password);
    if (v !== undefined) {
      return (
        v.length === 0 || // input data가 비어있다면
        !v.match(pattern.password) // input data가 email형식이 아니라면
      );
    } else {
      return false;
    }
  });
  const isValidVerifyNumberValue = computed<boolean>(() => {
    const v = unref(value.verifyNumber);
    if (v !== undefined) {
      // 인증번호가 6자리가 아니라면
      return `${v}`.length !== 6;
    } else {
      return false;
    }
  });
  return {
    isValidEmailValue,
    isValidPasswordValue,
    isValidVerifyNumberValue,
  };
};
