<template>
  <div>TreeItemEdit id {{ id }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeItemEdit",
});
</script>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps<{
  id: string;
}>();
</script>

<style scoped lang="scss"></style>
