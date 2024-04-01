<template>
  <div class="chuka-poka-link-content">
    <div class="info">
      <div class="text">
        <div class="title cp-text-head-2">{{ data.title }}</div>
        <div class="date cp-text-main-4">
          {{ new Date(Date.parse(data.updatedAt)).toLocaleString() }}
        </div>
      </div>
    </div>
    <div class="body">
      <tree-image-view
        :tree-type="data.treeType"
        :tree-item-list="data.treeItemList"
      ></tree-image-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChukaPokaLinkContent",
});
</script>

<script setup lang="ts">
import { TreeDetailResponseDto } from "@/composables/use-tree-create-api";
import { defineProps } from "vue";
import TreeImageView from "@/components/tree/TreeImageView.vue";

defineProps<{
  data: TreeDetailResponseDto;
}>();
</script>

<style scoped lang="scss">
.chuka-poka-link-content {
  flex: 1;
  display: flex;
  flex-direction: column;

  .info .text {
    padding: 32px 0px 12px 16px;

    .date {
      margin-top: 12px;
      color: #adadad;
    }
  }

  .body {
    flex: 1;
    display: flex;
    justify-content: center;
  }
}
</style>
