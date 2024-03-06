<template>
  <div class="tree-detail-container-background">
    <cp-layout :layout-type="LayoutType.Mobile">
      <div class="tree-detail-container-wrap">
        <tree-detail-header :id="id" />
        <tree-detail-content :id="id" />
      </div>
    </cp-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeDetailContainer",
});
</script>

<script setup lang="ts">
import TreeDetailContent from "@/components/tree/detail/TreeDetailContent.vue";
import TreeDetailHeader from "@/components/tree/detail/TreeDetailHeader.vue";
import { defineProps } from "vue";
import { LayoutType } from "@/composables/use-window-size-wrap";
import CpLayout from "@/components/commons/CpLayout.vue";
defineProps<{
  id: string;
  layoutType: LayoutType;
}>();
</script>

<style scoped lang="scss">
.tree-detail-container {
  &-background {
    width: 100%;
    height: 100%;
    background-position: center center;
    // 사이즈 지정해야 하는데 어떻게 동적으로 할지 모루겠음. rem이니까 이대로 해도 되나..?
    background-size: 37.5rem 42.5rem;
    background-repeat: repeat-x;
    background-image: url("@/components/tree/background/background_01.png");
  }
  &-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>
