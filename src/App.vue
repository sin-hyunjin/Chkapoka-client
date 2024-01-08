<template>
  <div class="wrap">
    <router-view :layout-type="layoutType"></router-view>
  </div>
</template>

<script setup lang="ts">
import { useWindowSizeWrap } from "@/composables/use-window-size-wrap";
const { layoutType } = useWindowSizeWrap();
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100vh;
  padding: 16px;
}
</style>
