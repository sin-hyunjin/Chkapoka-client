import { BaseErrorResponse, BaseResultResponse, useAxios } from "@/plugins/axios";
import { UseMutationOptions, useMutation } from "vue-query";
import { TreeDetailResponseDto } from "./use-tree-create-api";
import { ComputedRef, unref } from "vue";


/** POST api/tree/access/{sendId} START */
export const useAccessTree = (
  sendId: ComputedRef<string>,
  options?: UseMutationOptions<
    BaseResultResponse<TreeDetailResponseDto>,
    BaseErrorResponse,
    void,
    unknown
  >,
) => {
  const api = useAxios();
  const { mutate } = useMutation(
    ["useAccessTree"],
    () => {
      return api.post(`/api/tree/access/${unref(sendId)}`);
    },
    options,
  );

  return {
    mutate,
  };
};

/** POST api/tree/access/{sendId} END */
