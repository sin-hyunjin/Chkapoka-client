<!-- 
    240207 : CpIconCircleButton.vue
    정은우 
 -->
<template>
  <el-button
    circle
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
    bgColor?: string;
    hoverBgColor?: string;
    borderRadius?: string;
    width?: string;
    height?: string;
    disabled?: boolean;
  }>(),
  {
    classArr: () => ["cp-text-title-2"],
    bgColor: "var(--cp-color-red)",
    hoverBgColor: "var(--cp-color-red)",
    borderRadius: "100%",
    width: "56px",
    height: "56px",
    disabled: false,
    display: "flex",
  },
);
defineEmits<{
  (e: "click"): void;
}>();

const innerStyle = computed(() => {
  const common = {
    "--el-border-radius-circle": props.borderRadius,
    width: props.width,
    height: props.height,
  };
  return {
    ...common,
    "--el-button-bg-color": props.bgColor,
    "--el-button-hover-bg-color": props.hoverBgColor,
    "--el-button-active-bg-color": props.hoverBgColor,
    "--el-button-active-border-color": props.hoverBgColor,
    "--el-button-hover-border-color": props.hoverBgColor,
  };
});
</script>
<style scoped lang="scss"></style>
