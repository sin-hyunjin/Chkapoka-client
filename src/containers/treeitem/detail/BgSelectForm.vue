<template>
  <template v-if="props.letter === 'night'">
    <div>
      <cp-letter-bg-default />
    </div>
  </template>
  <template v-if="props.letter === 'cat'">
    <div>
      <cp-letter-bg-cat />
    </div>
  </template>
  <template v-if="props.letter === 'river'">
    <div>
      <cp-letter-bg-river />
    </div>
  </template>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BgSelectForm",
});
</script>
<script setup lang="ts">
import CpLetterBgDefault from "@/components/commons/images/CpLetterBgDefault.vue";
import { defineProps } from "vue";
import CpLetterBgCat from "@/components/commons/images/CpLetterBgCat.vue";
import CpLetterBgRiver from "@/components/commons/images/CpLetterBgRiver.vue";

const props = defineProps<{
  letter: string;
}>();
</script>

<style scoped lang="scss"></style>
