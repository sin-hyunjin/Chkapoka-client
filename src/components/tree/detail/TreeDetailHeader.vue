<template>
  <div>
    <div class="tree-detail-header">
      <div class="tree-detail-title">
        <h3 class="cp-text-head-2 tree-detail-title-h3">트리 이름 적는 곳</h3>
        <cp-icon-button type="icon" width="18px" height="18px">
          <icon-edit-pen />
        </cp-icon-button>
      </div>
      <div class="tree-detail-date">
        <p class="cp-text-main-4">2000.12.18</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeDetailHeader",
});
</script>

<script setup lang="ts">
import CpIconButton from "@/components/commons/CpIconButton.vue";
import IconEditPen from "@/components/commons/images/IconEditPen.vue";
import { defineProps } from "vue";
defineProps<{
  id: string;
}>();
</script>

<style scoped lang="scss">
.tree-detail {
  &-header {
    padding: 1.5rem 1rem;
    h3 {
      margin: 0;
    }
  }
  &-title {
    display: flex;
    &-h3 {
      color: var(--cp-color-chocolate);
    }
  }
  &-date p {
    margin: 0.5rem 0;
    color: var(--cp-color-gray-500);
  }
}
</style>
