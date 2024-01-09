<template>
  <div :class="['sign-container', layoutTypeClass]">
    <div class="top-text">
      <div class="top-text__title cp-text-lg-p">안녕하세요</div>
      <div class="top-text__title cp-text-lg-p">이메일을 알려주세요</div>
      <div class="top-text__description cp-text-sm-p">
        편지를 쓰기 위해 회원가입이 필요해요!
      </div>
    </div>
    <div class="input-form">
      <cp-input
        v-model="emailValue"
        type="email"
        placeholder="example@example.com"
      />
    </div>
    <div class="button">
      <cp-button type="solid" :disabled="isValidEmailValue" @click="sendEmail"
        >시작하기</cp-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChukaPokaSignForm",
});
</script>
<script setup lang="ts">
import { ref, defineProps, computed } from "vue";
import CpInput from "@/components/commons/CpInput.vue";
import CpButton from "@/components/commons/CpButton.vue";
import { LayoutType } from "@/composables/use-window-size-wrap";
import { useValidateInputValue } from "@/composables/use-validate-input-value";

const emailValue = ref<string>("");

const props = defineProps<{
  layoutType: LayoutType;
}>();

const emits = defineEmits<{
  (e: "send", type: "email", value: string): void;
}>();

const layoutTypeClass = computed<string | undefined>(() => {
  if (props.layoutType === LayoutType.Web) {
    return "web";
  } else if (props.layoutType === LayoutType.Tablet) {
    return "tablet";
  } else if (props.layoutType === LayoutType.Mobile) {
    return "mobile";
  } else {
    return undefined;
  }
});

const { isValidEmailValue } = useValidateInputValue({
  email: emailValue,
});

const sendEmail = () => {
  emits("send", "email", emailValue.value);
};
</script>

<style scoped lang="scss">
.sign-container {
  min-width: 480px;
  height: 100%;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  .top-text {
    margin-top: 100px;
    &__title {
      color: var(--cp-color-text-black);
    }

    &__description {
      margin-top: 6px;
      margin-bottom: 10px;
      color: var(--cp-text-color-grey-200);
    }
  }

  .input-form {
    margin-top: 60px;
  }

  .button {
    margin-top: auto;
  }
}

.web .top-text,
.tablet .top-text {
  // button or input width
  width: 327px;
}
.mobile {
  .top-text,
  .input-form,
  .button {
    margin-right: auto;
  }
}
</style>
