<template>
  <div class="cp-layout-web-container"><slot /></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CpLayouWeb",
});
</script>

<script setup lang="ts"></script>

<style scoped lang="scss">
.cp-layout-web-container {
  max-width: var(--cp-web-max-width);
  height: 100%;
  margin: 0 auto;
}
</style>
