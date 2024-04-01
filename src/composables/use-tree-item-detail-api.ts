import { BaseErrorResponse, BaseResultResponse, useAxios } from "@/plugins/axios";
import { UseQueryOptions, useQuery } from "vue-query";
import { computed, ComputedRef, unref } from "vue";
import { TreeItemDetailResponseDto } from "@/composables/use-tree-item-create-api";


/** GET api/treeItem/{treeItemid} START */
export const useFetchTreeItemDetail = (
  treeItemId: ComputedRef<string>,
  options?: UseQueryOptions<BaseResultResponse<TreeItemDetailResponseDto>, BaseErrorResponse>
) => {
  const api = useAxios();
  const { data, refetch } = useQuery<BaseResultResponse<TreeItemDetailResponseDto>, BaseErrorResponse>(
    ["useFetchTreeItemDetail", treeItemId],
    () => {
      return api.get(`/api/treeItem/${unref(treeItemId)}`);
    },
    options,
  );

  const resultData = computed(() => {
    return data.value?.data.data;
  });

  return {
    refetch,
    data,
    resultData,
  };
};

/** GET api/treeItem/{treeItemid} END */
