<template>
  <div class="wrap">
    <el-input
      v-for="(_, idx) in 6"
      ref="inputRefs"
      :key="idx"
      :autofocus="idx === 0"
      :class="classArr"
      :style="compStyle"
      :model-value="splitModelValue(modelValue, idx)"
      :disabled="modelValue.length < idx"
      type="text"
      maxlength="1"
      @keyup="handleKeyup($event, idx)"
      @paste="handlePaste($event, idx)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, computed } from "vue";
import { ElInput } from "element-plus";

const props = withDefaults(
  defineProps<{
    modelValue: string;
    classArr?: string[];
    width?: string;
    height?: string;
    bgColor?: string;
    borderColor?: string;
    borderRadius?: string;
    textColor?: string;
    hoverColor?: string;
  }>(),
  {
    classArr: () => ["cp-text-head-2"],
    width: "57px",
    height: "63px",
    bgColor: "var(--cp-color-pink-light)",
    borderColor: "var(--cp-color-pink)",
    borderRadius: "var(--cp-number-12)",
    textColor: "var(--cp-color-gray-100)",
    hoverColor: "var(--cp-color-red-light)",
  },
);

const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const splitModelValue = (modelValue: string, idx: number) => {
  // el-input에서 받아온 modelValue(입력 값), idx(필드 인덱스)
  const len = modelValue.length; // 받아온 입력 값의 길이 확인
  if (idx <= len - 1) {
    // 입력 필드의 인덱스가 사용자가 입력한 길이를 초과하지 않는다면
    return modelValue[idx];
    // 인덱스 값에 따른 해당 위치의 문자 반환
    // 입력한 값을 6개의 입력 필드로 분할하여 표시
  } else {
    return ""; // 인덱스가 입력 값의 길이보다 크거나 같으면 빈 입력필드 표시
  }
};

const inputRefs = ref<InstanceType<typeof ElInput>[]>();

// 키보드 이벤트 처리
const handleKeyup = (event: KeyboardEvent, idx: number) => {
  if (allowKeys.includes(event.key)) {
    // backspace일 경우, 현재 인풋의 데이터의 ""으로 만들고, disabled을 추가한다.
    if (event.key === "Backspace") {
      clearInput(idx);
      focusInput(idx - 1);
    }
    // 숫자일 경우, 현재 인풋의 데이터에 한글자 숫자를 집어넣고, 다음 인풋의 disabled을 해제한다.
    else {
      setInputValue(idx, event.key);
      focusInput(idx + 1);
    }
  }
};

const allowKeys = [
  "Backspace",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

// 입력 필드 clear
// idx는 자울 입력 필드의 인덱스
const clearInput = (idx: number) => {
  // 현재 입력 필드 이전의 문자열은 유지, 지우려는 입력 필드 이후의 문자열 잘라냄
  const newValue = props.modelValue.slice(0, idx);
  // 잘라낸 값을 부모 컴포넌트로 업데이트
  emits("update:modelValue", newValue);
};

// 입력 필드에 새로운 값을 설정하고 해당 값 업데이트
// idx: 설정할 입력 필드의 인덱스, value: 설정할 새로운 값
const setInputValue = (idx: number, value: string) => {
  // 현재 입력필드 이전의 문자열과 새로운 값을 합쳐서 새로운 문자열 생성
  const newValue = props.modelValue.slice(0, idx) + value;
  // 생성된 새로운 문자열을 부모 컴포넌트로 업데이트
  emits("update:modelValue", newValue);
};

// 지정된 입력 필드에 포커스 설정
// targetIdx: 포커스를 설정할 입력 필드의 인덱스
const focusInput = (targetIdx: number) => {
  if (inputRefs.value) {
    // 입력 필드가 존재한다면?
    // targetIdx가 0보다 크거나 &&
    // targetIdx가 입력 필드의 총 개수보다 작거나 같은지 확인
    // 즉, targetIdx의 유효성 확인
    if (0 <= targetIdx && targetIdx <= inputRefs.value.length - 1) {
      // 유효하다면 해당 인덱스의 입력 필드에 포커스 설정
      inputRefs.value[targetIdx].focus();
    }
  }
};

const handlePaste = (event: ClipboardEvent, idx: number) => {
  // Paste event is only in the first input
  if (idx !== 0) return;
  const pastedValue = event.clipboardData?.getData("text");

  // exist clipboard data & 6 letter & only number
  if (pastedValue && pastedValue.length === 6 && !isNaN(Number(pastedValue))) {
    emits("update:modelValue", pastedValue);
    focusInput(5);
  }
};

const compStyle = computed(() => {
  return {
    "--el-input-width": props.width,
    "--el-input-height": props.height,
    "--el-input-bg-color": props.bgColor,
    "--el-input-border-color": props.borderColor,
    "--el-input-border-radius": props.borderRadius,
    "--el-text-color-placeholder": props.textColor,
    "--el-input-hover-border-color": props.hoverColor,
  };
});
</script>

<style scoped lang="scss">
.wrap {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
}
.wrap > .el-input {
  flex: 1;
  margin-right: var(--cp-number-4);
}

.wrap > .el-input:last-child {
  margin-right: 0;
}

.wrap ::v-deep(.el-input__inner) {
  text-align: center;
}

::v-deep(.el-input__wrapper.is-focus) {
  box-shadow: var(--cp-color-pink);
}
</style>
