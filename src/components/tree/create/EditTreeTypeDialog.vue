<template>
  <cp-dialog
    :model-value="visible"
    margin-top="50px"
    :before-close="() => $emit('close')"
    @close="$emit('close')"
  >
    <template #header>
      <div class="header cp-text-head-4">트리 편집하기</div>
    </template>
    <template #default>
      <div class="body">
        <div class="preview">
          <div class="preview-tree">
            <tree-image-view class="tree" :tree-type="innerTreeType" />
          </div>
          <div class="preview-ground" />
        </div>
        <div class="select-tree-type">
          <div class="title cp-text-head-4">트리 선택하기</div>
          <div class="input">
            <template v-for="item in treeTypeList" :key="item">
              <tree-edit-select-tree-card
                type="treeCard"
                :is-selected="item === innerTreeType"
                @click="innerTreeType = item"
              >
                <icon-tree-01-preview-sm v-if="item === 'TREE_TYPE_01'" />
                <icon-tree-02-preview-sm v-else-if="item === 'TREE_TYPE_02'" />
                <icon-tree-03-preview-sm v-else-if="item === 'TREE_TYPE_03'" />
                <icon-tree-04-preview-sm v-else-if="item === 'TREE_TYPE_04'" />
                <div class="more-text" v-else>
                  <div>더 많은 나무가</div>
                  <div>생길예정이에요!</div>
                </div>
              </tree-edit-select-tree-card>
            </template>
            <tree-edit-select-tree-card type="treeCard">
              <div class="more-text">
                <div>더 많은 나무가</div>
                <div>생길예정이에요!</div>
              </div>
            </tree-edit-select-tree-card>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="footer">
        <cp-icon-button
          type="withText"
          text-align="end"
          @click="innerTreeType = treeType"
        >
          <template #icon>
            <icon-refresh />
          </template>
          <template #text>선택 초기화</template>
        </cp-icon-button>
        <cp-button type="solid" @click="$emit('edit', innerTreeType)">
          편집하기
        </cp-button>
      </div>
    </template>
  </cp-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EditTreeDialog",
});
</script>

<script setup lang="ts">
import { ref } from "vue";
import CpDialog from "@/components/commons/CpDialog.vue";
import CpIconButton from "@/components/commons/CpIconButton.vue";
import CpButton from "@/components/commons/CpButton.vue";
import IconRefresh from "@/components/commons/images/IconRefresh.vue";
import TreeImageView from "@/components/tree/TreeImageView.vue";
import TreeEditSelectTreeCard from "@/components/tree/edit/TreeEditSelectTreeCard.vue";
import IconTree01PreviewSm from "@/components/commons/images/IconTree01PreviewSm.vue";
import IconTree02PreviewSm from "@/components/commons/images/IconTree02PreviewSm.vue";
import IconTree03PreviewSm from "@/components/commons/images/IconTree03PreviewSm.vue";
import IconTree04PreviewSm from "@/components/commons/images/IconTree04PreviewSm.vue";
import { BgType, TreeType } from "@/composables/use-tree-create-controller";

const props = defineProps<{
  visible: boolean;
  treeType: TreeType;
  bgType: BgType;
}>();

defineEmits<{
  (e: "edit", value: TreeType): void;
  (e: "close"): void;
}>();

const innerTreeType = ref<TreeType>(props.treeType);

const treeTypeList: TreeType[] = [
  "TREE_TYPE_01",
  "TREE_TYPE_02",
  "TREE_TYPE_03",
  "TREE_TYPE_04",
];
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  color: var(--cp-color-black);
}

.body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .preview {
    width: 80%;
    height: 100%;
    border-radius: 10%;
    .preview-tree {
      border-radius: var(--cp-number-12) var(--cp-number-12) 0 0;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: var(--background-color);
      .tree {
        align-self: center;
        margin: 10% 10% 0 10%;
        margin-bottom: -4px;
      }
    }

    .preview-ground {
      border-radius: 0 0 var(--cp-number-12) var(--cp-number-12);
      padding-top: 10%;
      background-color: var(--ground-color);
    }
  }

  .select-tree-type {
    margin-top: var(--cp-number-24);
    width: 80%;
    color: var(--cp-color-black);

    .input {
      overflow-x: auto;
      display: flex;
      gap: var(--cp-number-8);
      margin-top: var(--cp-number-8);
    }
  }
}

.footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
@/composables/use-tree-create-controller
