<template>
  <el-button class="cp-icon-button" :class="classArr" :style="innerStyle">
    <template v-if="type === 'icon'">
      <slot name="icon"></slot>
    </template>
    <template v-if="type === 'withText'">
      <template v-if="textAlign === 'top'">
        <div class="top">
          <div class="text">
            <slot name="text"></slot>
          </div>
          <div class="icon">
            <slot name="icon"></slot>
          </div>
        </div>
      </template>
      <template v-if="textAlign === 'bottom'">
        <div class="bottom">
          <div class="icon">
            <slot name="icon"></slot>
          </div>
          <div class="text">
            <slot name="text"></slot>
          </div>
        </div>
      </template>
      <template v-if="textAlign === 'start'">
        <div class="start text">
          <slot name="text"></slot>
        </div>
        <div class="start icon">
          <slot name="icon"></slot>
        </div>
      </template>
      <template v-if="textAlign === 'end'">
        <div class="end icon">
          <slot name="icon"></slot>
        </div>
        <div class="end text">
          <slot name="text"></slot>
        </div>
      </template>
    </template>
  </el-button>
</template>

<script setup lang="ts">
import { defineProps, computed, withDefaults } from "vue";
import { ElButton } from "element-plus";

const props = withDefaults(
  defineProps<{
    classArr?: string[];
    type: "icon" | "withText";
    textAlign?: "top" | "bottom" | "start" | "end";
    width?: string;
    height?: string;
    visibleBorder?: boolean;
    borderRadius?: string;
    bgColor?: string;
    textColor?: string;
    borderColor?: string;
    hoverBgColor?: string;
    hoverTextColor?: string;
    hoverBorderColor?: string;
  }>(),
  {
    classArr: () => ["cp-text-title-3"],
    textAlign: "start",
    width: "auto",
    height: "auto",
    visibleBorder: false,
    borderRadius: "var(--cp-number-12)",
    bgColor: "var(--cp-color-white)",
    textColor: "var(--cp-color-black)",
    borderColor: "var(--cp-color-red-light)",
    hoverBgColor: "var(--cp-color-gray-100)",
    hoverTextColor: "var(--cp-color-black)",
    hoverBorderColor: "var(--cp-color-gray-100)",
  },
);

const innerStyle = computed(() => {
  const common = {
    "--el-border-radius-base": props.borderRadius,
    width: props.width,
    height: props.height,
  };
  switch (props.type) {
    case "withText": {
      return {
        ...common,
        "--el-button-text-color": props.textColor,
        "--el-button-bg-color": props.bgColor,
        "--el-button-border-color": props.visibleBorder
          ? props.borderColor
          : "transparent",
        "--el-button-hover-bg-color": props.hoverBgColor,
        "--el-button-active-bg-color": props.hoverBgColor,
        "--el-button-hover-text-color": props.textColor,
        "--el-button-active-text-color": props.textColor,
        "--el-button-active-border-color": props.visibleBorder
          ? props.hoverBorderColor
          : "transparent",
        "--el-button-hover-border-color": props.visibleBorder
          ? props.hoverBorderColor
          : "transparent",
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
<style scoped lang="scss">
.cp-icon-button {
  .top {
    .text {
      margin-bottom: 8px;
    }
  }

  .bottom {
    .icon {
      margin-bottom: 8px;
    }
  }

  .start.text {
    margin-right: 8px;
  }

  .end.icon {
    margin-right: 8px;
  }
}
</style>
