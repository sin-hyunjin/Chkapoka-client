<template>
  <div>
    <cp-dialog v-model="visible" :use-footer="false">
      <template #header>
        <div>알림</div>
      </template>
      <div>body</div>
    </cp-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ChukaPokaMainHeader",
});
</script>
<script setup lang="ts">
import CpDialog from "../commons/CpDialog.vue";

const visible = ref<boolean>(true);
</script>

<style scoped lang="scss"></style>
