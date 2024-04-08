<template>
  <cp-layout :layout-type="LayoutType.Mobile">
    <div class="tree-create-container" :style="innerStyle">
      <tree-create-header @back="back" />
      <tree-create-content
        :form-data="formData"
        @update:form-data="updateFormData"
        @edit:title="updateVisibleEditTreeTitleDialog(true)"
      />
      <tree-create-footer
        :is-valid="isValid"
        @create="updateVisibleSelectOptionsDialog(true)"
      />
    </div>
    <edit-tree-title-dialog
      v-if="visibleEditTreeTitleDialog"
      :visible="visibleEditTreeTitleDialog"
      :title="formData.title"
      @save="
        formData.title = $event;
        updateVisibleEditTreeTitleDialog(false);
      "
      @close="updateVisibleEditTreeTitleDialog(false)"
    />
    <select-options-dialog
      v-if="visibleSelectOptionsDialog"
      :visible="visibleSelectOptionsDialog"
      :owner-type="formData.ownerType"
      :share-type="formData.shareType"
      @save="
        formData.ownerType = $event.ownerType;
        formData.shareType = $event.shareType;
        updateVisibleSelectOptionsDialog(false);
        handleSave();
      "
      @close="updateVisibleSelectOptionsDialog(false)"
    />
  </cp-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeCreateContainer",
});
</script>

<script setup lang="ts">
import TreeCreateHeader from "@/components/tree/create/TreeCreateHeader.vue";
import TreeCreateContent from "@/components/tree/create/TreeCreateContent.vue";
import TreeCreateFooter from "@/components/tree/create/TreeCreateFooter.vue";
import { defineProps, computed, ref } from "vue";
import { LayoutType } from "@/composables/use-window-size-wrap";
import CpLayout from "@/components/commons/CpLayout.vue";
import {
  getBgColor,
  useTreeCreateController,
} from "@/composables/use-tree-create-controller";
import SelectOptionsDialog from "@/components/tree/create/SelectOptionsDialog.vue";
import { useCreateTree } from "@/composables/use-tree-create-api";
import { useRouter } from "vue-router";
import EditTreeTitleDialog from "@/components/tree/create/EditTreeTitleDialog.vue";

const router = useRouter();
defineProps<{
  layoutType: LayoutType;
}>();

const { formData, updateFormData, isValid } = useTreeCreateController();
const { mutate: save } = useCreateTree({
  onSuccess: (data) => {
    router.push({ name: "TreeDetail", params: { id: data.data.data.treeId } });
  },
});
const handleSave = () => {
  save(formData.value);
};

const visibleSelectOptionsDialog = ref<boolean>(false);
const updateVisibleSelectOptionsDialog = (visible: boolean) => {
  visibleSelectOptionsDialog.value = visible;
};

const visibleEditTreeTitleDialog = ref<boolean>(true);
const updateVisibleEditTreeTitleDialog = (visible: boolean) => {
  visibleEditTreeTitleDialog.value = visible;
};

const innerStyle = computed(() => {
  const { background, ground } = getBgColor(formData.value.bgType);
  return {
    "--background-color": background,
    "--ground-color": ground,
  };
});

const back = () => {
  router.push({ name: "ChukaPokaMain" });
};
</script>

<style scoped lang="scss">
.tree-create-container {
  background: var(--background-color);
  height: calc(100vh - 2rem);

  display: flex;
  flex-direction: column;
}
</style>
