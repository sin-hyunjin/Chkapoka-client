<template>
  <div class="chuka-poka-link-footer">
    <cp-button type="solid" @click="$emit('create:treeItem')">
      트리 아이템 작성하기
    </cp-button>
    <cp-button type="solid" @click="$emit('link')"> 초대하기 </cp-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChukaPokaLinkFooter",
});
</script>

<script setup lang="ts">
import CpButton from "@/components/commons/CpButton.vue";

defineEmits<{
  (e: "create:treeItem"): void;
  (e: "link"): void;
}>();
</script>

<style scoped lang="scss">
.chuka-poka-link-footer {
  height: 20%;
  background-color: var(--ground-color);

  display: flex;
  flex-direction: column;
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

  ::v-deep(.el-button) {
    margin: 0px;
  }
}
</style>
