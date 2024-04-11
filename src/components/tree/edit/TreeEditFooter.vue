<template>
  <div class="tree-edit-footer">
    <cp-button type="solid" :disabled="!isValid" @click="$emit('edit')">
      트리 수정하기
    </cp-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeEditFooter",
});
</script>

<script setup lang="ts">
import CpButton from "@/components/commons/CpButton.vue";

defineProps<{
  isValid: boolean;
}>();

defineEmits<{
  (e: "edit"): void;
}>();
</script>

<style scoped lang="scss">
.tree-edit-footer {
  height: 20%;
  background-color: var(--ground-color);

  display: flex;
  justify-content: center;
  align-items: center;

  .menu {
    &__container:focus {
      transform: rotate(45deg);
    }
    &__item:active {
      transform: scale(0.95);
    }
  }
}
</style>
