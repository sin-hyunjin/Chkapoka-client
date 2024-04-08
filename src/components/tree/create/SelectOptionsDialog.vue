<template>
  <cp-dialog
    :model-value="visible"
    :fullscreen="false"
    :use-header="false"
    :use-footer="false"
    margin-top="50px"
    :before-close="() => $emit('close')"
    align-center
    @close="$emit('close')"
  >
    <template #default>
      <div class="container">
        <div class="header cp-text-head-4">트리 완성하기</div>
        <div class="body">
          <div class="select-type">
            <div class="title cp-text-title-2">
              트리 소유자 유형
              <el-tooltip placement="top">
                <template #content>
                  <div class="tooltip-content">
                    <div>내트리는 트리의 소유권, 주인이 작성자인 경우</div>
                    <div>
                      미부여 트리는 트리의 소유권, 주인이 작성자가 아닌 다른
                      유저로서 추후에 주인에게 전달, 공유할 예정일 경우
                    </div>
                  </div>
                </template>
                <icon-help class="icon" />
              </el-tooltip>
            </div>
            <cp-radio-group
              v-model="innerOptions.ownerType"
              type="button"
              :items="ownerTypeItems"
            />
            <div class="title cp-text-title-2">
              트리 아이템 열람 유형
              <el-tooltip placement="top">
                <template #content>
                  <div class="tooltip-content">
                    <div>
                      트리 아이템 열람 유형은 작성된 트리 아이템의 열람 권한에
                      대한 설정이다.
                    </div>
                    <div>
                      혼자보기는 트리 주인과 트리 아이템 작성자, 다같이보기는
                      누구나 해당 트리 아이템을 열람하는 것이 가능하다.
                    </div>
                  </div>
                </template>
                <icon-help class="icon" />
              </el-tooltip>
            </div>
            <cp-radio-group
              v-model="innerOptions.shareType"
              type="button"
              :items="shareTypeItems"
            />
          </div>
        </div>
        <div class="footer">
          <cp-button
            type="solid"
            width="auto"
            height="auto"
            @click="$emit('save', innerOptions)"
          >
            트리 완성하기
          </cp-button>
          <cp-button
            type="outlined"
            width="auto"
            height="auto"
            @click="$emit('close')"
          >
            닫기
          </cp-button>
        </div>
      </div>
    </template>
  </cp-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SelectOptionsDialog",
});
</script>

<script setup lang="ts">
import CpDialog from "@/components/commons/CpDialog.vue";
import CpButton from "@/components/commons/CpButton.vue";
import CpRadioGroup from "@/components/commons/CpRadioGroup.vue";
import IconHelp from "@/components/commons/images/IconHelp.vue";
import { OwnerType, ShareType } from "@/composables/use-tree-create-controller";
import { ElTooltip } from "element-plus";

const props = defineProps<{
  visible: boolean;
  ownerType: OwnerType;
  shareType: ShareType;
}>();

defineEmits<{
  (
    e: "save",
    value: {
      ownerType: OwnerType;
      shareType: ShareType;
    },
  ): void;
  (e: "close"): void;
}>();

const innerOptions = ref<{
  ownerType: OwnerType;
  shareType: ShareType;
}>({
  ownerType: props.ownerType,
  shareType: props.shareType,
});
const ownerTypeItems = [
  { label: "내트리", name: "MINE" },
  { label: "미부여 트리", name: "NOT_YET_SEND" },
];

const shareTypeItems = [
  { label: "혼자보기", name: "ONLY" },
  { label: "다같이보기", name: "TOGETHER" },
];
</script>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .header {
    display: flex;
    align-items: center;
    color: var(--cp-color-black);
  }

  .body {
    display: flex;
    flex-direction: column;
    margin: var(--cp-number-24) 0;
    .select-type {
      display: flex;
      flex-direction: column;
      color: var(--cp-color-black);

      .title {
        margin: var(--cp-number-8) 0;
        display: flex;
        align-items: center;

        .icon {
          margin-left: var(--cp-number-4);
        }
      }
    }

    .tooltip-content {
      max-width: 200px;
    }
  }

  .footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}
</style>
