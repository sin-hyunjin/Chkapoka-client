<template>
  <div class="dialog">
    <cp-dialog v-model="visible">
      <template #header>
        <div class="header">아이템 작성</div>
      </template>
      <div>편지지 선택하기</div>
      <div class="letter-select">
        <letter-paper
          v-for="(data, idx) in letterPapers"
          :key="idx"
          :data="data"
          @get-letter="showLetter"
        />
      </div>

      <!-- for test -->
      <!-- <div>선택된 편지지 : {{ letterValue }}</div> -->

      <!-- letter selected form -->
      <div v-if="currentStep === 'LETTER_SELECT'" class="letter-select-form">
        <bg-select-form v-model="letterValue" :letter="letterValue" />
      </div>
      <!-- write form -->
      <div v-if="currentStep === 'WRITE_LETTER'" class="write-form">
        <div class="letter-form">
          <div class="title-form">
            <div>편지 제목</div>
            <cp-input
              v-model="titleValue"
              bg-color="var(--cp-color-gray-100)"
            />
          </div>
          <div class="content-form">
            <div>본문</div>
            <cp-input
              v-model="contentValue"
              bg-color="var(--cp-color-gray-100)"
            />
          </div>
        </div>
        <!-- <letter-form :title="titleValue" :content="contentValue" /> -->
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useValidateInputValue } from "@/composables/use-validate-input-value";

export default defineComponent({
  name: "TreeItemDetail",
});
</script>

<script setup lang="ts">
import { computed, ref } from "vue";
import CpDialog from "@/components/commons/CpDialog.vue";
import CpButton from "@/components/commons/CpButton.vue";
import LetterPaper from "./LetterPaper.vue";
import CpInput from "@/components/commons/CpInput.vue";
import BgSelectForm from "./BgSelectForm.vue";

const visible = ref<boolean>(true);
const currentStep = ref<string>("LETTER_SELECT");
const letterValue = ref<string>("night");
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

const letterPapers = [
  {
    letter: "night",
  },
  {
    letter: "cat",
  },
  {
    letter: "river",
  },
  {
    letter: "night",
  },
  {
    letter: "cat",
  },
  {
    letter: "river",
  },
  {
    letter: "night",
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

// for test
const showLetter = (letter: string) => {
  letterValue.value = letter;
};

// for test
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
.dialog {
  overflow: auto;
}
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

.letter-form {
  margin-top: var(--cp-number-24);
  > *:not(:first-child) {
    margin-top: var(--cp-number-24);
  }
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
</style>
