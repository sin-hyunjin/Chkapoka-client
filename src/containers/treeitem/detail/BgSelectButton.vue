<template>
  <div class="test">
    <tree-edit-select-tree-card type="backgroundCard" @click="getLetter">
      <div class="bg">
        <cp-letter-bg-default />
      </div>
    </tree-edit-select-tree-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BgSelectButton",
});
</script>
<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import TreeEditSelectTreeCard from "@/components/tree/edit/TreeEditSelectTreeCard.vue";
import CpLetterBgDefault from "@/components/commons/images/CpLetterBgDefault.vue";

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

<style scoped lang="scss">
.bg {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  svg {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
}
</style>
