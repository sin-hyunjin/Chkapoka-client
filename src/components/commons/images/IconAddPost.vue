<template>
  <svg
    width="27"
    height="27"
    viewBox="0 0 27 27"
    :fill="fillColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.1759 2.49441L20.974 0.696504H20.9777C21.9064 -0.232168 23.411 -0.232168 24.3397 0.696504L25.8034 2.16381C26.7322 3.09248 26.7322 4.59693 25.8034 5.5256L24.0054 7.32351L19.1759 2.49441ZM9.67672 11.9966L18.3363 3.33393L23.1658 8.16303L14.4988 16.8257C14.1124 17.212 13.6332 17.4943 13.1094 17.6504L8.64024 18.9654C8.32819 19.0545 7.99012 18.9691 7.75979 18.7388C7.52946 18.5084 7.44402 18.1704 7.53689 17.8547L8.852 13.3859C9.00803 12.8621 9.29036 12.3829 9.67672 11.9966ZM8.77811 10.1447L17.0422 2H6C2.68629 2 0 4.68629 0 8V21C0 24.3137 2.68629 27 6 27H19C22.3137 27 25 24.3137 25 21V9.30412L16.4539 17.8211C15.8249 18.4481 15.051 18.9005 14.2134 19.1492L14.207 19.1511L9.7031 20.4724L9.69553 20.4745C8.69423 20.7597 7.60175 20.4897 6.8498 19.7401C6.09378 18.9864 5.82021 17.8848 6.11932 16.871L7.4444 12.3818C7.69467 11.5442 8.14915 10.7718 8.77811 10.1447Z"
      :fill="fillColor"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconAddPost",
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
    fill: var("--cp-color-red-light");
  }
}
</style>
<style scoped lang="scss">
svg {
  &:hover {
    fill: var(--cp-color-red-light);
  }
}
</style>
