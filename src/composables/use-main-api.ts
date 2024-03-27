import { BaseErrorResponse, BaseResultResponse, useAxios } from "@/plugins/axios.js";
import { computed } from "vue";
import { useQuery, UseQueryOptions } from "vue-query";


/** GET api/tree Start */
export type TreeListItem = {
  /** 트리 리스트정보 */
  treeId: string;
  title: string;
  type: string; // MINE or NOT_YEN_SEND
  linkId: string;
  sendId: string;
  updatedBy: string;
  updatedAt: string;
  /** 트리색상 부분 추가 가능 */
  treeBgColor: string;
  groundColor: string;
  treeTopColor: string;
  treeItemColor: string;
  treeBottomColor: string;
};

export const useFetchTreeList = (
  options?: UseQueryOptions<BaseResultResponse<{ treeList: TreeListItem[] }>, BaseErrorResponse>,
) => {
  const api = useAxios();
  const { data, refetch } = useQuery<BaseResultResponse<{ treeList: TreeListItem[] }>, BaseErrorResponse>(
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
  id: string;
  treeId: string;
  title: string;
  content: string;
  treeItemColor: string;
  updatedBy: string;
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
