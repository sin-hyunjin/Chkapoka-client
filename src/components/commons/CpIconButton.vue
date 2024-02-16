<template>
  <el-button
    :class="classArr"
    :style="innerStyle"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </el-button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";
import { ElButton } from "element-plus";

const props = withDefaults(
  defineProps<{
    classArr?: string[];
    borderRadius?: string;
    bgColor?: string;
    textColor?: string;
    width?: string;
    height?: string;
    disabled?: boolean;
  }>(),
  {
    classArr: () => ["cp-text-title-2"],
    bgColor: "transparent",
    borderRadius: "var(--cp-number-8)",
    textColor: "var(--cp-color-grey-100)",
    width: "162px",
    height: "66px",
    disabled: false,
  },
);
defineEmits<{
  (e: "click"): void;
}>();

const innerStyle = computed(() => {
  const common = {
    "--el-border-radius-base": props.borderRadius,
    width: props.width,
    height: props.height,
  };
  return {
    ...common,
    "--el-button-bg-color": props.bgColor,
  };
});
</script>
