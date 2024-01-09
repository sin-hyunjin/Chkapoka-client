<template>
  <el-input
    :style="compStyle"
    v-bind="props"
    @update:model-value="updateModelValue"
  />
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";
import { ElInput, inputEmits, inputProps } from "element-plus";

const props = defineProps({
  ...inputProps,
  width: { type: String, required: false, default: "327px" },
  height: { type: String, required: false, default: "56px" },
  bgColor: {
    type: String,
    required: false,
    default: "var(--cp-color-input-bg-pink)",
  },
  borderRadius: {
    type: String,
    required: false,
    default: "6px",
  },
  placeholderTextColor: {
    type: String,
    required: false,
    default: "var(--cp-text-color-grey-000)",
  },
});

const emits = defineEmits(inputEmits);

const updateModelValue = (value: string) => {
  emits("update:modelValue", value);
  emits("change", value);
};

const compStyle = computed(() => {
  return {
    "--el-input-width": props.width,
    "--el-input-height": props.height,
    "--el-input-bg-color": props.bgColor,
    "--el-input-border-radius": props.borderRadius,
    "--el-text-color-placeholder": props.placeholderTextColor,
  };
});
</script>

<style scoped lang="scss">
::v-deep(.el-input__wrapper) {
  box-shadow: none;
}

.el-input {
  // .cp-text-lg
  font-size: 24px;
  font-weight: 400;
}
</style>
