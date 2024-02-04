<!-- 
    240205 : CpIconCircleButton.vue
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
    type: "RedSolid"|"WhiteSolid";
    classArr?: string[];
    bgColor?: string;
    borderRadius?: string;
    hoverColor?: string;
    width?: string;
    height?: string;
    disabled?: boolean;
  }>(),
  {
    classArr: () => ["cp-text-title-2"],
    bgColor: "var(--cp-color-red)",
    borderRadius: "100%",
    hoverColor: "var(--cp-color-pink)",
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
  switch (props.type) {
    case "RedSolid": {
      return {
        ...common,
        "--el-button-bg-color": props.bgColor,
        "--el-button-hover-bg-color": props.hoverColor,
        "--el-button-active-bg-color": props.hoverColor,
        "--el-button-hover-color": props.bgColor,
        "--el-button-active-border-color": props.hoverColor,
        "--el-button-hover-border-color": props.hoverColor,
      };
    }
        case "WhiteSolid": {
      return {
        ...common,
        "--el-button-bg-color": props.bgColor,
        "--el-button-hover-bg-color": props.hoverColor,
        "--el-button-active-bg-color": props.hoverColor,
        "--el-button-hover-color": props.bgColor,
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
