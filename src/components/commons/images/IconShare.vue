<template>
  <svg
    width="26"
    height="23"
    viewBox="0 0 26 23"
    :fill="fillColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.5898 0.144778C15.0059 0.406596 14.625 0.996972 14.625 1.64382V4.92938H8.9375C4.00156 4.92938 0 8.97474 0 13.9647C0 19.7812 4.13867 22.3788 5.08828 22.9025C5.21523 22.9743 5.35742 23 5.49961 23C6.05312 23 6.5 22.5431 6.5 21.9887C6.5 21.6036 6.28164 21.2494 6.00234 20.9876C5.525 20.5307 4.875 19.6323 4.875 18.0716C4.875 15.3508 7.05859 13.1433 9.75 13.1433H14.625V16.4289C14.625 17.0757 15.0008 17.6661 15.5898 17.9279C16.1789 18.1897 16.8594 18.0819 17.3367 17.6507L25.4617 10.2582C25.802 9.94501 26 9.50351 26 9.03634C26 8.56918 25.807 8.12768 25.4617 7.81452L17.3367 0.421998C16.8594 -0.0143668 16.1738 -0.122175 15.5898 0.144778Z"
      :fill="fillColor"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconShare",
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
svg{
  &:hover{
    fill: var(--cp-color-red-light);
  }
}
</style>