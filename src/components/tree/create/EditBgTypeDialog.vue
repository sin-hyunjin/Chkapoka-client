<template>
  <cp-dialog
    :model-value="visible"
    margin-top="50px"
    :before-close="() => $emit('close')"
    @close="$emit('close')"
  >
    <template #header>
      <div class="header cp-text-head-4">배경 편집하기</div>
    </template>
    <template #default>
      <div class="body" :style="innerStyle">
        <div class="preview">
          <div class="preview-tree">
            <tree-image-view class="tree" :tree-type="treeType" />
          </div>
          <div class="preview-ground" />
        </div>
        <div class="select-bg-type">
          <div class="title cp-text-head-4">배경 선택하기</div>
          <div class="input">
            <template v-for="item in bgTypeList" :key="item">
              <tree-edit-select-tree-card
                class="bg-item"
                type="treeCard"
                :is-selected="item === innerBgType"
                @click="innerBgType = item"
              >
                <div class="btn-content" :style="getCurrentStyle(item)">
                  <div class="tree"></div>
                  <div class="ground"></div>
                </div>
              </tree-edit-select-tree-card>
            </template>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="footer">
        <cp-icon-button
          type="withText"
          text-align="end"
          @click="innerBgType = bgType"
        >
          <template #icon>
            <icon-refresh />
          </template>
          <template #text>선택 초기화</template>
        </cp-icon-button>
        <cp-button type="solid" @click="$emit('edit', innerBgType)">
          편집하기
        </cp-button>
      </div>
    </template>
  </cp-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EditBgDialog",
});
</script>

<script setup lang="ts">
import { computed, ref } from "vue";
import CpDialog from "@/components/commons/CpDialog.vue";
import CpIconButton from "@/components/commons/CpIconButton.vue";
import CpButton from "@/components/commons/CpButton.vue";
import IconRefresh from "@/components/commons/images/IconRefresh.vue";
import TreeImageView from "@/components/tree/TreeImageView.vue";
import TreeEditSelectTreeCard from "@/components/tree/edit/TreeEditSelectTreeCard.vue";
import {
  BgType,
  getBgColor,
  TreeType,
} from "@/composables/use-tree-create-controller";

const props = defineProps<{
  visible: boolean;
  treeType: TreeType;
  bgType: BgType;
}>();

defineEmits<{
  (e: "edit", value: BgType): void;
  (e: "close"): void;
}>();

const innerBgType = ref<BgType>(props.bgType);

const bgTypeList: BgType[] = [
  "BG_TYPE_01",
  "BG_TYPE_02",
  "BG_TYPE_03",
  "BG_TYPE_04",
  "BG_TYPE_05",
  "BG_TYPE_06",
];

const innerStyle = computed(() => {
  const { background, ground } = getBgColor(innerBgType.value);
  return {
    "--inner-background-color": background,
    "--inner-ground-color": ground,
  };
});

const getCurrentStyle = (bgType: BgType) => {
  const { background, ground } = getBgColor(bgType);
  return {
    "--current-background-color": background,
    "--current-ground-color": ground,
  };
};
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
      background: var(--inner-background-color);
      .tree {
        align-self: center;
        margin: 10% 10% 0 10%;
        margin-bottom: -4px;
      }
    }

    .preview-ground {
      border-radius: 0 0 var(--cp-number-12) var(--cp-number-12);
      padding-top: 10%;
      background-color: var(--inner-ground-color);
    }
  }

  .select-bg-type {
    margin-top: var(--cp-number-24);
    width: 80%;
    color: var(--cp-color-black);

    .input {
      overflow-x: auto;
      display: flex;
      gap: var(--cp-number-8);
      margin-top: var(--cp-number-8);
    }

    .bg-item ::v-deep(.el-button > span) {
      width: 100%;
      height: 100%;
    }

    .bg-item .btn-content {
      width: 100%;
      height: 100%;

      .tree {
        width: 100%;
        height: 80%;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        background: var(--current-background-color);
      }

      .ground {
        width: 100%;
        height: 20%;
        background-color: var(--current-ground-color);
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
      }
    }
  }
}

.footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
