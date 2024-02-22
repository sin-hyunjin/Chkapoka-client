<template>
  <chuka-poka-main-container :layout-type="layoutType" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ChukaPokaMain",
});
</script>

<script setup lang="ts">
import ChukaPokaMainContainer from "@/containers/main/ChukaPokaMainContainer.vue";
import { LayoutType } from "@/composables/use-window-size-wrap";
defineProps<{
  layoutType: LayoutType;
}>();
</script>

<style scoped lang="scss"></style>
