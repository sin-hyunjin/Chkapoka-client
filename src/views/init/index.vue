<template>
  <chuka-poka-init-container :layout-type="layoutType" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChukaPokaInit",
});
</script>

<script setup lang="ts">
import ChukaPokaInitContainer from "@/containers/init/ChukaPokaInitContainer.vue";
import { LayoutType } from "@/composables/use-window-size-wrap";
defineProps<{
  layoutType: LayoutType;
}>();
</script>

<style scoped lang="scss"></style>
