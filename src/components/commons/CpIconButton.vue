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
    type: "icon" | "text";
    classArr?: string[];
    borderRadius?: string;
    textColor?: string;
    hoverColor?: string;
    width?: string;
    height?: string;
  }>(),
  {
    classArr: () => ["cp-text-title-2"],
    borderRadius: "var(--cp-number-8)",
    textColor: "var(--cp-color-black)",
    hoverColor: "var(--cp-color-red-light)",
    width: "auto",
    height: "auto",
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
    case "text": {
      return {
        ...common,
        "--el-button-text-color": props.textColor,
        "--el-button-bg-color": "transparent",
        "--el-button-hover-bg-color": props.hoverColor,
        "--el-button-active-bg-color": props.hoverColor,
        "--el-button-hover-text-color": props.textColor,
        "--el-button-active-text-color": props.textColor,
        "--el-button-active-border-color": props.hoverColor,
        "--el-button-hover-border-color": props.hoverColor,
      };
    }
    case "icon": {
      return {
        ...common,
        "--el-button-text-color": props.textColor,
        "--el-button-border-color": "transparent",
        "--el-button-bg-color": "transparent",
        "--el-button-hover-bg-color": "transparent",
        "--el-button-active-border-color": "transparent",
        "--el-button-hover-border-color": "transparent",
      };
    }
    default: {
      return {};
    }
  }
});
</script>
