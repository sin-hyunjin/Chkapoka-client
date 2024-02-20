<template>
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.4686 21.7202C19.7415 20.5633 23.1114 15.2321 21.9955 9.8127C20.8795 4.39329 15.7004 0.937884 10.4275 2.09483C5.15457 3.25177 1.78469 8.58295 2.90062 14.0024C3.2845 15.8666 4.14921 17.4985 5.33316 18.7901L5.02495 24.3453L10.1068 21.6549C11.4934 22.0057 12.9772 22.0475 14.4686 21.7202Z"
      fill="#FF9F9F"
    />
    <path
      d="M14.2248 8.00546L13.4445 8.81079L15.5402 10.9739L16.3204 10.1685C16.7234 9.75256 16.7234 9.07868 16.3204 8.6627L15.6853 8.00546C15.2823 7.58949 14.6294 7.58949 14.2264 8.00546H14.2248ZM13.0802 9.18683L9.32259 13.067C9.15494 13.2401 9.03242 13.4547 8.96472 13.6893L8.39406 15.691C8.35376 15.8325 8.39084 15.9839 8.49078 16.087C8.59073 16.1902 8.73742 16.2285 8.87283 16.1885L10.8121 15.5995C11.0394 15.5296 11.2474 15.4032 11.415 15.2301L15.1759 11.3499L13.0802 9.18683Z"
      fill="#FEFCF8"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconTree",
});
</script>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

withDefaults(
  defineProps<{
    fillColor?: string;
  }>(),
  {
    fillColor: "var(--cp-color-grey-100)",
  },
);
</script>
