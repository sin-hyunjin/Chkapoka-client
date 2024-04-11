import { ref, computed, ComputedRef, watch, unref } from "vue";
import { BgType, OwnerType, ShareType, TreeType } from "@/composables/use-tree-create-controller";
import { TreeDetailResponseDto } from "@/composables/use-tree-create-api";


export type TreeEditFormData = {
  title: string;
  ownerType: OwnerType;
  treeType: TreeType;
  bgType: BgType;  // TODO: 배경 편집 디자인 추가시, 수정 작업
  shareType: ShareType;  // TODO: 배경 편집 디자인 추가시, 수정 작업
};

export const useTreeEditController = (prevData: ComputedRef<TreeDetailResponseDto | undefined>) => {

  const formData = ref<TreeEditFormData>({
    title: "",
    treeType: "TREE_TYPE_01",
    bgType: "BG_TYPE_01",
    ownerType: "MINE",
    shareType: "TOGETHER"
  });

  watch(prevData, () => {
    const data = unref(prevData);
    if (data) {
      formData.value = {
        title: data.title,
        treeType: data.treeType,
        bgType: data.bgType,
        ownerType: data.ownerType,
        shareType: data.shareType,
      };
    }
  }, { immediate: true })


  const updateFormData = <K extends keyof TreeEditFormData>(key: K, value: TreeEditFormData[K]) => {
    formData.value[key] = value;
  }

  const isValid = computed<boolean>(() => {
    return formData.value.title.length > 0;
  })

  return {
    formData,
    updateFormData,
    isValid,
  };
}