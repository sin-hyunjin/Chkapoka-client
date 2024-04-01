<template>
  <div class="tree-preview-container">
    <div class="freestyle">
      <icon-tree-preview
        class="tree-image"
        :tree-type="data.treeType"
        :bg-type="data.bgType"
      />
      <div class="tree-name">{{ data.title }}</div>
      <div class="tree-updated-at">
        {{ new Date(Date.parse(data.updatedAt)).toLocaleString() }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TreeDetailResponseDto } from "@/composables/use-tree-create-api";

export default defineComponent({
  name: "TreePreview",
});
</script>
<script setup lang="ts">
import { defineProps } from "vue";
import IconTreePreview from "@/components/commons/images/IconTreePreview.vue";

defineProps<{
  data: TreeDetailResponseDto;
}>();
</script>

<style scoped lang="scss">
.tree-preview-container {
  display: flex;
  flex-direction: column;
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
