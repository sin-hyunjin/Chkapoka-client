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
        <div class="header cp-text-head-4">트리 완성하기</div>
        <div class="body">
          <div class="select-type">
            <div class="title cp-text-title-2">트리 소유자 유형</div>
            <cp-radio-group
              v-model="innerOwnerType"
              type="button"
              :items="ownerTypeItems"
            />
          </div>
        </div>
        <div class="footer">
          <cp-button
            type="solid"
            width="auto"
            height="auto"
            @click="$emit('save', innerOwnerType)"
          >
            트리 완성하기
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
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SelectOwnerTypeDialog",
});
</script>

<script setup lang="ts">
import CpDialog from "@/components/commons/CpDialog.vue";
import CpButton from "@/components/commons/CpButton.vue";
import CpRadioGroup from "@/components/commons/CpRadioGroup.vue";
const props = defineProps<{
  visible: boolean;
  ownerType: "MINE" | "NOT_YET_SEND";
}>();

defineEmits<{
  (e: "save", ownerType: "MINE" | "NOT_YET_SEND"): void;
  (e: "close"): void;
}>();

const innerOwnerType = ref<"MINE" | "NOT_YET_SEND">(props.ownerType);
const ownerTypeItems = [
  { label: "내트리", name: "MINE" },
  { label: "미부여 트리", name: "NOT_YET_SEND" },
];
</script>

<style scoped lang="scss">
.container {
  margin: 0 auto;

  width: 80%;
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
    width: 100%;
    align-items: center;
    margin: var(--cp-number-24) 0;
    .select-type {
      color: var(--cp-color-black);

      .title {
        margin-bottom: var(--cp-number-8);
      }
    }
  }

  .footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}
</style>
