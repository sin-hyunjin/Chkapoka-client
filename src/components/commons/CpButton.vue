<template>
  <el-button
    class="cp-text-md-p"
    :style="innerStyle"
    :disabled="disabled"
    @click="$emit('click')"
    ><slot
  /></el-button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";
import { ElButton } from "element-plus";

const props = withDefaults(
  defineProps<{
    type: "outlined" | "solid";
    bgColor?: string;
    borderRadius?: string;
    textColor?: string;
    hoverColor?: string;
    width?: string;
    height?: string;
    disabled?: boolean;
  }>(),
  {
    bgColor: "var(--cp-primary-color)",
    borderRadius: "var(--button-base-border-radius)",
    textColor: "var(--cp-text-color-grey-100)",
    hoverColor: "var(--cp-primary-color-light)",
    width: "337px",
    height: "55px",
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

  switch (props.type) {
    case "solid": {
      return {
        ...common,
        "--el-button-text-color": props.textColor,
        "--el-button-hover-text-color": props.textColor,
        "--el-button-active-text-color": props.textColor,
        "--el-button-bg-color": props.bgColor,
        "--el-button-hover-bg-color": props.hoverColor,
        "--el-button-active-bg-color": props.hoverColor,
        "--el-button-hover-color": props.bgColor,
        "--el-button-active-border-color": props.hoverColor,
        "--el-button-hover-border-color": props.hoverColor,
      };
    }
    case "outlined": {
      return {
        ...common,
        "--el-button-text-color": props.bgColor,
        "--el-button-hover-text-color": props.hoverColor,
        "--el-button-active-text-color": props.hoverColor,
        "--el-button-bg-color": "transparent",
        "--el-button-hover-bg-color": "transparent",
        "--el-button-active-bg-color": "transparent",
        "--el-button-border-color": props.bgColor,
        "--el-button-active-border-color": props.hoverColor,
        "--el-button-hover-border-color": props.hoverColor,
      };
    }
    default: {
      return {};
    }
  }
});
</script>

<style scoped lang="scss">
.el-button {
  // element-plus css가 우선으로 적용되는 경우, 아래와 같이 css를 적용한다..
  // .cp-text-md-p
  font-size: 16px;
  font-weight: 600;

  // scoped로 내부 css에 접근이 어려운 경우, ::v-deep(.el-button)와 같이 접근
}
</style>
