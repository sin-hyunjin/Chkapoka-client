<template>
  <div class="cp-layout-tablet-container">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CpLayoutTablet",
});
</script>

<script setup lang="ts"></script>

<style scoped lang="scss">
.cp-layout-tablet-container {
  max-width: var(--cp-tablet-max-width);
  height: 100%;
  margin: 0 auto;
}
</style>
