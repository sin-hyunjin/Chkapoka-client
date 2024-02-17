<template>
  <svg
    width="23"
    height="16"
    viewBox="0 0 23 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.75 1.33333C0.75 0.595833 1.34583 0 2.08333 0H21.0833C21.8208 0 22.4167 0.595833 22.4167 1.33333C22.4167 2.07083 21.8208 2.66667 21.0833 2.66667H2.08333C1.34583 2.66667 0.75 2.07083 0.75 1.33333ZM0.75 8C0.75 7.2625 1.34583 6.66667 2.08333 6.66667H21.0833C21.8208 6.66667 22.4167 7.2625 22.4167 8C22.4167 8.7375 21.8208 9.33334 21.0833 9.33334H2.08333C1.34583 9.33334 0.75 8.7375 0.75 8ZM22.4167 14.6667C22.4167 15.4042 21.8208 16 21.0833 16H2.08333C1.34583 16 0.75 15.4042 0.75 14.6667C0.75 13.9292 1.34583 13.3333 2.08333 13.3333H21.0833C21.8208 13.3333 22.4167 13.9292 22.4167 14.6667Z"
      :fill="fillColor"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconNotification",
});
</script>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

withDefaults(
  defineProps<{
    fillColor?: string;
  }>(),
  {
    fillColor: "var(--cp-color-red)",
  },
);
</script>
<style scoped lang="scss">
svg {
  &:hover {
    fill: var(--cp-color-red-light);
  }
}
</style>
