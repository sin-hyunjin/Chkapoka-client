<template>
  <el-input
    :class="classArr"
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
  classArr: {
    type: Array<string>,
    required: false,
    default: () => ["cp-text-head-2"],
  },
  width: { type: String, required: false, default: "327px" },
  height: { type: String, required: false, default: "56px" },
  bgColor: {
    type: String,
    required: false,
    default: "var(--cp-color-pink-light)",
  },
  borderRadius: {
    type: String,
    required: false,
    default: "var(--cp-number-4)",
  },
  placeholderTextColor: {
    type: String,
    required: false,
    default: "var(--cp-color-grey-100)",
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
</style>
