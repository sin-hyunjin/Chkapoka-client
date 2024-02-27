<template>
  <el-radio-group
    :model-value="convertNameToLabel(modelValue)"
    :class="[
      type,
      stretch ? 'is-stretch' : '',
      visibleBorder ? 'visible-border' : 'hidden-border',
    ]"
    @update:model-value="
      $emit('update:modelValue', convertLabelToName($event as string))
    "
  >
    <template v-if="type === 'button'">
      <el-radio-button
        v-for="(label, idx) in items.map((item) => item.label)"
        :key="idx"
        :label="label"
        :style="radioButtonInnerStyle"
      />
    </template>
  </el-radio-group>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CpRadioGroup",
});
</script>
<script setup lang="ts">
import { defineProps, defineEmits, withDefaults, computed } from "vue";
import { ElRadioGroup, ElRadioButton } from "element-plus";
const props = withDefaults(
  defineProps<{
    modelValue: string;
    type: "button";
    items: {
      label: string;
      name: string;
    }[];
    stretch?: boolean;
    visibleBorder?: boolean;
    activeBgColor?: string;
    activeTextColor?: string;
    unActiveBgColor?: string;
    unActiveTextColor?: string;
  }>(),
  {
    stretch: true,
    visibleBorder: false,
    activeBgColor: "var(--cp-color-red)",
    activeTextColor: "#E8E8E8",
    unActiveBgColor: "transparent",
    unActiveTextColor: "#6B6B73",
  },
);

defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const radioButtonInnerStyle = computed(() => {
  return {
    "--el-radio-button-checked-bg-color": props.activeBgColor,
    "--el-radio-button-checked-text-color": props.activeTextColor,
    "--cp-radio-button-bg-color": props.unActiveBgColor,
    "--cp-radio-button-text-color": props.unActiveTextColor,
    // "--el-color-primary": props.navColor,
    // "--nav-border-radius": props.navBorderRadius,
    // "--el-tabs-header-height": props.navHeight,
  };
});

const convertNameToLabel = (name: string) => {
  return props.items.find((item) => item.name === name)?.label ?? "";
};
const convertLabelToName = (label: string) => {
  return props.items.find((item) => item.label === label)?.name ?? "";
};
</script>

<style scoped lang="scss">
// type: button 관련 css
.el-radio-group.button {
  & ::v-deep(.el-radio-button__inner) {
    --el-border-radius-base: none;
    border-radius: 50px;
  }

  &
    ::v-deep(
      .el-radio-button__original-radio:not(:checked) + .el-radio-button__inner
    ) {
    background-color: var(--cp-radio-button-bg-color);
    color: var(--cp-radio-button-text-color);
  }

  &.is-stretch {
    min-width: 100%;
    display: flex;
    & > * {
      flex: 1;
      text-align: center;
      display: flex;
    }

    & ::v-deep(.el-radio-button) {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    // item width 나머지 채우기
    // & ::v-deep(.el-radio-button__inner) {
    //   flex: 1;
    // }
  }

  &.hidden-border {
    --el-border: none;
  }
}
</style>
