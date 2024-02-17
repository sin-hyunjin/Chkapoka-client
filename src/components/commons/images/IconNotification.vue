<template>
  <svg
    width="18"
    height="20"
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9 0.571533C8.28877 0.571533 7.71416 1.1022 7.71416 1.75903V2.47153C4.78083 3.02075 2.57079 5.41802 2.57079 8.29028V9.23286C2.57079 10.9176 1.94796 12.5541 0.81079 13.8678L0.212069 14.5618C-0.0209898 14.829 -0.0651907 15.1963 0.0955397 15.5043C0.25627 15.8124 0.593804 16.009 0.963484 16.009H17.0365C17.4062 16.009 17.7437 15.8124 17.9045 15.5043C18.0652 15.1963 18.021 14.829 17.7879 14.5618L17.1892 13.8715C16.052 12.5542 15.4292 10.9176 15.4292 9.23286V8.29028C15.4292 5.41802 13.2192 3.02075 10.2858 2.47153V1.75903C10.2858 1.1022 9.71123 0.571533 9 0.571533ZM9 17.1965H6.42832C6.42832 17.8274 6.69754 18.4323 7.17973 18.8776C7.66192 19.3229 8.3169 19.5715 9 19.5715C9.68311 19.5715 10.3381 19.3229 10.8203 18.8776C11.3025 18.4323 11.5717 17.8274 11.5717 17.1965H9Z"
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
