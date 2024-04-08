<template>
  <cp-layout :layout-type="layoutType">
    <chuka-poka-init-form
      v-if="signFormCurrentStep === SignFormStepType.PREV_EMAIL"
      @start="navigate(SignFormStepType.EMAIL)"
      @open:text-dialog="openTextDialog"
    />
    <chuka-poka-sign-form
      v-else-if="signFormCurrentStep !== SignFormStepType.LOGIN_SUCCESS"
      v-loading="isLoadingRequestEmailVerify"
      :layout-type="layoutType"
      :current-step="signFormCurrentStep"
      :is-loading-request-email-verify="isLoadingRequestEmailVerify"
      @send="handleSend"
      @navigate="navigate"
      @back="back"
    />
    <text-dialog
      v-if="visibleTextDialog && textDialogTarget"
      :visible="visibleTextDialog"
      :type="textDialogTarget"
      @close="closeTextDialog"
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
import TextDialog from "@/components/init/TextDialog.vue";
import { LayoutType } from "@/composables/use-window-size-wrap";
import {
  SignFormStepType,
  useJoinLoginProcess,
} from "@/composables/use-user-controller";
import { computed, ref } from "vue";

const props = defineProps<{
  layoutType: LayoutType;
  linkId?: string; // link 페이지에서 회원가입/로그인 화면으로 이동한 경우
}>();

const {
  signFormCurrentStep,
  handleSend,
  navigate,
  back,
  isLoadingRequestEmailVerify,
} = useJoinLoginProcess(computed(() => props.linkId));

const visibleTextDialog = ref<boolean>(false);
const textDialogTarget = ref<"tos" | "pp" | undefined>(undefined);
const openTextDialog = (type: "tos" | "pp") => {
  visibleTextDialog.value = true;
  textDialogTarget.value = type;
};
const closeTextDialog = () => {
  visibleTextDialog.value = false;
  textDialogTarget.value = undefined;
};
</script>
