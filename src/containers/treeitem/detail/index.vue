<template>
  <cp-layout class="layout" :layout-type="LayoutType.Mobile">
    <div class="dialog">
      <cp-dialog v-model="visible">
        <template #header>
          <div class="header">아이템 작성</div>
        </template>
        <div>편지지 선택하기</div>
        <div class="letter-select">
          <bg-select-button
            v-for="(data, idx) in letterPapers"
            :key="idx"
            :data="data"
            @get-letter="showLetter"
          />
        </div>
        <!-- letter selected form -->
        <div v-if="currentStep === 'LETTER_SELECT'" class="letter-select-form">
          <bg-select-form v-model="letterValue" :letter="letterValue" />
        </div>
        <!-- write form -->
        <div v-if="currentStep === 'WRITE_LETTER'" class="write-form">
          <div class="letter-form">
            <div class="paper">
              <cp-letter-bg-default class="bg-img" />
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
            <!-- <div class="body">
              <div class="tree-img">
                <cp-letter-bg-default class="tree-icon" />
                <input
                  v-model="titleValue"
                  class="tree-item"
                  placeholder="편지제목"
                />
                <textarea
                  v-model="contentValue"
                  class="tree-item2"
                  placeholder="편지내용"
                />
              </div>
            </div> -->
          </div>
        </div>
        <!-- write success -->
        <div v-if="currentStep === 'WRITE_SUCCESS'" class="write-success">
          write success💔
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
import { useValidateInputValue } from "@/composables/use-validate-input-value";
import { LayoutType } from "@/composables/use-window-size-wrap";

export default defineComponent({
  name: "TreeItemDetail",
});
</script>

<script setup lang="ts">
import { computed, ref, defineProps } from "vue";
import CpLayout from "@/components/commons/CpLayout.vue";
import CpDialog from "@/components/commons/CpDialog.vue";
import CpButton from "@/components/commons/CpButton.vue";
import BgSelectButton from "./BgSelectButton.vue";
import BgSelectForm from "./BgSelectForm.vue";
import CpLetterBgDefault from "@/components/commons/images/CpLetterBgDefault.vue";

defineProps<{
  layoutType: LayoutType;
}>();

const visible = ref<boolean>(true);
const currentStep = ref<string>("LETTER_SELECT");
const letterValue = ref<string>("default");
const titleValue = ref<string>("ㅇㅇ에게");
const contentValue = ref<string>(
  "Lorem ipsum dolor sit amet consectetur. Habitant  dapibus eget curabitur mauris sit id congue. Ultrices risus arcu ligula etiam condimentum posuere in leo sed. Sit nisi ac in dolor netus. Varius libero sit accumsan etiam velit facilisi ut. Sodales vitae vitae sed sed. Neque sem massa facilisis vel. Sit lacus commodo diam nunc imperdiet amet. Lorem cursus suspendisse et laoreet hendrerit. Dictum pharetra tellus urna duis nec.At orci tempor eu hac. In at maecenas interdum orci libero posuere bibendum sagittis. Consectetur facilisis neque posuere quisque vitae arcu sed. Ac amet ac tempus cras. Nam cum amet aliquet diam et.",
);
const selectedTitle = ref<string>(""); // for test
const selectedContent = ref<string>(""); // for test

const { isValidLetterPaperValue, isValidTitleValue, isValidContentValue } =
  useValidateInputValue({
    letterPaper: letterValue,
    title: titleValue,
    content: contentValue,
  });

const letterPapers = [
  {
    letter: "default",
  },
  {
    letter: "cat",
  },
  {
    letter: "river",
  },
];

const current = computed(() => {
  switch (currentStep.value) {
    case "LETTER_SELECT": {
      return {
        valid: isValidLetterPaperValue.value,
        value: letterValue.value,
      };
    }
    case "WRITE_LETTER": {
      return {
        valid: isValidTitleValue.value || isValidContentValue.value,
        value: titleValue.value,
      };
    }
    default: {
      return {
        valid: false,
        value: undefined,
      };
    }
  }
});

// get letterValue from LetterPaper Component
const showLetter = (letter: string) => {
  letterValue.value = letter;
};

// button for test
const sendWriteData = () => {
  switch (currentStep.value) {
    case "LETTER_SELECT":
      letterValue.value != null
        ? (currentStep.value = "WRITE_LETTER")
        : console.log("편지지 선택해줘세용");
      console.log("letter", letterValue.value);
      break;
    case "WRITE_LETTER":
      selectedTitle.value = titleValue.value;
      selectedContent.value = contentValue.value;
      currentStep.value = "WRITE_SUCCESS";
      console.log("form", titleValue.value);
      break;
  }
};
</script>

<style scoped lang="scss">
.dialog::-webkit-scrollbar {
  display: none;
}

.header {
  align-items: center;
}

.letter-select {
  display: flex;
  overflow: auto;
  margin-top: var(--cp-number-12);

  > *:not(:first-child) {
    margin-left: var(--cp-number-8);
  }
}
.letter-select::-webkit-scrollbar {
  display: none;
}

.letter-select-form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: var(--cp-number-24);
}

.title-form > div {
  margin-bottom: var(--cp-number-12);
}

.content-form > div {
  margin-bottom: var(--cp-number-12);
}

.footer {
  align-items: center;
}

// letter form style
.letter-form {
  flex: 1;
  display: flex;
  justify-content: center;
  margin-top: var(--cp-number-24);

  .paper {
    position: relative;

    .bg-img {
      height: 100%;
    }
    // title form
    .title-input {
      position: absolute;
      top: 26px;
      left: 90px;
      text-align: center;
      background: transparent;
      border: none;
    }
    // content form
    .content-area {
      position: absolute;
      top: 78px;
      left: 17px;
      background: transparent;
      width: 90%;
      height: 60%;
      border: none;
      text-align: justify;
    }
  }
}
</style>
