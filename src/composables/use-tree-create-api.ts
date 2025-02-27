import { BaseErrorResponse, BaseResultResponse, useAxios } from "@/plugins/axios";
import { UseMutationOptions, useMutation } from "vue-query";
import { BgType, OwnerType, ShareType, TreeCreateFormData, TreeType } from "@/composables/use-tree-create-controller";


/** POST api/tree START */
export type TreeDetailTreeItem = {
  treeItemId: string;
  treeId: string;
  title: string;
  updatedAt: string;
  myTreeItem: boolean;
};

export type TreeDetailResponseDto = {
  treeId: string;
  title: string;
  linkId: string;
  sendId: string;
  ownerType: OwnerType;
  shareType: ShareType;
  treeType: TreeType;
  bgType: BgType;
  updatedAt: string;
  treeItemList: TreeDetailTreeItem[]
  myTree: boolean;
};

export type TreeDetailTreeItemWithReadable = TreeDetailTreeItem & {
  readable: boolean;
};


export const useCreateTree = (
  options?: UseMutationOptions<
    BaseResultResponse<TreeDetailResponseDto>,
    BaseErrorResponse,
    TreeCreateFormData,
    unknown
  >,
) => {
  const api = useAxios();
  const { mutate } = useMutation(
    ["create-tree"],
    (payload: TreeCreateFormData) => {
      console.log("payload", payload)
      return api.post("/api/tree", payload);
    },
    options,
  );

  return {
    mutate,
  };
};

/** POST api/tree END */
