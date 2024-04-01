<template>
  <chuka-poka-link-container
    v-if="getAccessToken()"
    :layout-type="layoutType"
    :link-id="linkId"
  />
  <go-to-init-dialog v-else :visible="true" @go="goToInit" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChukaPokaLink",
});
</script>

<script setup lang="ts">
import { defineProps } from "vue";
import { useAccessTokenStore } from "@/store";
import { LayoutType } from "@/composables/use-window-size-wrap";
import ChukaPokaLinkContainer from "@/containers/link/ChukaPokaLinkContainer.vue";
import GoToInitDialog from "@/components/link/GoToInitDialog.vue";
import { useRouter } from "vue-router";

const { getAccessToken } = useAccessTokenStore();

const props = defineProps<{
  linkId: string;
  layoutType: LayoutType;
}>();

const router = useRouter();
const goToInit = () => {
  router.push({ name: "ChukaPokaInit", query: { linkId: props.linkId } });
};
</script>

<style scoped lang="scss"></style>
