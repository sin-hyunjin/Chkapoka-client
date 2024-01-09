<template>
  <cp-layout-web v-if="layoutType === LayoutType.Web">
    <slot />
  </cp-layout-web>
  <cp-layout-tablet v-if="layoutType === LayoutType.Tablet">
    <slot />
  </cp-layout-tablet>
  <cp-layout-mobile v-if="layoutType === LayoutType.Mobile">
    <slot />
  </cp-layout-mobile>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CpLayout",
});
</script>

<script setup lang="ts">
import { defineProps } from "vue";
import CpLayoutMobile from "@/components/commons/CpLayoutMobile.vue";
import CpLayoutTablet from "@/components/commons/CpLayoutTablet.vue";
import CpLayoutWeb from "@/components/commons/CpLayoutWeb.vue";
import { LayoutType } from "@/composables/use-window-size-wrap";
defineProps<{
  layoutType: LayoutType;
}>();
</script>
