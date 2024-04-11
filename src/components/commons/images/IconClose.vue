<template>
  <svg
    width="28"
    height="29"
    viewBox="0 0 28 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21.1242 7.72134C20.47 7.06721 19.4095 7.0672 18.7554 7.72134L14.0001 12.4766L9.24478 7.7212C8.59065 7.06707 7.5301 7.06707 6.87597 7.7212C6.22185 8.37532 6.22183 9.43587 6.87597 10.09L11.6313 14.8454L7.12346 19.3532C6.46933 20.0074 6.46933 21.0679 7.12346 21.7221C7.77758 22.3762 8.83813 22.3762 9.49226 21.7221L14.0001 17.2142L18.5079 21.7219C19.162 22.376 20.2226 22.376 20.8767 21.7219C21.5308 21.0678 21.5308 20.0072 20.8767 19.3531L16.3689 14.8454L21.1242 10.0901C21.7783 9.43602 21.7783 8.37547 21.1242 7.72134Z"
      :fill="fillColor"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconClose",
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
<style scoped lang="scss">
svg {
  &:hover {
    fill: var(--cp-color-gray-100);
  }
}
</style>
