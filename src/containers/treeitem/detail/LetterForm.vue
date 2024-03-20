<template>
  <div class="letter-form">
    <div class="title-form">
      <div>편지 제목</div>
      <cp-input v-model="titleValue" bg-color="var(--cp-color-gray-100)" />
    </div>
    <div class="content-form">
      <div>본문</div>
      <cp-input v-model="contentValue" bg-color="var(--cp-color-gray-100)" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LetterForm",
});
</script>

<script setup lang="ts">
import { ref } from "vue";
import CpInput from "@/components/commons/CpInput.vue";

const titleValue = ref<string>("");
const contentValue = ref<string>("");

// const props = defineProps<{
//   data: {
//     title: string;
//     content: string;
//   };
// }>();
</script>

<style scoped lang="scss"></style>
