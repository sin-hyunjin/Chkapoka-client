<template>
  <cp-layout :layout-type="LayoutType.Mobile">
    <div class="tree-detail-container" v-if="resultData" :style="innerStyle">
      <tree-detail-header @back="back" />
      <tree-detail-content :data="resultData" />
      <tree-detail-footer :data="resultData" @link="handleLink" />
    </div>
  </cp-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getBgColor } from "@/composables/use-tree-create-controller";

export default defineComponent({
  name: "TreeDetailContainer",
});
</script>

<script setup lang="ts">
import TreeDetailHeader from "@/components/tree/detail/TreeDetailHeader.vue";
import TreeDetailContent from "@/components/tree/detail/TreeDetailContent.vue";
import TreeDetailFooter from "@/components/tree/detail/TreeDetailFooter.vue";
import { computed, defineProps } from "vue";
import { LayoutType } from "@/composables/use-window-size-wrap";
import CpLayout from "@/components/commons/CpLayout.vue";
import { useFetchTreeDetail } from "@/composables/use-tree-detail-api";
import { useRouter } from "vue-router";
import { ElNotification } from "element-plus";
const router = useRouter();

const props = defineProps<{
  id: string;
  layoutType: LayoutType;
}>();

const { resultData } = useFetchTreeDetail(computed(() => props.id));

const handleLink = () => {
  if (resultData.value) {
    navigator.clipboard
      .writeText(`http://localhost:8080/link/${resultData.value.linkId}`)
      .then(() => {
        ElNotification({
          title: "링크 복사 성공!",
          message: "링크 복사에 성공했습니다! 다른 사람들에게 공유해보세요!",
        });
      });
  }
};

const innerStyle = computed(() => {
  if (resultData.value) {
    const { background, ground } = getBgColor(resultData.value.bgType);
    return {
      "--background-color": background,
      "--ground-color": ground,
    };
  }
});

const back = () => {
  router.push({ name: "ChukaPokaMain" });
};
</script>

<style scoped lang="scss">
.tree-detail-container {
  background: var(--background-color);
  height: calc(100vh - 2rem);

  display: flex;
  flex-direction: column;
}
</style>
