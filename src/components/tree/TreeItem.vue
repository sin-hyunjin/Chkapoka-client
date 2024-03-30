<template>
  <div class="tree-item">
    <div class="text cp-text-main-4">{{ text }}</div>
    <div class="flower-icon">
      <icon-flower-01 v-if="treeType === 'TREE_TYPE_01'" />
      <icon-flower-02 v-if="treeType === 'TREE_TYPE_02'" />
      <icon-flower-03 v-if="treeType === 'TREE_TYPE_03'" />
      <icon-flower-04 v-if="treeType === 'TREE_TYPE_04'" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "TreeItem",
};
</script>

<script setup lang="ts">
import { defineProps } from "vue";
import IconFlower01 from "@/components/commons/images/IconFlower01.vue";
import IconFlower02 from "@/components/commons/images/IconFlower02.vue";
import IconFlower03 from "@/components/commons/images/IconFlower03.vue";
import IconFlower04 from "@/components/commons/images/IconFlower04.vue";
import { TreeType } from "@/composables/use-tree-create-controller";
defineProps<{
  text: string;
  treeType: TreeType;
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
    text-align: center;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
}
</style>
@/composables/use-tree-create-controller
