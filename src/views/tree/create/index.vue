<template>
  <tree-create-container :layout-type="layoutType" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeCreate",
});
</script>

<script setup lang="ts">
import TreeCreateContainer from "@/containers/tree/create/TreeCreateContainer.vue";
import { LayoutType } from "@/composables/use-window-size-wrap";
defineProps<{
  layoutType: LayoutType;
}>();
</script>

<style scoped lang="scss"></style>
