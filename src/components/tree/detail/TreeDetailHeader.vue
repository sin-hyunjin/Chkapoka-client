<template>
  <div class="tree-detail-header">
    <cp-icon-button
      class="left"
      type="withText"
      text-align="end"
      bg-color="transparent"
      @click="$emit('back')"
    >
      <template #icon>
        <icon-arrow-left />
      </template>
      <template #text>뒤로가기</template>
    </cp-icon-button>
    <div class="right">
      <el-dropdown v-if="isMyTree">
        <cp-icon-button class="left" type="icon" bg-color="transparent">
          <template #icon>
            <icon-more />
          </template>
        </cp-icon-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="$emit('edit')">편집</el-dropdown-item>
            <el-dropdown-item @click="$emit('delete')">삭제</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeDetailHeader",
});
</script>

<script setup lang="ts">
import CpIconButton from "@/components/commons/CpIconButton.vue";
import IconArrowLeft from "@/components/commons/images/IconArrowLeft.vue";
import IconMore from "@/components/commons/images/IconMore.vue";
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from "element-plus";

defineProps<{
  isMyTree?: boolean;
}>();

defineEmits<{
  (e: "back"): void;
  (e: "edit"): void;
  (e: "delete"): void;
}>();
</script>

<style scoped lang="scss">
.tree-detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
