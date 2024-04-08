import { ref, computed } from "vue";

export type OwnerType = "MINE" | "NOT_YET_SEND";
export type TreeType = "TREE_TYPE_01" | "TREE_TYPE_02" | "TREE_TYPE_03" | "TREE_TYPE_04";
export type BgType = "BG_TYPE_01" | "BG_TYPE_02" | "BG_TYPE_03" | "BG_TYPE_04" | "BG_TYPE_05" | "BG_TYPE_06";
export type ShareType = "ONLY" | "TOGETHER";


export const getBgColor = (bgType: BgType) => {
  switch (bgType) {
    case "BG_TYPE_01": {
      return {
        background: "#FEFCF8",
        ground: "#CBE8BF",
      }
    }
    case "BG_TYPE_02": {
      return {
        background: "#E2FFF5",
        ground: "#A7614F",
      }
    }
    case "BG_TYPE_03": {
      return {
        background: "linear-gradient(180deg, #1986D5 0%, rgba(83, 234, 255, 0) 100%)",
        ground: "#41C183",
      }
    }
    case "BG_TYPE_04": {
      return {
        background: "#2F2E4F",
        ground: "#534F72",
      }
    }
    case "BG_TYPE_05": {
      return {
        background: "#EAD9ED",
        ground: "#9ACAB5",
      }
    }
    case "BG_TYPE_06": {
      return {
        background: "#FFD19A",
        ground: "#D16464",
      }
    }
  }
}

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