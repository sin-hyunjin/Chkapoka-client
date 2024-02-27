<template>
  <svg
    width="65"
    height="65"
    viewBox="0 0 65 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="32.5"
      cy="32.5"
      r="31.5"
      stroke="#FFABAB"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-dasharray="10 10"
    />
    <rect x="19" y="32" width="28" height="2" rx="1" fill="#FF9F9F" />
    <rect
      x="34"
      y="19"
      width="28"
      height="2"
      rx="1"
      transform="rotate(90 34 19)"
      fill="#FF9F9F"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconPlusDashCircle",
});
</script>
