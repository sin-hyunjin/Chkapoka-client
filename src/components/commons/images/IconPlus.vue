<template>
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    :fill="fillColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.175 0.100098C9.24993 0.100098 8.5 0.850013 8.5 1.7751V8.5H1.7749C0.849827 8.5 0.0999031 9.24992 0.0999031 10.175C0.0999031 11.1001 0.849817 11.85 1.7749 11.85H8.5V18.2251C8.5 19.1502 9.24992 19.9001 10.175 19.9001C11.1001 19.9001 11.85 19.1502 11.85 18.2251V11.85H18.2249C19.15 11.85 19.8999 11.1001 19.8999 10.175C19.8999 9.24993 19.15 8.5 18.2249 8.5H11.85V1.7751C11.85 0.850021 11.1001 0.100098 10.175 0.100098Z"
      :fill="fillColor"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconPlus",
});
</script>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

withDefaults(
  defineProps<{
    fillColor?: string;
  }>(),
  {
    fillColor: "var(--cp-color-white)",
  },
);
</script>
