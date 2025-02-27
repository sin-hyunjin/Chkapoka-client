<template>
  <cp-layout :layout-type="LayoutType.Mobile">
    <div class="tree-detail-container" v-if="resultData" :style="innerStyle">
      <tree-detail-header
        :is-my-tree="resultData?.myTree"
        @back="back"
        @edit="edit"
        @delete="updateVisibleTreeDeleteDialog(true)"
      />
      <tree-detail-content
        :data="resultData"
        @click:tree-item="handleClickTreeItem"
      />
      <tree-detail-footer
        :data="resultData"
        @create:tree-item="updateVisibleCreateTreeItemDialog(true)"
        @link="handleLink"
        @share="handleShare"
      />
    </div>
  </cp-layout>
  <tree-delete-dialog
    v-if="visibleTreeDeleteDialog"
    :visible="visibleTreeDeleteDialog"
    @delete="handleDelete"
    @close="updateVisibleTreeDeleteDialog(false)"
  />
  <tree-item-create-dialog
    v-if="resultData && visibleCreateTreeItemDialog"
    :visible="visibleCreateTreeItemDialog"
    :tree-id="resultData.treeId"
    @close="updateVisibleCreateTreeItemDialog(false)"
    @create:tree-item="handleSaveTreeItem"
  />
  <tree-item-detail-dialog
    v-if="visibleDetailTreeItemDialog && detailTreeItemTarget"
    :visible="visibleDetailTreeItemDialog"
    :target="detailTreeItemTarget"
    @close="clearDetailTreeItemDialog()"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getBgColor } from "@/composables/use-tree-create-controller";
import { useDeleteTreeDetail } from "@/composables/use-tree-delete-api";
import { TreeItemCreateFormData } from "@/composables/use-tree-item-create-controller";

export default defineComponent({
  name: "TreeDetailContainer",
});
</script>

<script setup lang="ts">
import TreeDetailHeader from "@/components/tree/detail/TreeDetailHeader.vue";
import TreeDetailContent from "@/components/tree/detail/TreeDetailContent.vue";
import TreeDetailFooter from "@/components/tree/detail/TreeDetailFooter.vue";
import TreeDeleteDialog from "@/components/tree/detail/TreeDeleteDialog.vue";
import { computed, defineProps, ref } from "vue";
import { LayoutType } from "@/composables/use-window-size-wrap";
import CpLayout from "@/components/commons/CpLayout.vue";
import { useFetchTreeDetail } from "@/composables/use-tree-detail-api";
import { useRouter } from "vue-router";
import { ElNotification } from "element-plus";
import TreeItemCreateDialog from "@/components/treeItem/create/TreeItemCreateDialog.vue";
import TreeItemDetailDialog from "@/components/treeItem/detail/TreeItemDetailDialog.vue";
import { useCreateTreeItem } from "@/composables/use-tree-item-create-api";

const router = useRouter();

const props = defineProps<{
  id: string;
  layoutType: LayoutType;
}>();

const { resultData } = useFetchTreeDetail(computed(() => props.id));
const { mutate: mutateDelete } = useDeleteTreeDetail(
  computed(() => props.id),
  {
    onSuccess: () => {
      /** 삭제 성공시 메인리스트화면으로 이동 */
      router.push({ name: "ChukaPokaMain" });
    },
  },
);

const { mutate: save } = useCreateTreeItem({
  onSuccess: () => {
    // reload
    router.go(0);
  },
});

const handleSaveTreeItem = (formData: TreeItemCreateFormData) => {
  save(formData);
};

const handleClickTreeItem = (treeItemId: string) => {
  detailTreeItemTarget.value = {
    treeItemId: treeItemId,
  };
  updateVisibleDetailTreeItemDialog(true);
};

const detailTreeItemTarget = ref<
  | {
      treeItemId: string;
    }
  | undefined
>(undefined);
const visibleDetailTreeItemDialog = ref<boolean>(false);
const updateVisibleDetailTreeItemDialog = (visible: boolean) => {
  visibleDetailTreeItemDialog.value = visible;
};

const clearDetailTreeItemDialog = () => {
  updateVisibleDetailTreeItemDialog(false);
  detailTreeItemTarget.value = undefined;
};

const visibleCreateTreeItemDialog = ref<boolean>(false);
const updateVisibleCreateTreeItemDialog = (visible: boolean) => {
  visibleCreateTreeItemDialog.value = visible;
};

const handleLink = () => {
  if (resultData.value) {
    navigator.clipboard
      .writeText(`http://localhost:8080/link/${resultData.value.linkId}`)
      .then(() => {
        ElNotification({
          title: "공유 링크 복사 성공!",
          message:
            "공유 링크 복사에 성공했습니다! 다른 사람들에게 공유해보세요!",
        });
      });
  }
};

const handleShare = () => {
  if (resultData.value) {
    navigator.clipboard
      .writeText(`http://localhost:8080/send/${resultData.value.sendId}`)
      .then(() => {
        ElNotification({
          title: "전달 링크 복사 성공!",
          message: "전달 링크 복사에 성공했습니다! 트리 주인에게 전달해보세요!",
        });
      });
  }
};

const edit = () => {
  router.push({ name: "TreeEdit", params: { id: resultData.value?.treeId } });
};

const visibleTreeDeleteDialog = ref<boolean>(false);
const updateVisibleTreeDeleteDialog = (visible: boolean) => {
  visibleTreeDeleteDialog.value = visible;
};

const handleDelete = () => {
  mutateDelete();
  updateVisibleTreeDeleteDialog(false);
};

const innerStyle = computed(() => {
  if (resultData.value) {
    const { background, ground } = getBgColor(resultData.value.bgType);
    return {
      "--background-color": background,
      "--ground-color": ground,
    };
  }
});

const back = () => {
  router.push({ name: "ChukaPokaMain" });
};
</script>

<style scoped lang="scss">
.tree-detail-container {
  background: var(--background-color);
  height: calc(100vh - 2rem);

  display: flex;
  flex-direction: column;
}
</style>
