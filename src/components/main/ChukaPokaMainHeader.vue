<template>
  <header class="header-wrap">
    <nav class="nav">
      <div class="left cp-text-head-4">CHUKAPOKA</div>
      <div class="right">
        <cp-icon-button class="noti-btn" type="icon">
          <template #icon>
            <icon-notification fill-color="var(--cp-color-white)" />
          </template>
        </cp-icon-button>
        <cp-icon-button class="menu-btn" type="icon">
          <template #icon>
            <icon-menu fill-color="var(--cp-color-white)" />
          </template>
        </cp-icon-button>
      </div>
    </nav>
    <div class="buttons">
      <cp-icon-button
        class="create-tree-btn"
        type="withText"
        text-align="start"
        bg-color="#FFE8E8"
        text-color="var(--cp-color-black)"
      >
        <template #icon>
          <icon-menu fill-color="var(--cp-color-white)" />
        </template>
        <template #text>
          <div class="text cp-text-head-4'">나무만들기</div>
        </template>
      </cp-icon-button>
      <cp-icon-button
        class="create-tree-btn"
        type="withText"
        text-align="start"
        bg-color="#FFE8E8"
        text-color="var(--cp-color-black)"
      >
        <template #icon>
          <icon-menu fill-color="var(--cp-color-white)" />
        </template>
        <template #text>
          <div class="text cp-text-head-4'">편지쓰기</div>
        </template>
      </cp-icon-button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChukaPokaMainHeader",
});
</script>
<script setup lang="ts">
import CpIconButton from "@/components/commons/CpIconButton.vue";
import IconNotification from "@/components/commons/images/IconNotification.vue";
import IconMenu from "@/components/commons/images/IconMenu.vue";
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
      .menu-btn {
        margin-left: 16px;
      }

      & .noti-btn:hover {
        cursor: pointer;
      }
      & .menu-btn:hover {
        cursor: pointer;
      }
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
  }
}
</style>
