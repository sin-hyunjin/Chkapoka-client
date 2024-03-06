<template>
  <div class="tree-detail-content">
    <tree-figure tree-number="01">
      <tree-type />
    </tree-figure>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeDetailContent",
});
</script>

<script setup lang="ts">
import TreeType from "@/components/commons/images/TreeType.vue";
import TreeFigure from "../TreeFigure.vue";
import { defineProps } from "vue";
defineProps<{
  id: string;
}>();
</script>

<style scoped lang="scss">
.tree-detail{
  &-content{
    width: 100%;
    height: 100%;
  }
}
</style>