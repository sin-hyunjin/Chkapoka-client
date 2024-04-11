<template>
  <div class="tree-detail-footer">
    <div :class="['sub-button-group', isOpen ? 'visible' : 'hidden']">
      <cp-icon-circle-button
        class="create-tree-item"
        bg-color="var(--cp-color-white)"
        hover-bg-color="var(--cp-color-white)"
        @click="$emit('create:treeItem')"
      >
        <icon-add-post />
      </cp-icon-circle-button>
      <cp-icon-circle-button
        class="tree-link"
        bg-color="var(--cp-color-white)"
        hover-bg-color="var(--cp-color-white)"
        @click="$emit('link')"
      >
        <icon-invite />
      </cp-icon-circle-button>
      <cp-icon-circle-button
        v-if="data.ownerType === 'NOT_YET_SEND'"
        class="tree-share"
        bg-color="var(--cp-color-white)"
        hover-bg-color="var(--cp-color-white)"
        @click="$emit('share')"
      >
        <icon-share />
      </cp-icon-circle-button>
    </div>
    <cp-icon-circle-button class="entire-button" @click="isOpen = !isOpen">
      <icon-plus v-if="!isOpen" fillColor="var(--cp-color-white)" />
      <icon-close v-else fillColor="var(--cp-color-white)" />
    </cp-icon-circle-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { TreeDetailResponseDto } from "@/composables/use-tree-create-api";

export default defineComponent({
  name: "TreeDetailFooter",
});
</script>

<script setup lang="ts">
import CpIconCircleButton from "@/components/commons/CpIconCircleButton.vue";
import IconPlus from "@/components/commons/images/IconPlus.vue";
import IconAddPost from "@/components/commons/images/IconAddPost.vue";
import IconInvite from "@/components/commons/images/IconInvite.vue";
import IconShare from "@/components/commons/images/IconShare.vue";
import IconClose from "@/components/commons/images/IconClose.vue";
defineProps<{
  data: TreeDetailResponseDto;
}>();
defineEmits<{
  (e: "create:treeItem"): void;
  (e: "link"): void;
  (e: "share"): void;
}>();

const isOpen = ref<boolean>(false);
</script>

<style scoped lang="scss">
.tree-detail-footer {
  height: 20%;
  background-color: var(--ground-color);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .sub-button-group {
    margin-bottom: var(--cp-number-8);
    &.visible {
      visibility: visible;
    }
    &.hidden {
      visibility: hidden;
    }
  }
}
</style>
