<template>
  <div class="content-wrap">
    <cp-tabs
      v-model:active-tab="activeMainTab"
      :tabs="mainTabs"
      :stretch="true"
    />
    <div class="main-tab-content-wrap">
      <template v-if="activeMainTab === 'myTree'">
        <div class="title cp-text-head-4">아직 나무를 심지 않으셨군요!</div>
        <tree-empty />
        <div class="title cp-text-head-4">내가 만든 트리</div>
        <cp-radio-group
          v-model="activeTreeTab"
          type="button"
          :items="treeTabs"
          :stretch="true"
        />
        <div class="tree-tab-content-wrap">
          <template v-if="activeTreeTab === 'entire'">
            <tree-preview
              v-for="(data, idx) in treePreviews"
              :key="idx"
              :data="data"
            />
          </template>
          <template v-if="activeTreeTab === 'alone'">
            {{ activeTreeTab }}
          </template>
          <template v-if="activeTreeTab === 'together'">
            {{ activeTreeTab }}
          </template>
          <template v-if="activeTreeTab === 'new'">
            {{ activeTreeTab }}
          </template>
        </div>
      </template>
      <template v-else-if="activeMainTab === 'notYetSendTree'">{{
        activeMainTab
      }}</template>
      <template v-else-if="activeMainTab === 'myTreeItem'">{{
        activeMainTab
      }}</template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChukaPokaMainContent",
});
</script>
<script setup lang="ts">
import { ref } from "vue";
import CpTabs from "@/components/commons/CpTabs.vue";
import CpRadioGroup from "@/components/commons/CpRadioGroup.vue";
import TreeEmpty from "@/components/main/TreeEmpty.vue";
import TreePreview from "@/components/main/TreePreview.vue";

const activeMainTab = ref("myTree");
const mainTabs = [
  {
    label: "내트리",
    name: "myTree",
  },
  {
    label: "공유받은트리",
    name: "notYetSendTree",
  },
  {
    label: "내트리아이템",
    name: "myTreeItem",
  },
];

const activeTreeTab = ref("entire");
const treeTabs = [
  { label: "전체", name: "entire" },
  { label: "혼자보는", name: "alone" },
  { label: "다같이 보는", name: "together" },
  { label: "새로만든", name: "new" },
];

const treePreviews = [
  {
    title: "나무 이름을 적는 곳",
    updatedAt: "2023.12.31",
  },
  {
    title: "나무 이름을 적는 곳",
    updatedAt: "2023.12.31",
  },
  {
    title: "나무 이름을 적는 곳",
    updatedAt: "2023.12.31",
  },
  {
    title: "나무 이름을 적는 곳",
    updatedAt: "2023.12.31",
  },
  {
    title: "나무 이름을 적는 곳",
    updatedAt: "2023.12.31",
  },
  {
    title: "나무 이름을 적는 곳",
    updatedAt: "2023.12.31",
  },
  {
    title: "나무 이름을 적는 곳",
    updatedAt: "2023.12.31",
  },
  {
    title: "나무 이름을 적는 곳",
    updatedAt: "2023.12.31",
  },
];
/** TEMP */
</script>

<style scoped lang="scss">
.content-wrap {
  flex: 1;
  background-color: var(--cp-color-red);
  display: flex;
  flex-direction: column;

  .main-tab-content-wrap {
    flex: 1;
    background-color: var(--cp-color-white);
    display: flex;
    flex-direction: column;

    .title {
      margin: var(--cp-number-16);
    }
    .tree-tab-content-wrap {
      flex: 1;
      display: grid;
      overflow-y: scroll;
      margin-top: var(--cp-number-12);
      grid-template-columns: repeat(2, 1fr);
      grid-gap: var(--cp-number-12);
    }
  }
}
</style>
