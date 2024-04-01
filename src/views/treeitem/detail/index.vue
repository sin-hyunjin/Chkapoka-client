<template>
  <tree-item-detail :layout-type="layoutType" />
</template>

<script lang="ts">
import { defineComponent, defineProps } from "vue";

export default defineComponent({
  name: "TreeItemDetail",
});
</script>

<script setup lang="ts">
import { LayoutType } from "@/composables/use-window-size-wrap";
import TreeItemDetail from "@/containers/treeitem/detail/index.vue";
defineProps<{
  layoutType: LayoutType;
}>();
</script>

<style scoped lang="scss"></style>
