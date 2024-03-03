<template>
  <el-tabs
    :model-value="activeTab"
    class="cp-tabs"
    :stretch="stretch"
    :style="innerStyle"
    @update:model-value="$emit('update:activeTab', $event as string)"
  >
    <el-tab-pane
      v-for="(tab, idx) in tabs"
      :key="idx"
      :label="tab.label"
      :name="tab.name"
    >
      <slot :name="tab.name" />
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CpTabs",
});
</script>
<script setup lang="ts">
import { defineProps, defineEmits, withDefaults, computed } from "vue";
import { ElTabs, ElTabPane } from "element-plus";
const props = withDefaults(
  defineProps<{
    activeTab: string;
    tabs: {
      label: string;
      name: string;
    }[];
    navColor?: string;
    navBorderRadius?: string;
    navHeight?: string;
    stretch?: boolean;
  }>(),
  {
    navColor: "#544E4E",
    navBorderRadius: "12px",
    stretch: true,
    navHeight: "44px",
  },
);

defineEmits<{
  (e: "update:activeTab", value: string): void;
}>();

const innerStyle = computed(() => {
  return {
    "--el-color-primary": props.navColor,
    "--nav-border-radius": props.navBorderRadius,
    "--el-tabs-header-height": props.navHeight,
  };
});
</script>

<style scoped lang="scss">
::v-deep(.el-tabs__header) {
  margin: 0px;
  border-top-left-radius: var(--nav-border-radius);
  border-top-right-radius: var(--nav-border-radius);
  background-color: var(--cp-color-white);
}
::v-deep(.el-tabs__item) {
  padding: 0px;

  // cp-text-title-4
  font-size: 14px;
  font-weight: 600;
}
::v-deep(.el-tabs__item.is-top) {
  padding-bottom: 2px;
}
::v-deep(.el-tabs__item.is-top.is-active) {
  padding-bottom: 0px;
  border-bottom: solid 2px var(--el-color-primary);
}
::v-deep(.el-tabs__active-bar.is-top) {
  width: 0px !important;
}
</style>
