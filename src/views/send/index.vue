<template>
  <access-send-tree-dialog
    v-if="getAccessToken()"
    :visible="true"
    @access="access"
  />
  <go-to-init-dialog v-else :visible="true" @go="goToInit" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAccessTree } from "@/composables/use-tree-send-api";

export default defineComponent({
  name: "ChukaPokaSend",
});
</script>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import { LayoutType } from "@/composables/use-window-size-wrap";
import { useAccessTokenStore } from "@/store";
import GoToInitDialog from "@/components/link/GoToInitDialog.vue";
import AccessSendTreeDialog from "@/components/send/AccessSendTreeDialog.vue";
import { useRouter } from "vue-router";

const { getAccessToken } = useAccessTokenStore();
const props = defineProps<{
  sendId: string;
  layoutType: LayoutType;
}>();

const router = useRouter();

const { mutate: access } = useAccessTree(
  computed(() => props.sendId),
  {
    onSuccess: (data) => {
      router.push({
        name: "TreeDetail",
        params: { id: data.data.data.treeId },
      });
    },
  },
);

const goToInit = () => {
  router.push({ name: "ChukaPokaInit", query: { sendId: props.sendId } });
};
</script>

<style scoped lang="scss"></style>
