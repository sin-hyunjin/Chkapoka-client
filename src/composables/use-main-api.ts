import { BaseErrorResponse, BaseResultResponse, useAxios } from "@/plugins/axios.js";
import { computed } from "vue";
import { useQuery, UseQueryOptions } from "vue-query";
import { TreeDetailResponseDto } from "@/composables/use-tree-create-api";
import { BgType } from "@/composables/use-tree-item-create-controller";


/** GET api/tree Start */

export const useFetchTreeList = (
  options?: UseQueryOptions<BaseResultResponse<{ treeList: TreeDetailResponseDto[] }>, BaseErrorResponse>,
) => {
  const api = useAxios();
  const { data, refetch } = useQuery<BaseResultResponse<{ treeList: TreeDetailResponseDto[] }>, BaseErrorResponse>(
    ["useFetchTreeList"],
    () => {
      return api.get("/api/tree");
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
/** GET api/tree END */

/** GET api/treeItem Start */
export type TreeItemListItem = {
  /** 트리 아이템 상세정보 */
  treeItemId: string;
  treeId: string;
  title: string;
  content: string;
  bgType: BgType;
  updatedAt: string;
};

export const useFetchTreeItemList = (
  options?: UseQueryOptions<BaseResultResponse<{ treeItemList: TreeItemListItem[]; }>, BaseErrorResponse>,
) => {
  const api = useAxios();
  const { data, refetch } = useQuery<BaseResultResponse<{ treeItemList: TreeItemListItem[]; }>, BaseErrorResponse>(
    ["useFetchTreeItemList"],
    () => {
      return api.get("/api/treeItem");
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
/** GET api/treeItem END */
