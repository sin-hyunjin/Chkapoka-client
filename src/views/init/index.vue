<template>
  <chuka-poka-init-container
    :layout-type="layoutType"
    :link-id="route.query['linkId'] as string | undefined"
  />
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
import { useRoute } from "vue-router";
const route = useRoute();

defineProps<{
  layoutType: LayoutType;
}>();
</script>

<style scoped lang="scss"></style>
