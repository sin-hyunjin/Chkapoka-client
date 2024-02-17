<template>
  <div class="main-container-wrap">
    <chuka-poka-main-header />
    <chuka-poka-main-content />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChukaPokaMain",
});
</script>

<script setup lang="ts">
import ChukaPokaMainHeader from "@/components/main/ChukaPokaMainHeader.vue";
import ChukaPokaMainContent from "@/components/main/ChukaPokaMainContent.vue";
</script>

<style scoped lang="scss">
.main-container-wrap {
  background-color: var(--cp-color-red);
  display: flex;
  flex-direction: column;
}
</style>
