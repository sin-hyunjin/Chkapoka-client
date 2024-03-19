<template>
  <div class="tree-detail-header">
    <cp-icon-button type="withText" text-align="end">
      <template #icon>
        <icon-arrow-left />
      </template>
      <template #text>뒤로가기</template>
    </cp-icon-button>
  </div>
  <!-- <div>
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
  </div> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeDetailHeader",
});
</script>

<script setup lang="ts">
import CpIconButton from "@/components/commons/CpIconButton.vue";
import IconArrowLeft from "@/components/commons/images/IconArrowLeft.vue";
import { defineProps } from "vue";
defineProps<{
  id: string;
}>();
</script>

<style scoped lang="scss">
// TODO: 추후 삭제
// .tree-detail-header {
//   border: 1px solid black;
// }
</style>
