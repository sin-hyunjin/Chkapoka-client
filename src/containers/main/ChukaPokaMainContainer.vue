<template>
  <cp-layout :layout-type="LayoutType.Mobile">
    <div class="main-container-wrap">
      <chuka-poka-main-header />
      <chuka-poka-main-content />
    </div>
  </cp-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChukaPokaMainContainer",
});
</script>

<script setup lang="ts">
import ChukaPokaMainHeader from "@/components/main/ChukaPokaMainHeader.vue";
import ChukaPokaMainContent from "@/components/main/ChukaPokaMainContent.vue";
import CpLayout from "@/components/commons/CpLayout.vue";
import { LayoutType } from "@/composables/use-window-size-wrap";

defineProps<{
  layoutType: LayoutType;
}>();
</script>

<style scoped lang="scss">
.main-container-wrap {
  width: 100%;
  height: 100%;
  background-color: var(--cp-color-red);
  display: flex;
  flex-direction: column;
}
</style>
