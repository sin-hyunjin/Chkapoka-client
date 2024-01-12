<template>
  <div class="cp-layout-mobile-container">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CpLayoutMobile",
});
</script>

<script setup lang="ts"></script>

<style scoped lang="scss">
.cp-layout-mobile-container {
  max-width: 480px;
  height: 100%;
  margin: 0 auto;
}
</style>
