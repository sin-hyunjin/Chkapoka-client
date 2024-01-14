<template>
  <svg
    width="13"
    height="24"
    viewBox="0 0 13 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 22L2 11.8462L11 2"
      :stroke="fillColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconArrowLeft",
});
</script>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

withDefaults(
  defineProps<{
    fillColor?: string;
  }>(),
  {
    fillColor: "var(--cp-color-black)",
  },
);
</script>
