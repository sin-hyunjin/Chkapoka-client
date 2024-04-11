<template>
  <cp-layout :layout-type="LayoutType.Mobile">
    <div class="tree-edit-container" :style="innerStyle">
      <tree-edit-header @back="back" />
      <tree-edit-content
        :form-data="formData"
        @update:form-data="updateFormData"
        @edit:title="updateVisibleEditTreeTitleDialog(true)"
      />
      <tree-edit-footer
        :is-valid="isValid"
        @edit="updateVisibleSelectOptionsDialog(true)"
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
        edit(formData);
      "
      @close="updateVisibleSelectOptionsDialog(false)"
    />
  </cp-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTreeEditController } from "@/composables/use-tree-edit-controller";
import { useFetchTreeDetail } from "@/composables/use-tree-detail-api";
import { useEditTree } from "@/composables/use-tree-edit-api";

export default defineComponent({
  name: "TreeEditContainer",
});
</script>

<script setup lang="ts">
import TreeEditHeader from "@/components/tree/edit/TreeEditHeader.vue";
import TreeEditContent from "@/components/tree/edit/TreeEditContent.vue";
import TreeEditFooter from "@/components/tree/edit/TreeEditFooter.vue";
import { defineProps, computed, ref } from "vue";
import { LayoutType } from "@/composables/use-window-size-wrap";
import CpLayout from "@/components/commons/CpLayout.vue";
import { getBgColor } from "@/composables/use-tree-create-controller";
import SelectOptionsDialog from "@/components/tree/create/SelectOptionsDialog.vue";
import { useRouter } from "vue-router";
import EditTreeTitleDialog from "@/components/tree/create/EditTreeTitleDialog.vue";

const router = useRouter();
const props = defineProps<{
  layoutType: LayoutType;
  treeId: string;
}>();

const { resultData: prevData } = useFetchTreeDetail(
  computed(() => props.treeId),
);
const { formData, updateFormData, isValid } = useTreeEditController(prevData);
const { mutate: edit } = useEditTree(
  computed(() => props.treeId),
  {
    onSuccess: (data) => {
      router.push({
        name: "TreeDetail",
        params: { id: data.data.data.treeId },
      });
    },
  },
);

const visibleSelectOptionsDialog = ref<boolean>(false);
const updateVisibleSelectOptionsDialog = (visible: boolean) => {
  visibleSelectOptionsDialog.value = visible;
};

const visibleEditTreeTitleDialog = ref<boolean>(false);
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
  router.push({ name: "TreeDetail", params: { id: props.treeId } });
};
</script>

<style scoped lang="scss">
.tree-edit-container {
  background: var(--background-color);
  height: calc(100vh - 2rem);

  display: flex;
  flex-direction: column;
}
</style>
