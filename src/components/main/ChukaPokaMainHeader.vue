<template>
  <header class="header-wrap">
    <nav class="nav">
      <div class="left cp-text-head-4">CHUKAPOKA</div>
      <div class="right">
        <cp-icon-button type="icon" @click="updateVisible">
          <template #icon>
            <icon-notification fill-color="var(--cp-color-white)" />
          </template>
        </cp-icon-button>
        <cp-icon-button type="icon">
          <template #icon>
            <icon-menu fill-color="var(--cp-color-white)" />
          </template>
        </cp-icon-button>
      </div>
    </nav>
    <div class="buttons">
      <cp-icon-button type="withText" text-align="start">
        <template #icon>
          <icon-tree-green fill-color="var(--cp-color-white)" />
        </template>
        <template #text>
          <div class="text cp-text-head-4'">나무만들기</div>
        </template>
      </cp-icon-button>
      <cp-icon-button type="withText" text-align="start">
        <template #icon>
          <icon-letter-pink fill-color="var(--cp-color-white)" />
        </template>
        <template #text>
          <div class="text cp-text-head-4'">편지쓰기</div>
        </template>
      </cp-icon-button>
    </div>
    <!-- notification dialog -->
    <template v-if="visible == true">
      <div><notification-dialog /></div>
    </template>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChukaPokaMainHeader",
});
</script>
<script setup lang="ts">
import { ref } from "vue";
import CpIconButton from "@/components/commons/CpIconButton.vue";
import IconNotification from "@/components/commons/images/IconNotification.vue";
import IconMenu from "@/components/commons/images/IconMenu.vue";
import IconTreeGreen from "@/components/commons/images/IconTreeGreen.vue";
import IconLetterPink from "@/components/commons/images/IconLetterPink.vue";
import NotificationDialog from "./NotificationDialog.vue";

const visible = ref<boolean>(false);

// if clicked, open notification dialog
const updateVisible = () => {
  visible.value = true;
};
</script>

<style scoped lang="scss">
header {
  padding-top: 44px;
  padding-bottom: 32px;

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px 16px;
    margin-bottom: 18px;

    .left {
      color: var(--cp-color-white);
    }

    .right {
      display: flex;
      align-items: center;
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
  }
}
</style>
