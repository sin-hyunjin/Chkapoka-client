<!-- 
    240215 : TreeEditSelectTreeCard.vue
    정은우 
 -->
<template>
  <div class="wrap">
    <div
      :class="classArr"
      :style="innerStyle"
      :disabled="disabled"
      @click="$emit('click')"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";

const props = withDefaults(
  defineProps<{
    classArr?: string[];
    bgColor?: string;
    hoverBgColor?: string;
    hoverBorderColor?: string;
    borderRadius?: string;
    width?: string;
    height?: string;
    disabled?: boolean;
  }>(),
  {
    classArr: () => ["cp-text-main-4"],
    bgColor: "var(--cp-color-white)",
    hoverBgColor: "var(--cp-color-white)",
    borderColor:"var(cp-color-gray-100)",
    hoverBorderColor: "var(--cp-color-red)",
    borderRadius: "1rem",
    width: "100px",
    height: "100px",
    disabled: false,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    "--el-button-hover-bg-color": props.hoverBgColor,
    "--el-button-hover-border-color": props.hoverBorderColor,
    "--el-button-hover-text-color": props.borderColor,
    "--el-button-active-bg-color": props.bgColor,
    "--el-button-active-border-color": props.borderColor,
    "--el-button-active-text-color": props.borderColor,
  };
});
</script>
<style scoped lang="scss">
$hover-bg-color: rgba(var(--cp-color-pink), 0.6);
.wrap > div {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 1rem;
  color: var(--cp-color-gray-100);
  &:hover{
    border: 3px solid var(--cp-color-red);
    background-color: $hover-bg-color; // 투명도 추가
    // opacity: 0.5;
  }
  &:active{
    border-color: 3px solid var(--cp-color-red);
    background-color: var(--cp-color-white);
  }
}
</style>
