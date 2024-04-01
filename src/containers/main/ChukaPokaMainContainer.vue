<template>
  <cp-layout :layout-type="LayoutType.Mobile">
    <div v-if="treeListData && treeItemListData" class="main-container-wrap">
      <chuka-poka-main-header @create:tree="createTree" />
      <chuka-poka-main-content
        :tree-list="treeListData.treeList"
        :tree-item-list="treeItemListData.treeItemList"
        @create:tree="createTree"
        @click:tree="clickTree"
      />
    </div>
  </cp-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChukaPokaMainContainer",
});
</script>

<script setup lang="ts">
import ChukaPokaMainHeader from "@/components/main/ChukaPokaMainHeader.vue";
import ChukaPokaMainContent from "@/components/main/ChukaPokaMainContent.vue";
import CpLayout from "@/components/commons/CpLayout.vue";
import { LayoutType } from "@/composables/use-window-size-wrap";
import {
  useFetchTreeList,
  useFetchTreeItemList,
} from "@/composables/use-main-api";
import { useRouter } from "vue-router";
const router = useRouter();

defineProps<{
  layoutType: LayoutType;
}>();

const { resultData: treeListData } = useFetchTreeList();
const { resultData: treeItemListData } = useFetchTreeItemList();

const createTree = () => {
  router.push({ name: "TreeCreate" });
};

const clickTree = (treeId: string) => {
  router.push({ name: "TreeDetail", params: { id: treeId } });
};
</script>

<style scoped lang="scss">
.main-container-wrap {
  width: 100%;
  height: 100%;
  background-color: var(--cp-color-red);
  display: flex;
  flex-direction: column;
}
</style>
