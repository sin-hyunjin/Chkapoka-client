<template>
  <div class="tree-create-content">
    <!-- Content Header 부분 -->
    <div class="info">
      <div class="text">
        <cp-input
          class="input title"
          :model-value="formData.title"
          width="auto"
          height="auto"
          bgColor="var(--cp-color-white)"
          placeholder="트리제목 입력해주세요! 🌲"
          placeholderTextColor="var(--cp-color-gray-500)"
          @update:model-value="emits('update:formData', 'title', $event)"
        />
        <div class="date cp-text-main-4">{{ new Date().toLocaleString() }}</div>
      </div>
    </div>
    <div class="body">
      <tree-image-view :tree-type="formData.treeType">
        <cp-icon-button
          class="tree-edit-button"
          type="withText"
          textAlign="end"
          bgColor="transparent"
          hoverBgColor="transparent"
          @click="updateVisibleEditTreeTypeDialog(true)"
        >
          <template #icon>
            <icon-edit-button />
          </template>
          <template #text> 트리 편집 </template>
        </cp-icon-button>
        <cp-icon-button
          class="bg-edit-button"
          type="withText"
          textAlign="end"
          bgColor="transparent"
          hoverBgColor="transparent"
          @click="updateVisibleEditBgTypeDialog(true)"
        >
          <template #icon>
            <icon-edit-button />
          </template>
          <template #text> 배경 편집 </template>
        </cp-icon-button>
      </tree-image-view>
    </div>
  </div>
  <edit-tree-type-dialog
    v-if="visibleEditTreeTypeDialog"
    :visible="visibleEditTreeTypeDialog"
    :tree-type="formData.treeType"
    :bg-type="formData.bgType"
    @edit="
      emits('update:formData', 'treeType', $event);
      updateVisibleEditTreeTypeDialog(false);
    "
    @close="updateVisibleEditTreeTypeDialog(false)"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeCreateContent",
});
</script>

<script setup lang="ts">
import CpInput from "@/components/commons/CpInput.vue";
import CpIconButton from "@/components/commons/CpIconButton.vue";
import IconEditButton from "@/components/commons/images/IconEditButton.vue";
import TreeImageView from "@/components/tree/TreeImageView.vue";
import { TreeCreateFormData } from "@/composables/use-tree-create-controller";
import EditTreeTypeDialog from "@/components/tree/create/EditTreeTypeDialog.vue";
import { ref } from "vue";

defineProps<{
  formData: TreeCreateFormData;
}>();

const emits = defineEmits<{
  <K extends keyof TreeCreateFormData>(
    e: "update:formData",
    key: K,
    value: TreeCreateFormData[K],
  ): void;
}>();

const visibleEditTreeTypeDialog = ref<boolean>(false);
const updateVisibleEditTreeTypeDialog = (visible: boolean) => {
  visibleEditTreeTypeDialog.value = visible;
};

const visibleEditBgTypeDialog = ref<boolean>(false);
const updateVisibleEditBgTypeDialog = (visible: boolean) => {
  visibleEditBgTypeDialog.value = visible;
};
</script>

<style scoped lang="scss">
.tree-create-content {
  flex: 1;
  display: flex;
  flex-direction: column;

  .info .text {
    padding: 32px 0px 12px 16px;

    .date {
      margin-top: 12px;
      margin-left: 8px;
      color: #adadad;
    }
  }

  .body {
    flex: 1;
    display: flex;
    justify-content: center;

    .tree-edit-button {
      position: absolute;
      left: 80%;

      &:hover {
        opacity: 0.7;
      }
    }

    .bg-edit-button {
      position: absolute;
      bottom: 0;
      left: 70%;

      &:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>
@/composables/use-tree-create-controller
