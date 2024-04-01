<template>
  <div class="tree-detail-footer">
    <cp-button type="solid" @click="$emit('link')"> 초대하기 </cp-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeDetailFooter",
});
</script>

<script setup lang="ts">
import CpButton from "@/components/commons/CpButton.vue";

defineEmits<{
  (e: "link"): void;
}>();
</script>

<style scoped lang="scss">
.tree-detail-footer {
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
