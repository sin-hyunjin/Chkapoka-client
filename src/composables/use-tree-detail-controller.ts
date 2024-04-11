import { computed, ComputedRef, ref } from "vue";
import { TreeDetailTreeItemWithReadable } from "@/composables/use-tree-create-api";

export const SIZE_PER_PAGE = 10;
export const useTreeItemNavgiator = (treeItemList: ComputedRef<TreeDetailTreeItemWithReadable[]>) => {
  const currentPage = ref(0);
  /**
   * currentPage: 0 -> 0 ~ 9
   * currentPage: 1 -> 10 ~ 19
   * ...
   */
  const currentList = computed(() => {
    return treeItemList.value.slice(currentPage.value * SIZE_PER_PAGE, (currentPage.value + 1) * SIZE_PER_PAGE);
  })

  const disabledLeft = computed(() => {
    return currentPage.value === 0 || treeItemList.value.length <= SIZE_PER_PAGE;
  });

  const disabledRight = computed(() => {
    return (currentPage.value + 1) * SIZE_PER_PAGE > treeItemList.value.length;
  });

  const clickLeft = () => {
    if (currentPage.value - 1 >= 0) {
      currentPage.value--;
    }
  }
  const clickRight = () => {
    currentPage.value++;
  }

  return {
    currentList,
    disabledLeft,
    disabledRight,
    clickLeft,
    clickRight,
  };

}