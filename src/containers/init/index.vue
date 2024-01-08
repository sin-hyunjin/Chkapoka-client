<template>
  <cp-layout-web v-if="layoutType === LayoutType.Web">
    <chuka-poka-init-form v-if="step === 0" @start="handleStep(1)" />
  </cp-layout-web>
  <cp-layout-tablet v-if="layoutType === LayoutType.Tablet">
    <chuka-poka-init-form v-if="step === 0" @start="handleStep(1)" />
  </cp-layout-tablet>
  <cp-layout-mobile v-if="layoutType === LayoutType.Mobile">
    <chuka-poka-init-form v-if="step === 0" @start="handleStep(1)" />
  </cp-layout-mobile>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChukaPokaInit",
});
</script>

<script setup lang="ts">
import { ref } from "vue";
import CpLayoutMobile from "@/components/commons/CpLayoutMobile.vue";
import CpLayoutTablet from "@/components/commons/CpLayoutTablet.vue";
import CpLayoutWeb from "@/components/commons/CpLayoutWeb.vue";
import ChukaPokaInitForm from "@/components/init/ChukaPokaInitForm.vue";
import { LayoutType } from "@/composables/use-window-size-wrap";
defineProps<{
  layoutType: LayoutType;
}>();

const step = ref(0);

const handleStep = (value: number) => {
  step.value = value;
};
</script>
