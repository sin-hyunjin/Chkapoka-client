<template>
  <div>
    <cp-logo />
  </div>
  <cp-button type="solid" width="100px" height="50px" @click="goToMain"
    >GoToMain</cp-button
  >
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import CpLogo from "@/components/commons/images/CpLogo.vue";
import CpButton from "@/components/commons/CpButton.vue";
const router = useRouter();
const goToMain = () => {
  router.push({
    name: "ChukaPokaMain",
  });
};
</script>

<style scoped lang="scss"></style>
