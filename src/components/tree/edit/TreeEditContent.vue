<template>
  <div class="tree-edit-content">
    <!-- Content Header 부분 -->
    <div class="info">
      <div class="text">
        <div class="title cp-text-head-2">
          <span>{{ formData.title }}</span>
          <cp-icon-button type="icon" @click="$emit('edit:title')">
            <template #icon>
              <icon-edit-pen />
            </template>
          </cp-icon-button>
        </div>
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
  <edit-bg-type-dialog
    v-if="visibleEditBgTypeDialog"
    :visible="visibleEditBgTypeDialog"
    :tree-type="formData.treeType"
    :bg-type="formData.bgType"
    @edit="
      emits('update:formData', 'bgType', $event);
      updateVisibleEditBgTypeDialog(false);
    "
    @close="updateVisibleEditBgTypeDialog(false)"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeEditContent",
});
</script>

<script setup lang="ts">
// import CpInput from "@/components/commons/CpInput.vue";
import CpIconButton from "@/components/commons/CpIconButton.vue";
import IconEditButton from "@/components/commons/images/IconEditButton.vue";
import TreeImageView from "@/components/tree/TreeImageView.vue";
import { TreeEditFormData } from "@/composables/use-tree-edit-controller";
import EditTreeTypeDialog from "@/components/tree/create/EditTreeTypeDialog.vue";
import EditBgTypeDialog from "@/components/tree/create/EditBgTypeDialog.vue";
import { ref } from "vue";
import IconEditPen from "@/components/commons/images/IconEditPen.vue";

defineProps<{
  formData: TreeEditFormData;
}>();

const emits = defineEmits<{
  (e: "edit:title"): void;
  <K extends keyof TreeEditFormData>(
    e: "update:formData",
    key: K,
    value: TreeEditFormData[K],
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
.tree-edit-content {
  flex: 1;
  display: flex;
  flex-direction: column;

  .info .text {
    padding: 32px 0px 12px 16px;

    .title {
      color: #644444;
    }

    .date {
      margin-top: 12px;
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
