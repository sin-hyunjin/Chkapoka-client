<template>
  <cp-layout :layout-type="LayoutType.Mobile">
    <div class="tree-detail-container">
      <tree-detail-header :id="id" />
      <tree-detail-content :id="id" />
      <tree-detail-footer :id="id" />
    </div>
  </cp-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeDetailContainer",
});
</script>

<script setup lang="ts">
import TreeDetailHeader from "@/components/tree/detail/TreeDetailHeader.vue";
import TreeDetailContent from "@/components/tree/detail/TreeDetailContent.vue";
import TreeDetailFooter from "@/components/tree/detail/TreeDetailFooter.vue";
import { defineProps } from "vue";
import { LayoutType } from "@/composables/use-window-size-wrap";
import CpLayout from "@/components/commons/CpLayout.vue";
defineProps<{
  id: string;
  layoutType: LayoutType;
}>();
</script>

<style scoped lang="scss">
.tree-detail-container {
  background-color: #fefcf8;
  height: calc(100vh - 2rem);

  display: flex;
  flex-direction: column;
}
</style>
