<template>
  <cp-dialog
    :model-value="visible"
    margin-top="50px"
    :fullscreen="false"
    align-center
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :show-close="false"
  >
    <template #header>
      <div class="header cp-text-head-4">
        누군가로부터 트리를 전달받았습니다!
      </div>
    </template>
    <template #default>
      <div class="body"></div>
    </template>
    <template #footer>
      <div class="footer">
        <cp-button type="solid" @click="$emit('access')">
          트리 전달받기
        </cp-button>
      </div>
    </template>
  </cp-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GoToInitDialog",
});
</script>

<script setup lang="ts">
import CpDialog from "@/components/commons/CpDialog.vue";
import CpButton from "@/components/commons/CpButton.vue";

defineProps<{
  visible: boolean;
}>();

defineEmits<{
  (e: "access"): void;
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
