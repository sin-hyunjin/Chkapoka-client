<template>
  <cp-layout :layout-type="layoutType">
    <chuka-poka-init-form v-if="step === 0" @start="handleStep(1)" />
    <chuka-poka-sign-form
      v-if="step === 1"
      :layout-type="layoutType"
      @send="handleSend"
    />
  </cp-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChukaPokaInit",
});
</script>

<script setup lang="ts">
import { ref } from "vue";
import CpLayout from "@/components/commons/CpLayout.vue";
import ChukaPokaInitForm from "@/components/init/ChukaPokaInitForm.vue";
import ChukaPokaSignForm from "@/components/init/ChukaPokaSignForm.vue";
import { LayoutType } from "@/composables/use-window-size-wrap";
defineProps<{
  layoutType: LayoutType;
}>();

const step = ref(0);

const handleStep = (value: number) => {
  step.value = value;
};

const handleSend = (type: "email", value: string) => {
  console.log(type, value);
};
</script>
