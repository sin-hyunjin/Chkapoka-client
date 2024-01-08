<template>
  <tree-item-edit :id="id" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeItemEdit",
});
</script>

<script setup lang="ts">
import TreeItemEdit from "@/containers/treeitem/edit/index.vue";

defineProps<{
  id: string;
}>();
</script>

<style scoped lang="scss"></style>
