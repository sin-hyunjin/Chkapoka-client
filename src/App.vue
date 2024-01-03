<template>
  <button @click="goToMain">GoToMain</button>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const goToMain = () => {
  router.push({
    name: "ChukaPokaMain",
  });
};
</script>

<style scoped lang="scss"></style>
