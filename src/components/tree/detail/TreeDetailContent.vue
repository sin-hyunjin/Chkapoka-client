<template>
  <div class="tree-detail-content">
    <div class="info">
      <div class="text">
        <div class="title cp-text-head-2">{{ data.title }}</div>
        <div class="date cp-text-main-4">
          {{ new Date(Date.parse(data.updatedAt)).toLocaleString() }}
        </div>
      </div>
    </div>
    <div class="body">
      <div
        :class="['navigator left', disabledLeft ? 'disable' : 'able']"
        :style="navigatorArrowStyle"
      >
        <cp-icon-button
          type="icon"
          class="button"
          @click="!disabledLeft && clickLeft()"
        >
          <template #icon>
            <icon-arrow-left
              :fill-color="
                !disabledLeft ? '#83B76D' : 'var(--cp-color-gray-500)'
              "
            />
          </template>
        </cp-icon-button>
      </div>
      <tree-image-view
        ref="treeImageViewRef"
        :tree-type="data.treeType"
        :tree-item-list="currentList"
        @click:tree-item="$emit('click:treeItem', $event)"
      />
      <div
        :class="['navigator right', disabledRight ? 'disable' : 'able']"
        :style="navigatorArrowStyle"
      >
        <cp-icon-button
          type="icon"
          class="button"
          @click="!disabledRight && clickRight()"
        >
          <template #icon>
            <icon-arrow-right
              :fill-color="
                !disabledRight ? '#83B76D' : 'var(--cp-color-gray-500)'
              "
            />
          </template>
        </cp-icon-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTreeItemNavgiator } from "@/composables/use-tree-detail-controller";

export default defineComponent({
  name: "TreeDetailContent",
});
</script>

<script setup lang="ts">
import {
  TreeDetailResponseDto,
  TreeDetailTreeItemWithReadable,
} from "@/composables/use-tree-create-api";
import { computed, defineProps, ref } from "vue";
import TreeImageView from "@/components/tree/TreeImageView.vue";
import CpIconButton from "@/components/commons/CpIconButton.vue";
import IconArrowLeft from "@/components/commons/images/IconArrowLeft.vue";
import IconArrowRight from "@/components/commons/images/IconArrowRight.vue";

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

const treeImageViewRef = ref<InstanceType<typeof TreeImageView>>();
const navigatorArrowStyle = computed(() => {
  if (treeImageViewRef.value) {
    return {
      bottom: `${treeImageViewRef.value.treeSize.height / 2}px`,
    };
  }
});
const { currentList, disabledLeft, disabledRight, clickLeft, clickRight } =
  useTreeItemNavgiator(treeItemListWithReadable);
</script>

<style scoped lang="scss">
.tree-detail-content {
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
    position: relative;

    .navigator {
      position: absolute;
      &.left {
        left: 0;
      }

      &.right {
        right: 0;
      }

      &.able .button:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>
