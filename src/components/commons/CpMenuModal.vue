<template>
  <el-drawer
    :model-value="visible"
    :before-close="() => $emit('close')"
    @close="$emit('close')"
  >
    <slot />
  </el-drawer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CpMenuModal",
});
</script>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { ElDrawer } from "element-plus";

/** Props 정의 */
defineProps<{
  visible: boolean;
}>();

/** close 이벤트를 발신하기 위한 emit 함수 정의 */
defineEmits<{
  (e: "close"): void;
}>();
</script>

<style scoped lang="scss"></style>
