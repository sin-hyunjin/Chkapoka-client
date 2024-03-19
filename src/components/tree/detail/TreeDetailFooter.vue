<template>
  <div class="tree-detail-footer">
    <cp-button type="solid">초대하기</cp-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeDetailFooter",
});
</script>

<script setup lang="ts">
// import TreeType from "@/components/commons/images/TreeType.vue";
// import TreeFigure from "../TreeFigure.vue";
import CpButton from "@/components/commons/CpButton.vue";

import { defineProps } from "vue";
defineProps<{
  id: string;
}>();
</script>

<style scoped lang="scss">
.tree-detail-footer {
  height: 20%;
  background-color: #cbe8bf;

  display: flex;
  justify-content: center;
  align-items: center;
}

// TODO: 추후 삭제
// .tree-detail-footer {
//   border: 1px solid black;
// }
</style>
