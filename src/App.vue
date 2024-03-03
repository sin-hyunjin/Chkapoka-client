<template>
  <div class="wrap">
    <router-view :layout-type="layoutType"></router-view>
  </div>
</template>

<script setup lang="ts">
import { useWindowSizeWrap } from "@/composables/use-window-size-wrap";
import { useHandleRoutingWithToken } from "@/composables/use-handle-routing-with-token";
const { layoutType } = useWindowSizeWrap();
useHandleRoutingWithToken();
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100vh;
  padding: var(--cp-number-16);
}
</style>
