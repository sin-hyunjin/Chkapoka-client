import { BaseErrorResponse, BaseResultResponse, useAxios } from "@/plugins/axios";
import { UseMutationOptions, useMutation } from "vue-query";
import { TreeItemCreateFormData, BgType } from "@/composables/use-tree-item-create-controller";


/** POST api/treeItem START */

export type TreeItemDetailResponseDto = {
  treeItemId: string;
  treeId: string;
  title: string;
  content: string;
  bgType: BgType;
  updatedAt: string;
};


export const useCreateTreeItem = (
  options?: UseMutationOptions<
    BaseResultResponse<TreeItemDetailResponseDto>,
    BaseErrorResponse,
    TreeItemCreateFormData,
    unknown
  >,
) => {
  const api = useAxios();
  const { mutate } = useMutation(
    ["create-tree-item"],
    (payload: TreeItemCreateFormData) => {
      return api.post("/api/treeItem", payload);
    },
    options,
  );

  return {
    mutate,
  };
};

/** POST api/tree END */
