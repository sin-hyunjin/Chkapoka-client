<template>
  <cp-layout :layout-type="layoutType">
    <chuka-poka-init-form
      v-if="signFormCurrentStep === SignFormStep.PREV_EMAIL"
      @start="navigate(SignFormStep.EMAIL)"
    />
    <chuka-poka-sign-form
      v-else-if="signFormCurrentStep !== SignFormStep.LOGIN_SUCCESS"
      :layout-type="layoutType"
      :current-step="signFormCurrentStep"
      @send="handleSend"
      @navigate="navigate"
      @back="back"
    />
    <template v-else-if="signFormCurrentStep === SignFormStep.LOGIN_SUCCESS">
      Login Success
      {{ formData.email }} / {{ formData.password }} /
      {{ formData.verifyNumber }}
    </template>
  </cp-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChukaPokaInitContainer",
});
</script>

<script setup lang="ts">
import { ref } from "vue";
import CpLayout from "@/components/commons/CpLayout.vue";
import ChukaPokaInitForm from "@/components/init/ChukaPokaInitForm.vue";
import ChukaPokaSignForm from "@/components/init/ChukaPokaSignForm.vue";
import { LayoutType } from "@/composables/use-window-size-wrap";
import { SignFormStep } from "@/utils/const";
import type { SignFormData } from "@/utils/const";
import invariant from "tiny-invariant";

defineProps<{
  layoutType: LayoutType;
}>();

const TEMP_REGISTERED_USER_INFO = {
  email: "example@example.com",
  password: "pass1234",
  verifyNumber: 123456,
};

const signFormCurrentStep = ref<SignFormStep>(SignFormStep.PREV_EMAIL);
const formData = ref<SignFormData>({
  email: "",
  password: "",
  verifyNumber: -1,
});

const handleSend = (currentType: SignFormStep, value?: string | number) => {
  switch (currentType) {
    case SignFormStep.EMAIL: {
      invariant(typeof value === "string");
      formData.value.email = value;
      break;
    }
    case SignFormStep.CHECK_EMAIL_NUMBER: {
      console.log(value, typeof value);
      invariant(typeof value === "number");
      formData.value.verifyNumber = value;
      break;
    }
    case SignFormStep.PASSWORD: {
      invariant(typeof value === "string");
      formData.value.password = value;
      break;
    }
  }
  apiProcess(currentType);
};

const apiProcess = (currentType: SignFormStep) => {
  switch (currentType) {
    case SignFormStep.EMAIL: {
      // check email
      // 추후 api 연동 필요
      console.log("존재하는 이메일인지 api로 확인...");

      // 등록된 이메일일 경우
      if (TEMP_REGISTERED_USER_INFO.email === formData.value.email) {
        // 비밀번호 입력 폼 이동
        navigate(SignFormStep.PASSWORD);
      } else {
        // 이메일 인증번호 요청 폼 이동
        navigate(SignFormStep.REQUEST_EMAIL_VERIFY);
      }
      break;
    }
    case SignFormStep.REQUEST_EMAIL_VERIFY: {
      // api로 현재 입력받은 이메일로 verify number 전송
      requestEmailVerify();
      // 이메일 인증번호 입력 폼으로 이동
      navigate(SignFormStep.CHECK_EMAIL_NUMBER);
      break;
    }
    case SignFormStep.CHECK_EMAIL_NUMBER: {
      if (
        TEMP_REGISTERED_USER_INFO.verifyNumber === formData.value.verifyNumber
      ) {
        // 유효한 인증번호 입력시

        // 이메일 인증번호 입력 폼으로 이동
        navigate(SignFormStep.PASSWORD);
      } else {
        // 유효히지 인증번호 입력시
        notify("verify-fail");
      }
      break;
    }
    case SignFormStep.PASSWORD: {
      // login
      // 추후 api 연동 필요
      console.log("로그인 처리...");
      // 로그인 성공시
      if (TEMP_REGISTERED_USER_INFO.password === formData.value.password) {
        navigate(SignFormStep.LOGIN_SUCCESS);
      }
      // 로그인 실패시
      else {
        notify("login-fail");
      }
      break;
    }
  }
};

const requestEmailVerify = () => {
  console.log(`${formData.value.email}으로 이메일 인증번호 전송 요청...`);
};
const navigate = (target: SignFormStep) => {
  signFormCurrentStep.value = target;
};

const back = () => {
  // 뒤로가기 버튼 클릭시

  switch (signFormCurrentStep.value) {
    case SignFormStep.EMAIL:
    case SignFormStep.REQUEST_EMAIL_VERIFY:
    case SignFormStep.CHECK_EMAIL_NUMBER: {
      // enum 클래스에 정의된 상수 확인
      navigate(signFormCurrentStep.value - 1);
      break;
    }
    case SignFormStep.PASSWORD: {
      // 등록된 아이디의 비밀번호 입력인 경우 : 아이디 입력폼으로
      if (formData.value.email === TEMP_REGISTERED_USER_INFO.email) {
        navigate(SignFormStep.EMAIL);
      }
      // 등록되지 않은 아이디의 비밀번호 입력인 경우 : 이메일 인증번호 입력폼 ?? TODO: 돌아가지 않는게 맞는데...
      else {
        navigate(SignFormStep.CHECK_EMAIL_NUMBER);
      }
    }
  }
};

const notify = (text: string) => {
  // TODO: 알림 처리
  console.log(text);
};
</script>
