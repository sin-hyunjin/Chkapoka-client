<template>
  <cp-dialog
    :model-value="visible"
    :fullscreen="false"
    margin-top="50px"
    align-center
    :before-close="() => $emit('close')"
    @close="$emit('close')"
  >
    <template #header>
      <div class="header cp-text-head-4">아이템 작성</div>
    </template>
    <div class="body">
      <div class="select-letter-bg">
        <div class="title cp-text-title-2">편지지 선택하기</div>
        <div class="inputs">
          <div
            :class="[
              'input',
              formData.bgType === 'BG_TYPE_01' ? 'selected' : '',
            ]"
            @click="updateFormData('bgType', 'BG_TYPE_01')"
          >
            <cp-letter-default />
          </div>
          <div
            :class="[
              'input',
              formData.bgType === 'BG_TYPE_02' ? 'selected' : '',
            ]"
            @click="updateFormData('bgType', 'BG_TYPE_02')"
          >
            <cp-letter-cloud />
          </div>
          <div
            :class="[
              'input',
              formData.bgType === 'BG_TYPE_03' ? 'selected' : '',
            ]"
            @click="updateFormData('bgType', 'BG_TYPE_03')"
          >
            <cp-letter-dog />
          </div>
          <div
            :class="[
              'input',
              formData.bgType === 'BG_TYPE_04' ? 'selected' : '',
            ]"
            @click="updateFormData('bgType', 'BG_TYPE_04')"
          >
            <cp-letter-cat />
          </div>
        </div>
      </div>
      <div class="write-letter">
        <div class="paper">
          <cp-letter-default
            v-if="formData.bgType === 'BG_TYPE_01'"
            class="bg-img"
          />
          <cp-letter-cloud
            v-if="formData.bgType === 'BG_TYPE_02'"
            class="bg-img"
          />
          <cp-letter-dog
            v-if="formData.bgType === 'BG_TYPE_03'"
            class="bg-img"
          />
          <cp-letter-cat
            v-if="formData.bgType === 'BG_TYPE_04'"
            class="bg-img"
          />
          <input
            v-model="formData.title"
            class="title-input"
            placeholder="편지제목"
          />
          <textarea
            v-model="formData.content"
            class="content-area"
            placeholder="편지내용"
          />
        </div>
      </div>
    </div>
    <template #footer>
      <div class="footer">
        <cp-button type="solid" :disabled="!isValid" @click="send"
          >편지쓰기</cp-button
        >
      </div>
    </template>
  </cp-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeItemCreateDialog",
});
</script>

<script setup lang="ts">
import { defineProps } from "vue";
import CpDialog from "@/components/commons/CpDialog.vue";
import CpButton from "@/components/commons/CpButton.vue";
import CpLetterDefault from "@/components/commons/images/CpLetterDefault.vue";
import CpLetterCloud from "@/components/commons/images/CpLetterCloud.vue";
import CpLetterDog from "@/components/commons/images/CpLetterDog.vue";
import CpLetterCat from "@/components/commons/images/CpLetterCat.vue";
import {
  TreeItemCreateFormData,
  useTreeItemCreateController,
} from "@/composables/use-tree-item-create-controller";

const props = defineProps<{
  visible: boolean;
  treeId: string;
}>();

const emits = defineEmits<{
  (e: "close"): void;
  (e: "create:treeItem", formData: TreeItemCreateFormData): void;
}>();

const { formData, updateFormData, isValid } = useTreeItemCreateController();

const send = () => {
  formData.value.treeId = props.treeId;
  formData.value.content = convertWithLineBreaking(formData.value.content);
  emits("create:treeItem", formData.value);
};

const convertWithLineBreaking = (value: string) => {
  let result = "";
  [...value].forEach((char, i) => {
    /** Enter key 클릭시 */
    if (value.charCodeAt(i) === 10) {
      result += "\n";
    } else {
      result += char;
    }
  });
  return result;
};
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
    display: flex;
    flex-direction: column;
    align-items: center;
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

    .paper {
      height: 100%;
      position: relative;

      .bg-img {
        height: 100%;
        border-radius: var(--cp-number-8);
      }
      // title form
      .title-input {
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
      .content-area {
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
