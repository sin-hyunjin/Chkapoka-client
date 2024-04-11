<template>
  <cp-dialog
    :model-value="visible"
    :fullscreen="false"
    :use-header="false"
    :use-footer="false"
    margin-top="50px"
    :before-close="() => $emit('close')"
    align-center
    @close="$emit('close')"
  >
    <template #default>
      <div class="container">
        <div class="header cp-text-head-4">트리 삭제하기</div>
        <div class="body">
          <div class="text-1 cp-text-main-1">트리를 정말 삭제하겠습니까?</div>
          <div class="text-2 cp-text-main-4">
            트리에 포함된 트리 아이템도 함께 삭제됩니다.
          </div>
        </div>
        <div class="footer">
          <cp-button
            type="solid"
            width="auto"
            height="auto"
            @click="$emit('delete')"
          >
            삭제
          </cp-button>
          <cp-button
            type="outlined"
            width="auto"
            height="auto"
            @click="$emit('close')"
          >
            닫기
          </cp-button>
        </div>
      </div>
    </template>
  </cp-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeDeleteDialog",
});
</script>

<script setup lang="ts">
import CpDialog from "@/components/commons/CpDialog.vue";
import CpButton from "@/components/commons/CpButton.vue";

defineProps<{
  visible: boolean;
}>();

defineEmits<{
  (e: "delete"): void;
  (e: "close"): void;
}>();
</script>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .header {
    display: flex;
    align-items: center;
    color: var(--cp-color-black);
  }

  .body {
    display: flex;
    flex-direction: column;
    margin: var(--cp-number-24) 0;

    .text-2 {
      margin-top: var(--cp-number-4);
    }
  }

  .footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}
</style>
