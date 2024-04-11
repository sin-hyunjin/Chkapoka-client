<template>
  <div ref="treeRef" class="tree-image">
    <tree-image-01 v-if="treeType === 'TREE_TYPE_01'" class="tree-icon" />
    <tree-image-02 v-else-if="treeType === 'TREE_TYPE_02'" class="tree-icon" />
    <tree-image-03 v-else-if="treeType === 'TREE_TYPE_03'" class="tree-icon" />
    <tree-image-04 v-else-if="treeType === 'TREE_TYPE_04'" class="tree-icon" />

    <!-- 트리 상세, 트리 링크 등 실제 트리 아이템이 표시되는 경우 -->
    <template v-if="treeItemList">
      <template v-for="(treeItem, idx) in treeItemList" :key="idx">
        <tree-item
          class="tree-item"
          :tree-type="treeType"
          :text="`${treeItem.title}`"
          :readable="treeItem.readable"
          :style="getTreeItemPosition(idx)"
          @click="
            treeItem.readable
              ? $emit('click:treeItem', treeItem.treeItemId)
              : notifyUnreadable()
          "
        />
      </template>
    </template>
    <!-- 샘플 트리 아이템이 표시되는 경우 -->
    <template v-else>
      <template v-for="(treeItem, idx) in templateTreeItemList" :key="idx">
        <tree-item
          class="tree-item"
          :tree-type="treeType"
          :text="`${treeItem.title}`"
          :style="getTreeItemPosition(idx)"
          @click="$emit('click:treeItem', treeItem.treeItemId)"
        />
      </template>
    </template>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TreeImageView",
});
</script>

<script setup lang="ts">
import TreeImage01 from "@/components/commons/images/TreeImage01.vue";
import TreeImage02 from "@/components/commons/images/TreeImage02.vue";
import TreeImage03 from "@/components/commons/images/TreeImage03.vue";
import TreeImage04 from "@/components/commons/images/TreeImage04.vue";
import TreeItem from "@/components/tree/TreeItem.vue";
import { TreeDetailTreeItemWithReadable } from "@/composables/use-tree-create-api";
import { TreeType } from "@/composables/use-tree-create-controller";
import { ElNotification } from "element-plus";
import { computed, ref } from "vue";

defineProps<{
  treeType: TreeType;
  treeItemList?: TreeDetailTreeItemWithReadable[];
}>();

defineEmits<{
  (e: "click:treeItem", treeItemId: string): void;
}>();

const treeRef = ref<HTMLDivElement>();
/** Tree Item의 위치 범위는 Tree Height * 0.6까지 */
const treeSize = computed(() => {
  return {
    width: treeRef.value?.offsetWidth ?? 0,
    height: treeRef.value?.offsetHeight ?? 0,
  };
});

const getTreeItemPosition = (idx: number) => {
  if (idx === 0) {
    return {
      top: "-30px",
      left: `${treeSize.value.width / 2 - 30}px`, // 정중앙
    };
  } else if (idx <= 2) {
    return {
      top: `${(treeSize.value.height / 4) * 1 - 80}px`,
      left: `${(treeSize.value.width / 4) * (idx === 1 ? 0 : 2) + 45}px`, // 구역을 4개로 나누어 2번인덱스는 그 중 2번째 구역으로
    };
  } else if (idx <= 6) {
    return {
      top: `${(treeSize.value.height / 4) * 2 - 80}px`,
      left: `${(treeSize.value.width / 4) * (idx - 3)}px`, // 4개가 일정한 간격으로
    };
  } else {
    return {
      top: `${(treeSize.value.height / 4) * 3 - 80}px`,
      left: `${((treeSize.value.width - 60) / 3) * (idx - 7) + 45}px`, // 맨 아래 층에 3개가 정렬되도록
    };
  }
};

const templateTreeItemList = computed(() => {
  return [
    {
      treeItemId: "treeItem1",
      title: "편지1",
    },
    {
      treeItemId: "treeItem2",
      title: "편지2",
    },
    {
      treeItemId: "treeItem3",
      title: "편지3",
    },
    {
      treeItemId: "treeItem4",
      title: "편지4",
    },
    {
      treeItemId: "treeItem5",
      title: "편지5",
    },
    {
      treeItemId: "treeItem6",
      title: "편지6",
    },
    {
      treeItemId: "treeItem7",
      title: "편지7",
    },
    {
      treeItemId: "treeItem8",
      title: "편지8",
    },
    {
      treeItemId: "treeItem9",
      title: "편지9",
    },
    {
      treeItemId: "treeItem10",
      title: "편지10",
    },
  ];
});

const notifyUnreadable = () => {
  ElNotification({
    title: "해당 트리 아이템을 읽을 권한이 없습니다.",
  });
};

defineExpose({ treeSize });
</script>

<style scoped lang="scss">
.tree-image {
  align-self: flex-end;
  // TODO: 이미지 자체가 bottom이 비어있음
  margin-bottom: -4px;
  position: relative;

  .tree-icon {
    height: 100%;
  }

  .tree-item {
    position: absolute;
  }
}
</style>
