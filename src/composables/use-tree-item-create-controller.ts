import { ref, computed } from "vue";

export type BgType = "BG_TYPE_01" | "BG_TYPE_02" | "BG_TYPE_03" | "BG_TYPE_04"; // default, cloud, dog, cat

export type TreeItemCreateFormData = {
  treeId: string;
  title: string;
  content: string;
  bgType: BgType;  // TODO: 배경 편집 디자인 추가시, 수정 작업
};

export const useTreeItemCreateController = () => {

  const formData = ref<TreeItemCreateFormData>({
    treeId: "",
    title: "",
    content: "",
    bgType: "BG_TYPE_01",
  });


  const updateFormData = <K extends keyof TreeItemCreateFormData>(key: K, value: TreeItemCreateFormData[K]) => {
    formData.value[key] = value;
  }

  const isValid = computed<boolean>(() => {
    return formData.value.title.length > 0 && formData.value.content.length > 0;
  })

  return {
    formData,
    updateFormData,
    isValid,
  };
}