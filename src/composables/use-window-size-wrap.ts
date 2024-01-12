import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";

export const enum LayoutType {
  Web,
  Tablet,
  Mobile,
}

export const useWindowSizeWrap = () => {
  const { width } = useWindowSize();

  const layoutType = computed<LayoutType>(() => {
    if (width.value >= 1024) {
      return LayoutType.Web;
    } else if (width.value >= 768) {
      return LayoutType.Tablet;
    } else {
      return LayoutType.Mobile;
    }
  });

  return {
    layoutType,
  };
};
