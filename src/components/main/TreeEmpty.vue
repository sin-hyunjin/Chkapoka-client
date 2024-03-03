<template>
  <div class="tree-empty-container" @click="$emit('click:add')">
    <div class="add-btn">
      <cp-icon-button
        type="withText"
        text-align="bottom"
        bg-color="transparent"
        hover-bg-color="transparent"
      >
        <template #icon><icon-plus-dash-circle /></template>
        <template #text>나무 심으러 가기</template>
      </cp-icon-button>
    </div>
    <div class="green-ground"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeEmpty",
});
</script>
<script setup lang="ts">
import { defineEmits } from "vue";
import CpIconButton from "@/components/commons/CpIconButton.vue";
import IconPlusDashCircle from "@/components/commons/images/IconPlusDashCircle.vue";

defineEmits<{
  (e: "click:add"): void;
}>();
</script>

<style scoped lang="scss">
.tree-empty-container {
  margin: var(--cp-number-12) var(--cp-number-16);
  display: flex;
  flex-direction: column;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  .add-btn {
    height: 150px;
    background-color: #fefcf8;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .green-ground {
    height: 20px;
    background-color: #cbe8bf;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
}
</style>
