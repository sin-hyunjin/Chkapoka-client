<!-- 
    240215 : TreeEditSelectTreeCard.vue
    정은우 
 -->
<template>
  <div class="wrap">
    <el-button
      plain
      :class="classArr"
      :style="innerStyle"
      :disabled="disabled"
      @click="$emit('click')"
    >
      <slot />
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";
import { ElButton } from "element-plus";

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
    borderColor:"var(cp-color-gray-500)",
    hoverBorderColor: "var(--cp-color-red)",
    borderRadius: "1rem",
    width: "100px",
    height: "100px",
    disabled: false,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
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
    "--el-button-border-color": props.borderColor,
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
.wrap {
  display: flex;
  > .el-button {
    color: var(--el-button-border-color);
    border-color: var(--el-button-border-color);
    flex-wrap: wrap;
    &:hover{
      border: 3px solid var(--el-button-hover-border-color);
      background-color: var(--el-button-bg-color); // 투명도 추가
      // opacity: 0.5;
    }
    &:active{
      // border-color: var(--cp-color-gray-100);
      background-color: var(--cp-color-white);
    }
    span{
      width: 100%;
      word-wrap: break-word;
    }
  }
}
</style>
