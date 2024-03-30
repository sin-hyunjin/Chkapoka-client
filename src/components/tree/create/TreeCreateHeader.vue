<template>
  <div class="tree-create-header">
    <cp-icon-button
      type="withText"
      text-align="end"
      bg-color="transparent"
      @click="$emit('back')"
    >
      <template #icon>
        <icon-arrow-left />
      </template>
      <template #text>뒤로가기</template>
    </cp-icon-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeCreateHeader",
});
</script>

<script setup lang="ts">
import CpIconButton from "@/components/commons/CpIconButton.vue";
import IconArrowLeft from "@/components/commons/images/IconArrowLeft.vue";

defineEmits<{
  (e: "back"): void;
}>();
</script>
