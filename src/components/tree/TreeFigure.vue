<template>
  <div class="tree-figure-container">
    <div>
      <div class="tree-figure-card">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "TreeFigure",
};
</script>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  treeNumber: string;
}>();
</script>
<style scoped lang="scss">
.tree-figure {
  &-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
  &-card {
    display: block;
    height: auto;
    margin-top: 3rem;
  }
}
</style>
