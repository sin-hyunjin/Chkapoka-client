<template>
  <cp-dialog
    v-if="resultData"
    :model-value="visible"
    :fullscreen="false"
    margin-top="50px"
    align-center
    :before-close="() => $emit('close')"
    @close="$emit('close')"
  >
    <template #header>
      <div class="header cp-text-head-4">아이템 읽기</div>
    </template>
    <div class="body">
      <div class="write-letter">
        <div class="paper">
          <cp-letter-default
            v-if="resultData.bgType === 'BG_TYPE_01'"
            class="bg-img"
          />
          <cp-letter-cloud
            v-if="resultData.bgType === 'BG_TYPE_02'"
            class="bg-img"
          />
          <cp-letter-dog
            v-if="resultData.bgType === 'BG_TYPE_03'"
            class="bg-img"
          />
          <cp-letter-cat
            v-if="resultData.bgType === 'BG_TYPE_04'"
            class="bg-img"
          />

          <div class="title">{{ resultData.title }}</div>
          <div class="content">{{ resultData.content }}</div>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="footer">
        <cp-button type="solid" @click="$emit('close')">닫기</cp-button>
      </div>
    </template>
  </cp-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeItemDetailDialog",
});
</script>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import CpDialog from "@/components/commons/CpDialog.vue";
import CpButton from "@/components/commons/CpButton.vue";
import CpLetterDefault from "@/components/commons/images/CpLetterDefault.vue";
import CpLetterCloud from "@/components/commons/images/CpLetterCloud.vue";
import CpLetterDog from "@/components/commons/images/CpLetterDog.vue";
import CpLetterCat from "@/components/commons/images/CpLetterCat.vue";
import { useFetchTreeItemDetail } from "@/composables/use-tree-item-detail-api";

const props = defineProps<{
  visible: boolean;
  target: {
    treeItemId: string;
  };
}>();

const { resultData } = useFetchTreeItemDetail(
  computed(() => props.target.treeItemId),
);

const emits = defineEmits<{
  (e: "close"): void;
}>();
</script>

<style scoped lang="scss">
.header {
  align-items: center;
}
.body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .select-letter-bg {
    .title {
      margin-bottom: var(--cp-number-16);
      color: var(--cp-color-black);
    }

    .inputs {
      display: flex;
      .input {
        width: 72px;
        height: 72px;
        position: relative;

        svg {
          width: 100%;
          height: 100%;
        }

        &:hover {
          opacity: 0.7;
          cursor: pointer;
        }

        &.selected {
          border: solid 2px var(--cp-color-red);
          border-radius: var(--cp-number-8);
        }
      }
    }
  }

  .write-letter {
    flex: 1;
    display: flex;
    justify-content: center;
    margin-top: var(--cp-number-24);
    color: var(--cp-color-black);
    .paper {
      height: 100%;
      position: relative;

      .bg-img {
        height: 100%;
        border-radius: var(--cp-number-8);
      }
      // title form
      .title {
        position: absolute;
        top: var(--cp-number-24);
        left: 0;
        right: 0;
        margin: 0 auto;
        width: auto;
        text-align: center;
        background: transparent;
        border: none;
      }
      // content form
      .content {
        position: absolute;
        top: 48px;
        left: 0;
        right: 0;
        margin: 0 auto;

        background: transparent;
        width: 90%;
        height: 80%;
        border: none;
        text-align: justify;
      }
    }
  }
}

.footer {
  align-items: center;
}
</style>
