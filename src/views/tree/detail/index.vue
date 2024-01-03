<template>
  <tree-detail :id="id" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeDetail",
});
</script>

<script setup lang="ts">
import TreeDetail from "@/containers/tree/detail/index.vue";

defineProps<{
  id: string;
}>();
</script>

<style scoped lang="scss"></style>
