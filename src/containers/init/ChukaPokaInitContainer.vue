<template>
  <cp-layout :layout-type="layoutType">
    <chuka-poka-init-form
      v-if="signFormCurrentStep === SignFormStepType.PREV_EMAIL"
      @start="navigate(SignFormStepType.EMAIL)"
    />
    <chuka-poka-sign-form
      v-else-if="signFormCurrentStep !== SignFormStepType.LOGIN_SUCCESS"
      :layout-type="layoutType"
      :current-step="signFormCurrentStep"
      @send="handleSend"
      @navigate="navigate"
      @back="back"
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
import CpLayout from "@/components/commons/CpLayout.vue";
import ChukaPokaInitForm from "@/components/init/ChukaPokaInitForm.vue";
import ChukaPokaSignForm from "@/components/init/ChukaPokaSignForm.vue";
import { LayoutType } from "@/composables/use-window-size-wrap";
import {
  SignFormStepType,
  useJoinLoginProcess,
} from "@/composables/use-user-controller";
import { computed } from "vue";

const props = defineProps<{
  layoutType: LayoutType;
  linkId?: string; // link 페이지에서 회원가입/로그인 화면으로 이동한 경우
}>();

const { signFormCurrentStep, handleSend, navigate, back } = useJoinLoginProcess(
  computed(() => props.linkId),
);
</script>
