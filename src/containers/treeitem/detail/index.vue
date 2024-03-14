<template>
  <div class="dialog">
    <cp-dialog v-model="visible">
      <template #header>
        <div class="header">아이템 작성</div>
      </template>
      <div>편지지 선택하기</div>
      <div class="letter-select">
        <tree-edit-select-tree-card type="backgroundCard" />
        <tree-edit-select-tree-card type="backgroundCard" />
        <tree-edit-select-tree-card type="backgroundCard" />
        <tree-edit-select-tree-card type="backgroundCard" />
        <tree-edit-select-tree-card type="backgroundCard" />
        <tree-edit-select-tree-card type="backgroundCard" />
        <tree-edit-select-tree-card type="backgroundCard" />
        <tree-edit-select-tree-card type="backgroundCard" />
      </div>
      <div class="letter"><cp-letter /></div>

      <template #footer>
        <div class="footer">
          <cp-button type="solid">편지쓰기</cp-button>
        </div>
      </template>
    </cp-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeItemDetail",
});
</script>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import CpDialog from "@/components/commons/CpDialog.vue";
import CpButton from "@/components/commons/CpButton.vue";
import CpLetter from "@/components/commons/images/CpLetter.vue";
import TreeEditSelectTreeCard from "@/components/tree/edit/TreeEditSelectTreeCard.vue";
const visible = ref<boolean>(true);
defineProps<{
  id: string;
}>();
</script>

<style scoped lang="scss">
.dialog {
  overflow: auto;
}
.dialog::-webkit-scrollbar {
  display: none;
}

.header {
  align-items: center;
}

.letter-select {
  display: flex;
  // justify-content: space-between;
  overflow: auto;
  margin-top: var(--cp-number-12);

  > *:not(:first-child) {
    margin-left: var(--cp-number-8);
  }
}
.letter-select::-webkit-scrollbar {
  display: none;
}

.letter {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: var(--cp-number-24);
}

.footer {
  align-items: center;
}
</style>
