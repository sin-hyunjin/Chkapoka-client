<template>
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.7509 0.678467L11.0494 2.38003L15.6197 6.95034L17.3212 5.24878C18.2001 4.36987 18.2001 2.94604 17.3212 2.06714L15.9361 0.678467C15.0572 -0.200439 13.6333 -0.200439 12.7544 0.678467H12.7509ZM10.2548 3.17456L2.05991 11.373C1.69429 11.7386 1.4271 12.1921 1.27944 12.6878L0.0349126 16.9171C-0.052978 17.216 0.0278813 17.5359 0.24585 17.7539C0.463819 17.9718 0.783741 18.0527 1.07905 17.9683L5.30835 16.7238C5.80405 16.5761 6.25757 16.3089 6.62319 15.9433L14.8251 7.74487L10.2548 3.17456Z"
      fill="#644444"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconEditPen",
});
</script>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

withDefaults(
  defineProps<{
    fillColor?: string;
  }>(),
  {
    fillColor: "var(--cp-color-gray-100)",
  },
);
</script>
