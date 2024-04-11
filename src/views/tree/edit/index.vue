<template>
  <tree-edit-container :layout-type="layoutType" :tree-id="id" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeEdit",
});
</script>

<script setup lang="ts">
import TreeEditContainer from "@/containers/tree/edit/TreeEditContainer.vue";
import { LayoutType } from "@/composables/use-window-size-wrap";

defineProps<{
  layoutType: LayoutType;
  id: string;
}>();
</script>

<style scoped lang="scss"></style>
