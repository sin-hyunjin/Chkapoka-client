<template>
  <div class="tree-item-preview-container">
    <div class="freestyle">
      <cp-letter-default v-if="data.bgType === 'BG_TYPE_01'" class="bg-img" />
      <cp-letter-cloud v-if="data.bgType === 'BG_TYPE_02'" class="bg-img" />
      <cp-letter-dog v-if="data.bgType === 'BG_TYPE_03'" class="bg-img" />
      <cp-letter-cat v-if="data.bgType === 'BG_TYPE_04'" class="bg-img" />
      <div class="tree-item-title">{{ data.title }}</div>
      <div class="tree-item-updated-at">
        {{ new Date(Date.parse(data.updatedAt)).toLocaleString() }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeItemPreview",
});
</script>
<script setup lang="ts">
import { defineProps } from "vue";
import CpLetterDefault from "@/components/commons/images/CpLetterDefault.vue";
import CpLetterCloud from "@/components/commons/images/CpLetterCloud.vue";
import CpLetterDog from "@/components/commons/images/CpLetterDog.vue";
import CpLetterCat from "@/components/commons/images/CpLetterCat.vue";
import { TreeItemListItem } from "@/composables/use-main-api";

defineProps<{
  data: TreeItemListItem;
}>();
</script>

<style scoped lang="scss">
.tree-item-preview-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  max-width: 226px;
  .freestyle {
    max-width: 226px;
    svg {
      max-width: 226px;
      height: auto;
    }
  }

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  & .tree-item-image {
    border-radius: var(--cp-number-8);
  }
  & .tree-item-name {
    color: #544e4e;
    margin-left: var(--cp-number-4);
    font-size: 12px;
    font-weight: 700;
  }

  & .tree-item-updated-at {
    color: #6f6f6f;
    margin-left: var(--cp-number-4);
    margin-top: 2px;
    font-size: 8px;
  }
}
</style>
