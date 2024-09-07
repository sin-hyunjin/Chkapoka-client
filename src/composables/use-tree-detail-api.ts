import {
  BaseErrorResponse,
  BaseResultResponse,
  useAxios,
} from "@/plugins/axios";
import { UseQueryOptions, useQuery } from "vue-query";
import { computed, ComputedRef, unref } from "vue";
import { TreeDetailResponseDto } from "@/composables/use-tree-create-api";

/** GET api/tree/{id} START */
export const useFetchTreeDetail = (
  treeId: ComputedRef<string>,
  options?: UseQueryOptions<
    BaseResultResponse<TreeDetailResponseDto>,
    BaseErrorResponse
  >,
) => {
  const api = useAxios();
  const { data, refetch } = useQuery<
    BaseResultResponse<TreeDetailResponseDto>,
    BaseErrorResponse
  >(
    ["useFetchTreeDetail", treeId],
    () => {
      return api.get(`/api/tree/${unref(treeId)}`);
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

/** GET api/tree/{id} END */

/** GET api/tree/link/{linkId} START */
export const useFetchTreeDetailByLinkId = (
  linkId: ComputedRef<string>,
  options?: UseQueryOptions<
    BaseResultResponse<TreeDetailResponseDto>,
    BaseErrorResponse
  >,
) => {
  const api = useAxios();
  const { data, refetch } = useQuery<
    BaseResultResponse<TreeDetailResponseDto>,
    BaseErrorResponse
  >(
    ["useFetchTreeDetailByLinkId", linkId],
    () => {
      return api.get(`/api/tree/link/${unref(linkId)}`);
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
/** GET api/tree/link/{linkId} END */
