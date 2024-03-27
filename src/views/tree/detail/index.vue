<template>
  <tree-detail-container :id="id" :layout-type="layoutType"/>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeDetail",
});
</script>

<script setup lang="ts">
import TreeDetailContainer from "@/containers/tree/detail/TreeDetailContainer.vue";
import { LayoutType } from "@/composables/use-window-size-wrap";
defineProps<{
  id: string;
  layoutType: LayoutType;
}>();
</script>

<style scoped lang="scss"></style>
