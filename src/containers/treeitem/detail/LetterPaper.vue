<template>
  <div>
    <tree-edit-select-tree-card type="backgroundCard" @click="getLetter" />
    <div>{{ data.letter }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LetterPaper",
});
</script>
<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import TreeEditSelectTreeCard from "@/components/tree/edit/TreeEditSelectTreeCard.vue";

const props = defineProps<{
  data: {
    letter: string;
  };
}>();

const emits = defineEmits<{
  (e: "get-letter", value: string): void;
}>();

const getLetter = () => {
  emits("get-letter", props.data.letter);
};
</script>

<style scoped lang="scss"></style>
