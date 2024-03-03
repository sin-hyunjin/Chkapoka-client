<!-- 
    240215 : TreeEditSelectTreeCard.vue
    정은우 
 -->
<template>
  <div class="wrap">
    <el-button plain :class="classArr" :style="innerStyle" :disabled="disabled">
      <slot />
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";
import { ElButton } from "element-plus";

const props = withDefaults(
  defineProps<{
    type: "treeCard" | "backgroundCard";
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
    borderColor: "var(cp-color-gray-500)",
    hoverBorderColor: "var(--cp-color-red)",
    borderRadius: "1rem",
    width: "100px",
    height: "100px",
    disabled: false,
  },
);
defineEmits<{
  (e: "click"): void;
}>();

const innerStyle = computed(() => {
  const common = {};

  switch (props.type) {
    case "treeCard": {
      return {
        ...common,
        width: props.width,
        height: props.height,
        "--el-border-radius-base": props.borderRadius,
        "--el-button-bg-color": props.bgColor,
        "--el-button-border-color": props.borderColor,
        "--el-button-hover-bg-color": props.hoverBgColor,
        "--el-button-hover-border-color": props.hoverBorderColor,
      };
    }
    case "backgroundCard": {
      return {
        ...common,
        width: "52px",
        height: "52px",
        "--el-border-radius-base": "100%",
        "--el-button-bg-color": props.bgColor,
        "--el-button-border-color": props.borderColor,
        "--el-button-hover-bg-color": props.bgColor,
        "--el-button-hover-border-color": props.hoverBorderColor,
      };
    }
    default: {
      return {};
    }
  }
});
</script>
<style scoped lang="scss">
.wrap {
  display: flex;
  > .el-button {
    color: var(--el-button-border-color);
    border-color: var(--el-button-border-color);
    flex-wrap: wrap;
    padding: 2px;
    &:hover {
      border: 3px solid var(--el-button-hover-border-color);
    }
    span {
      width: 100%;
    }
  }
}
</style>
