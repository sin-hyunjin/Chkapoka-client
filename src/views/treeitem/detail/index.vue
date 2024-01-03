<template>
  <tree-item-detail :id="id" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeItemDetail",
});
</script>

<script setup lang="ts">
import TreeItemDetail from "@/containers/treeitem/detail/index.vue";

defineProps<{
  id: string;
}>();
</script>

<style scoped lang="scss"></style>
