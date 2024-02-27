<template>
  <div class="tree-item">
    <div class="text cp-text-main-4">{{ text }}</div>
    <div class="flower-icon"><icon-flower /></div>
  </div>
</template>

<script lang="ts">
export default {
  name: "TreeItem",
};
</script>

<script setup lang="ts">
import { defineProps } from "vue";
import IconFlower from "@/components/commons/images/IconFlower.vue";
defineProps<{
  text: string;
}>();
</script>
<style scoped lang="scss">
.tree-item {
  width: 60px;

  .text {
    width: 60px;
    color: #644444;
    overflow: hidden;
    display: -webkit-box;
    /* display 2 lines only */
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
}
</style>
