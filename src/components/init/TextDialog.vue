<template>
  <cp-dialog
    :model-value="visible"
    margin-top="50px"
    width="auto"
    :fullscreen="false"
    align-center
    center
    :before-close="() => $emit('close')"
    @close="$emit('close')"
  >
    <template #header>
      <div class="header cp-text-head-4">
        {{ type === "tos" ? "이용약관" : "개인정보 처리방침" }}
      </div>
    </template>
    <template #default>
      <div class="body">
        {{ type === "tos" ? "이용약관" : "개인정보 처리방침" }}
      </div>
    </template>
    <template #footer>
      <div class="footer">
        <cp-button type="solid" @click="$emit('close')"> 닫기 </cp-button>
      </div>
    </template>
  </cp-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TextDialog",
});
</script>

<script setup lang="ts">
import CpDialog from "@/components/commons/CpDialog.vue";
import CpButton from "@/components/commons/CpButton.vue";

defineProps<{
  visible: boolean;
  type: "tos" | "pp";
}>();

defineEmits<{
  (e: "close"): void;
}>();
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  color: var(--cp-color-black);
}

.body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
