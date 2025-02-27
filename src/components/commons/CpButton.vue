<template>
  <el-button
    :class="classArr"
    :style="innerStyle"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <div>
      <slot />
    </div>
  </el-button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";
import { ElButton } from "element-plus";

const props = withDefaults(
  defineProps<{
    type: "outlined" | "solid";
    classArr?: string[];
    bgColor?: string;
    borderRadius?: string;
    textColor?: string;
    hoverColor?: string;
    width?: string;
    height?: string;
    disabled?: boolean;
  }>(),
  {
    classArr: () => ["cp-text-title-2"],
    bgColor: "var(--cp-color-red)",
    borderRadius: "var(--cp-number-12)",
    textColor: "var(--cp-color-gray-100)",
    hoverColor: "var(--cp-color-red-light)",
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
        "--el-button-active-bg-color": props.bgColor,
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
.el-button:focus {
  background-color: var(--el-button-active-bg-color);
}
</style>
