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
        :tree-item-list="treeItemListWithReadable"
        @click:tree-item="$emit('click:treeItem', $event)"
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
import {
  TreeDetailResponseDto,
  TreeDetailTreeItemWithReadable,
} from "@/composables/use-tree-create-api";
import { computed, defineProps } from "vue";
import TreeImageView from "@/components/tree/TreeImageView.vue";

const props = defineProps<{
  data: TreeDetailResponseDto;
}>();

defineEmits<{
  (e: "click:treeItem", treeItemId: string): void;
}>();

const treeItemListWithReadable = computed<TreeDetailTreeItemWithReadable[]>(
  () => {
    return props.data.treeItemList.map((treeItem) => {
      /** 읽기가능한 경우
       * 1. 트리 유형이 내트리일 경우 && 로그인한 유저의 소유인 경우
       * 2. 트리 아이템이 로그인한 유저의 소유인 경우
       */
      return {
        ...treeItem,
        readable:
          (props.data.ownerType === "MINE" && props.data.myTree) ||
          treeItem.myTreeItem,
      };
    });
  },
);
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
