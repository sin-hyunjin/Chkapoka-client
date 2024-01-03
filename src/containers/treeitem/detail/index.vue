<template>
  <div>TreeItemDetail id {{ id }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeItemDetail",
});
</script>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps<{
  id: string;
}>();
</script>

<style scoped lang="scss"></style>
