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
    classArr?: string[];
    bgColor?: string;
    iconColor?:string;
    hoverBgColor?: string;
    hoverIconColor?: string;
    borderRadius?: string;
    width?: string;
    height?: string;
    disabled?: boolean;
  }>(),
  {
    classArr: () => ["cp-text-title-2"],
    bgColor: "var(--cp-color-red)",
    hoverBgColor: "var(--cp-color-pink)",
    iconColor:"var(--cp-color-white)",
    hoverIconColor: "var(--cp-color-grey-100)",
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
        "--el-button-icon-color": props.iconColor,
        "--el-button-hover-icon-color": props.hoverIconColor,
        "--el-button-active-border-color": props.hoverIconColor,
        "--el-button-hover-border-color": props.hoverBgColor,
      };
    });
</script>
<style scoped lang="scss"></style>
