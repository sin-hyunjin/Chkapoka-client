<template>
  <div class="tree-preview-container">
    <div class="freestyle">
      <icon-tree-preview class="tree-image" />
      <div class="tree-name">{{ data.title }}</div>
      <div class="tree-updated-at">{{ data.updatedAt }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreePreview",
});
</script>
<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import IconTreePreview from "@/components/commons/images/IconTreePreview.vue";

defineProps<{
  data: {
    title: string;
    updatedAt: string;
  };
}>();

defineEmits<{
  (e: "click"): void;
}>();
</script>

<style scoped lang="scss">
.tree-preview-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  & .tree-image {
    border-radius: var(--cp-number-8);
  }
  & .tree-name {
    color: #544e4e;
    margin-left: var(--cp-number-4);
    font-size: 12px;
    font-weight: 700;
  }

  & .tree-updated-at {
    color: #6f6f6f;
    margin-left: var(--cp-number-4);
    margin-top: 2px;
    font-size: 8px;
  }
}
</style>
