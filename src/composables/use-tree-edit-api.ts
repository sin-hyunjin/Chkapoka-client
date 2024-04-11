import { BaseErrorResponse, BaseResultResponse, useAxios } from "@/plugins/axios";
import { UseMutationOptions, useMutation } from "vue-query";
import { TreeEditFormData } from "./use-tree-edit-controller";
import { TreeDetailResponseDto } from "./use-tree-create-api";
import { ComputedRef, unref } from "vue";


/** POST api/tree START */
export const useEditTree = (
  treeId: ComputedRef<string>,
  options?: UseMutationOptions<
    BaseResultResponse<TreeDetailResponseDto>,
    BaseErrorResponse,
    TreeEditFormData,
    unknown
  >,
) => {
  const api = useAxios();
  const { mutate } = useMutation(
    ["useCreateTree"],
    (payload: TreeEditFormData) => {
      return api.put(`/api/tree/${unref(treeId)}`, payload);
    },
    options,
  );

  return {
    mutate,
  };
};

/** POST api/tree END */
