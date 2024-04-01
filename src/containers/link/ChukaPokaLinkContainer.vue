<template>
  <cp-layout :layout-type="layoutType">
    <div
      class="chuka-poka-link-container"
      v-if="resultData"
      :style="innerStyle"
    >
      <chuka-poka-link-header @back="back" />
      <chuka-poka-link-content :data="resultData" />
      <chuka-poka-link-footer
        :data="resultData"
        @link="handleLink"
        @create:tree-item="updateVisibleCreateTreeItemDialog(true)"
      />
    </div>
  </cp-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChukaPokaLinkContainer",
});
</script>

<script setup lang="ts">
import CpLayout from "@/components/commons/CpLayout.vue";
import { LayoutType } from "@/composables/use-window-size-wrap";
import ChukaPokaLinkHeader from "@/components/link/ChukaPokaLinkHeader.vue";
import ChukaPokaLinkContent from "@/components/link/ChukaPokaLinkContent.vue";
import ChukaPokaLinkFooter from "@/components/link/ChukaPokaLinkFooter.vue";
import { computed, defineProps, ref } from "vue";
import { useFetchTreeDetailByLinkId } from "@/composables/use-tree-detail-api";
import { useRouter } from "vue-router";
import { ElNotification } from "element-plus";

const router = useRouter();

const props = defineProps<{
  layoutType: LayoutType;
  linkId: string;
}>();
const { resultData } = useFetchTreeDetailByLinkId(computed(() => props.linkId));

const innerStyle = computed(() => {
  if (resultData.value?.bgType === "BG_TYPE_01") {
    return {
      "--background-color": "#fefcf8",
      "--ground-color": "#cbe8bf",
    };
  } else {
    /** TODO: bgType관련 디자인 추가되면 추가 작업 */
    return {
      "--background-color": "#fefcf8",
      "--ground-color": "#cbe8bf",
    };
  }
});

const visibleCreateTreeItemDialog = ref<boolean>(false);

const updateVisibleCreateTreeItemDialog = (visible: boolean) => {
  visibleCreateTreeItemDialog.value = visible;
};

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

const back = () => {
  router.push({ name: "ChukaPokaMain" });
};
</script>

<style scoped lang="scss">
.chuka-poka-link-container {
  background-color: var(--background-color);
  height: calc(100vh - 2rem);

  display: flex;
  flex-direction: column;
}
</style>
