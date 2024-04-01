<template>
  <cp-layout class="layout" :layout-type="LayoutType.Mobile">
    <div class="dialog">
      <cp-dialog v-model="visible">
        <template #header>
          <div class="header">아이템 작성</div>
        </template>
        <div class="body">
          <div class="select-letter-bg">
            <div class="title cp-text-title-2">편지지 선택하기</div>
            <div class="inputs">
              <div
                :class="['input', letterValue === 'default' ? 'selected' : '']"
                @click="letterValue = 'default'"
              >
                <cp-letter-bg-default />
              </div>
              <div
                :class="['input', letterValue === 'cat' ? 'selected' : '']"
                @click="letterValue = 'cat'"
              >
                <cp-letter-bg-cat />
              </div>
              <div
                :class="['input', letterValue === 'river' ? 'selected' : '']"
                @click="letterValue = 'river'"
              >
                <cp-letter-bg-river />
              </div>
            </div>
          </div>
          <div class="write-letter">
            <div class="paper">
              <cp-letter-bg-default
                v-if="letterValue === 'default'"
                class="bg-img"
              />
              <cp-letter-bg-cat v-if="letterValue === 'cat'" class="bg-img" />
              <cp-letter-bg-river
                v-if="letterValue === 'river'"
                class="bg-img"
              />
              <input
                v-model="titleValue"
                class="title-input"
                placeholder="편지제목"
              />
              <textarea
                v-model="contentValue"
                class="content-area"
                placeholder="편지내용"
              />
            </div>
          </div>
        </div>
        <template #footer>
          <div class="footer">
            <cp-button
              type="solid"
              :disabled="current.valid"
              @click="sendWriteData"
              >편지쓰기</cp-button
            >
          </div>
        </template>
      </cp-dialog>
    </div>
  </cp-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeItemDetail",
});
</script>

<script setup lang="ts">
import { computed, ref, defineProps } from "vue";
import CpLayout from "@/components/commons/CpLayout.vue";
import CpDialog from "@/components/commons/CpDialog.vue";
import CpButton from "@/components/commons/CpButton.vue";
import { useValidateInputValue } from "@/composables/use-validate-input-value";
import { LayoutType } from "@/composables/use-window-size-wrap";
import CpLetterBgDefault from "@/components/commons/images/CpLetterBgDefault.vue";
import CpLetterBgCat from "@/components/commons/images/CpLetterBgCat.vue";
import CpLetterBgRiver from "@/components/commons/images/CpLetterBgRiver.vue";

defineProps<{
  layoutType: LayoutType;
}>();

const visible = ref<boolean>(true);
const letterValue = ref<string>("default");
const titleValue = ref<string>("");
const contentValue = ref<string>("");
const selectedTitle = ref<string>(""); // for test
const selectedContent = ref<string>(""); // for test

const { isValidLetterPaperValue, isValidTitleValue, isValidContentValue } =
  useValidateInputValue({
    letterPaper: letterValue,
    title: titleValue,
    content: contentValue,
  });

const current = computed(() => {
  return {
    valid:
      isValidLetterPaperValue.value ||
      isValidTitleValue.value ||
      isValidContentValue.value,
    value: titleValue.value,
  };
});

// button for test
const sendWriteData = () => {
  selectedTitle.value = titleValue.value;
  selectedContent.value = contentValue.value;
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
