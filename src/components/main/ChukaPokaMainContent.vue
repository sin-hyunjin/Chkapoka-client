<template>
  <div class="content-wrap">
    <cp-tabs v-model:active-tab="activeTab" :tabs="tabs" :stretch="true" />
    <div class="tab-content-wrap">
      <template v-if="activeTab === 'myTree'">
        <div>
          {{ existTree }} <cp-button @click="toggle">나무 있음/없음</cp-button>
        </div>
        <template v-if="!existTree">
          <div class="title cp-text-head-4">아직 나무를 심지 않으셨군요!</div>
        </template>
        <template v-else>
          <div class="title cp-text-head-4">내가 만든 트리</div>
        </template>
      </template>
      <template v-else-if="activeTab === 'notYetSendTree'"></template>
      <template v-else-if="activeTab === 'myTreeItem'"></template>
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
import CpButton from "@/components/commons/CpButton.vue";

const activeTab = ref("myTree");
const tabs = [
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

/** TEMP */
const existTree = ref<boolean>(false);
const toggle = () => {
  existTree.value = !existTree.value;
};
/** TEMP */
</script>

<style scoped lang="scss">
.content-wrap {
  flex: 1;
  background-color: var(--cp-color-red);

  display: flex;
  flex-direction: column;

  .tab-content-wrap {
    flex: 1;
    background-color: var(--cp-color-white);
    overflow-y: auto;

    .title {
      margin: var(--cp-number-16);
    }
  }
}
</style>
