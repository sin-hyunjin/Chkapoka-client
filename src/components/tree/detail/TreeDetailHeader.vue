<template>
  <div class="tree-detail-header">
    <cp-icon-button type="withText" text-align="end">
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
  name: "TreeDetailHeader",
});
</script>

<script setup lang="ts">
import CpIconButton from "@/components/commons/CpIconButton.vue";
import IconArrowLeft from "@/components/commons/images/IconArrowLeft.vue";
import { defineProps } from "vue";
defineProps<{
  id: string;
}>();
</script>

<style scoped lang="scss">
</style>
