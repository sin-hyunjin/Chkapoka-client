<template>
  <div :class="['sign-container', layoutTypeClass]">
    <template v-if="currentStep === SignFormCurrentStep.EMAIL">
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
        <cp-button
          type="solid"
          :disabled="isValidEmailValue"
          @click="sendFormData(currentStep, emailValue)"
          >시작하기</cp-button
        >
      </div>
    </template>
    <template v-if="currentStep === SignFormCurrentStep.PASSWORD">
      <div class="top-text">
        <div class="top-text__title cp-text-lg-p">반가워요~</div>
        <div class="top-text__title cp-text-lg-p">비밀번호를 적어주세요 :)</div>
        <div class="top-text__description cp-text-sm-p">
          영문자, 숫자를 이용해 8글자 이상의 비밀번호를 입력하세요.
        </div>
      </div>
      <div class="input-form">
        <cp-input
          v-model="passwordValue"
          class="password"
          type="password"
          placeholder="비밀번호"
          show-password
        />
      </div>
      <div class="button">
        <cp-button
          type="solid"
          :disabled="isValidPasswordValue"
          @click="sendFormData(currentStep, passwordValue)"
          >시작하기</cp-button
        >
      </div>
    </template>
    <template v-if="currentStep === SignFormCurrentStep.EMAIL_VERIFY">
      <div class="top-text">
        <!-- <div class="top-text__title cp-text-lg-p">반가워요~</div>
        <div class="top-text__title cp-text-lg-p">비밀번호를 적어주세요 :)</div>
        <div class="top-text__description cp-text-sm-p">
          영문자, 숫자를 이용해 8글자 이상의 비밀번호를 입력하세요.
        </div> -->
        <div class="top-text__title cp-text-lg-p">
          이메일 인증번호 처리는 내일~
        </div>
      </div>
      <div class="input-form">
        <!-- <cp-input
          v-model="passwordValue"
          class="password"
          type="password"
          placeholder="비밀번호"
          show-password
        /> -->
      </div>
      <div class="button">
        <!-- <cp-button
          type="solid"
          :disabled="isValidPasswordValue"
          @click="sendFormData(currentStep, passwordValue)"
          >시작하기</cp-button
        > -->
      </div>
    </template>
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
// import IconShowPassword from "@/components/commons/images/IconShowPassword.vue";
import { LayoutType } from "@/composables/use-window-size-wrap";
import { useValidateInputValue } from "@/composables/use-validate-input-value";
import { SignFormCurrentStep } from "@/utils/const";

const props = defineProps<{
  layoutType: LayoutType;
  currentStep: SignFormCurrentStep;
}>();

const emits = defineEmits<{
  (e: "send", type: SignFormCurrentStep, value: string): void;
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

const emailValue = ref<string>("example@example.com");
const passwordValue = ref<string>("pass1234");

const { isValidEmailValue, isValidPasswordValue } = useValidateInputValue({
  email: emailValue,
  password: passwordValue,
});

const sendFormData = (type: SignFormCurrentStep, value: string) => {
  emits("send", type, value);
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

.password {
  & ::v-deep(.el-input__wrapper svg) {
    color: var(--cp-primary-color);
  }
  & ::v-deep(.el-input__password) {
    width: 25px;
    height: 20px;

    & svg {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
