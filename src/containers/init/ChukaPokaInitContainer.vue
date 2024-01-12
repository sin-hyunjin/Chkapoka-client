<template>
  <cp-layout :layout-type="layoutType">
    <chuka-poka-init-form v-if="step === 0" @start="handleStep(1)" />
    <chuka-poka-sign-form
      v-if="step === 1"
      :layout-type="layoutType"
      :current-step="signFormCurrentStep"
      @send="handleSend"
    />
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
import { SignFormCurrentStep } from "@/utils/const";
import type { SignFormData } from "@/utils/const";
defineProps<{
  layoutType: LayoutType;
}>();

const step = ref(0);

const signFormCurrentStep = ref<SignFormCurrentStep>(SignFormCurrentStep.EMAIL);
const signFormData = ref<SignFormData>({
  email: "",
  password: "",
});

const handleStep = (value: number) => {
  step.value = value;
  signFormCurrentStep.value = SignFormCurrentStep.EMAIL;
};

const handleSend = (type: SignFormCurrentStep, value: string) => {
  console.log(type, value);
  switch (type) {
    case SignFormCurrentStep.EMAIL: {
      signFormData.value.email = value;
      checkEmail();
      break;
    }
    case SignFormCurrentStep.PASSWORD: {
      signFormData.value.password = value;
      login();
      break;
    }
  }
};

const checkEmail = () => {
  // 추후 api 연동 필요
  console.log("존재하는 이메일인지 api로 확인...");

  // 비밀번호 폼 디자인을 위해 임시조치
  signFormCurrentStep.value = SignFormCurrentStep.PASSWORD;
};

const login = () => {
  // 추후 api 연동 필요
  console.log("login 여부 확인....");
  // 이메일 인증 디자인을 위해 임시조치
  signFormCurrentStep.value = SignFormCurrentStep.EMAIL_VERIFY;
};
</script>
