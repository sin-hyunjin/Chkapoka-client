<template>
  <cp-dialog
    :model-value="visible"
    :fullscreen="false"
    :use-header="false"
    :use-footer="false"
    margin-top="50px"
    :before-close="() => title.length !== 0 && $emit('close')"
    align-center
    @close="title.length !== 0 && $emit('close')"
  >
    <template #default>
      <div class="container">
        <div class="header cp-text-head-4">트리 제목 작성하기</div>
        <div class="body">
          <cp-input
            v-model="innerTitle"
            class="input title"
            autofocus
            width="auto"
            height="auto"
            bgColor="var(--cp-color-white)"
            placeholder="트리제목 입력해주세요! 🌲"
            placeholderTextColor="var(--cp-color-gray-500)"
          />
        </div>
        <div class="footer">
          <cp-button
            type="solid"
            width="auto"
            height="auto"
            :disabled="innerTitle.length === 0"
            @click="$emit('save', innerTitle)"
          >
            저장
          </cp-button>
          <cp-button
            type="outlined"
            width="auto"
            height="auto"
            :disabled="title.length === 0"
            @click="title.length !== 0 && $emit('close')"
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
  name: "EditTreeTitleDialog",
});
</script>

<script setup lang="ts">
import CpDialog from "@/components/commons/CpDialog.vue";
import CpButton from "@/components/commons/CpButton.vue";
import CpInput from "@/components/commons/CpInput.vue";

const props = defineProps<{
  visible: boolean;
  title: string;
}>();

defineEmits<{
  (e: "save", title: string): void;
  (e: "close"): void;
}>();

const innerTitle = ref<string>(props.title);
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
    width: 100%;
    align-items: center;
    margin: var(--cp-number-24) 0;
  }

  .footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}
</style>
