import { ref, computed } from "vue";

export type OwnerType = "MINE" | "NOT_YET_SEND";
export type TreeType = "TREE_TYPE_01" | "TREE_TYPE_02" | "TREE_TYPE_03" | "TREE_TYPE_04";
export type BgType = "BG_TYPE_01" | "BG_TYPE_02" | "BG_TYPE_03" | "BG_TYPE_04";
export type ShareType = "ONLY" | "TOGETHER";

export type TreeCreateFormData = {
  title: string;
  ownerType: OwnerType;
  treeType: TreeType;
  bgType: BgType;  // TODO: 배경 편집 디자인 추가시, 수정 작업
  shareType: ShareType;  // TODO: 배경 편집 디자인 추가시, 수정 작업
};

export const useTreeCreateController = () => {

  const formData = ref<TreeCreateFormData>({
    title: "",
    treeType: "TREE_TYPE_01",
    bgType: "BG_TYPE_01",
    ownerType: "MINE",
    shareType: "TOGETHER"
  });


  const updateFormData = <K extends keyof TreeCreateFormData>(key: K, value: TreeCreateFormData[K]) => {
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