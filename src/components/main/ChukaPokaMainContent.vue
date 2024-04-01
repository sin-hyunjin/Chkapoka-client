<template>
  <div class="content-wrap">
    <cp-tabs
      v-model:active-tab="activeMainTab"
      :tabs="mainTabs"
      :stretch="true"
    />
    <div class="main-tab-content-wrap">
      <template v-if="activeMainTab === 'myTree'">
        <div v-if="myTree.length === 0" @click="$emit('create:tree')">
          <div class="title cp-text-head-4">아직 나무를 심지 않으셨군요!</div>
          <tree-empty />
        </div>
        <template v-else>
          <div class="title cp-text-head-4">내 소유 트리</div>
          <cp-radio-group
            v-model="activeMyTreeTab"
            type="button"
            :items="treeTabs"
            :stretch="true"
          />
          <div class="tree-tab-content-wrap">
            <template v-if="activeMyTreeTab === 'entire'">
              <tree-preview
                v-for="(item, idx) in myTree"
                :key="idx"
                :data="item"
                @click="$emit('click:tree', item.treeId)"
              />
            </template>
            <template v-if="activeMyTreeTab === 'only'">
              <tree-preview
                v-for="(item, idx) in myTree.filter(
                  (v) => v.shareType === 'ONLY',
                )"
                :key="idx"
                :data="item"
                @click="$emit('click:tree', item.treeId)"
              />
            </template>
            <template v-if="activeMyTreeTab === 'together'">
              <tree-preview
                v-for="(item, idx) in myTree.filter(
                  (v) => v.shareType === 'TOGETHER',
                )"
                :key="idx"
                :data="item"
                @click="$emit('click:tree', item.treeId)"
              />
            </template>
            <!-- <template v-if="activeTreeTab === 'new'">
              {{ activeTreeTab }}
            </template> -->
          </div>
        </template>
      </template>
      <template v-else-if="activeMainTab === 'notYetSendTree'">
        <div v-if="notYetSendTree.length === 0" @click="$emit('create:tree')">
          <div class="title cp-text-head-4">아직 나무를 심지 않으셨군요!</div>
          <tree-empty />
        </div>
        <template v-else>
          <div class="title cp-text-head-4">미공유 트리</div>
          <cp-radio-group
            v-model="activeNotYetSendTreeTab"
            type="button"
            :items="treeTabs"
            :stretch="true"
          />
          <div class="tree-tab-content-wrap">
            <template v-if="activeNotYetSendTreeTab === 'entire'">
              <tree-preview
                v-for="(item, idx) in notYetSendTree"
                :key="idx"
                :data="item"
                @click="$emit('click:tree', item.treeId)"
              />
            </template>
            <template v-if="activeNotYetSendTreeTab === 'only'">
              <tree-preview
                v-for="(item, idx) in notYetSendTree.filter(
                  (v) => v.shareType === 'ONLY',
                )"
                :key="idx"
                :data="item"
                @click="$emit('click:tree', item.treeId)"
              />
            </template>
            <template v-if="activeNotYetSendTreeTab === 'together'">
              <tree-preview
                v-for="(item, idx) in notYetSendTree.filter(
                  (v) => v.shareType === 'TOGETHER',
                )"
                :key="idx"
                :data="item"
                @click="$emit('click:tree', item.treeId)"
              />
            </template>
          </div>
        </template>
      </template>
      <template v-else-if="activeMainTab === 'myTreeItem'">
        <!-- TODO: 트리 아이템 empty 화면 논의 필요 -->
        <template v-if="treeItemList.length === 0">
          <div class="title cp-text-head-4">
            아직 편지를 작성하지 않으셨군요!
          </div>
          <tree-item-empty />
        </template>
        <template v-else>
          <div class="tree-item-tab-content-wrap">
            <tree-item-preview
              v-for="(item, idx) in treeItemList"
              :key="idx"
              :data="item"
            />
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TreeDetailResponseDto } from "@/composables/use-tree-create-api";

export default defineComponent({
  name: "ChukaPokaMainContent",
});
</script>
<script setup lang="ts">
import { computed, ref } from "vue";
import CpTabs from "@/components/commons/CpTabs.vue";
import CpRadioGroup from "@/components/commons/CpRadioGroup.vue";
import TreeEmpty from "@/components/main/TreeEmpty.vue";
import TreeItemEmpty from "@/components/main/TreeItemEmpty.vue";
import TreePreview from "@/components/main/TreePreview.vue";
import TreeItemPreview from "@/components/main/TreeItemPreview.vue";
import { TreeItemListItem } from "@/composables/use-main-api";

const props = defineProps<{
  treeList: TreeDetailResponseDto[];
  treeItemList: TreeItemListItem[];
}>();

defineEmits<{
  (e: "create:tree"): void;
  (e: "click:tree", treeId: string): void;
}>();

const activeMainTab = ref("myTree");
const mainTabs = [
  {
    label: "내트리",
    name: "myTree",
  },
  {
    label: "미공유트리",
    name: "notYetSendTree",
  },
  {
    label: "내트리아이템",
    name: "myTreeItem",
  },
];

const activeMyTreeTab = ref("entire");
const activeNotYetSendTreeTab = ref("entire");
const treeTabs = [
  { label: "전체", name: "entire" },
  { label: "혼자보는", name: "only" },
  { label: "다같이 보는", name: "together" },
];

const myTree = computed<TreeDetailResponseDto[]>(() => {
  return props.treeList.filter((item) => {
    return item.ownerType === "MINE";
  });
});

const notYetSendTree = computed<TreeDetailResponseDto[]>(() => {
  return props.treeList.filter((item) => {
    return item.ownerType === "NOT_YET_SEND";
  });
});
</script>

<style scoped lang="scss">
.content-wrap {
  flex: 1;
  background-color: var(--cp-color-red);
  display: flex;
  flex-direction: column;

  .main-tab-content-wrap {
    flex: 1 0;
    background-color: var(--cp-color-white);
    display: flex;
    flex-direction: column;

    .title {
      margin: var(--cp-number-16);
    }
    .tree-tab-content-wrap {
      flex: 1;
      width: 100%;
      display: grid;
      overflow-y: scroll;
      margin-top: var(--cp-number-12);
      grid-template-columns: repeat(2, 1fr);
      grid-gap: var(--cp-number-12);
    }

    .tree-item-tab-content-wrap {
      flex: 1;
      width: 100%;
      display: grid;
      overflow-y: scroll;
      margin-top: var(--cp-number-12);
      grid-template-columns: repeat(2, 1fr);
      grid-gap: var(--cp-number-12);
    }
  }
}
</style>
