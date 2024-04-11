import { BaseErrorResponse, BaseResultResponse, useAxios } from "@/plugins/axios";
import { UseMutationOptions, useMutation } from "vue-query";
import { ComputedRef, unref } from "vue";


/** DELETE api/tree/{id} START */
export const useDeleteTreeDetail = (
  treeId: ComputedRef<string>,
  options?: UseMutationOptions<
    BaseResultResponse<void>,
    BaseErrorResponse,
    void,
    unknown
  >,
) => {
  const api = useAxios();
  const { mutate } = useMutation(
    ["useDeleteTreeDetail", treeId],
    () => {
      return api.delete(`/api/tree/${unref(treeId)}`);
    },
    options,
  );

  return {
    mutate,
  };
};
/** DELETE api/tree/{id} END */
