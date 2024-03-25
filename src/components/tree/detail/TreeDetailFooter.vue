<template>
  <div class="tree-detail-footer">
    <!-- <template>
      <cp-button type="solid">초대하기</cp-button>
    </template> -->
    <cp-icon-circle-button class="menu__container">
      <icon-plus />
    </cp-icon-circle-button>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeDetailFooter",
});
</script>

<script setup lang="ts">

import CpIconCircleButton from "@/components/commons/CpIconCircleButton.vue";
import IconPlus from "@/components/commons/images/IconPlus.vue";


import { defineProps } from "vue";
defineProps<{
  id: string;
}>();

</script>

<style scoped lang="scss">
.tree-detail-footer {
  height: 20%;
  background-color: #cbe8bf;

  display: flex;
  justify-content: center;
  align-items: center;

  .menu {
    &__container:focus {
      transform: rotate(45deg);
    }
    &__item:active {
      transform: scale(0.95);
    }
  }
}

</style>
