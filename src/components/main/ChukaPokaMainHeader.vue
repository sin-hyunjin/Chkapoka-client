<template>
  <header class="header">
    <nav class="nav">
      <div class="left cp-text-head-4">CHUKAPOKA</div>
      <div class="right">
        <icon-notification
          class="noti-btn"
          fill-color="var(--cp-color-white)"
        />
        <icon-menu class="menu-btn" fill-color="var(--cp-color-white)" />
      </div>
    </nav>
    <div class="buttons">
      <cp-button
        type="solid"
        :class-arr="['cp-text-head-4']"
        bg-color="#FFE8E8"
        text-color="var(--cp-color-black)"
        width="162px"
        height="66px"
        border-radius="12px"
      >
        나무만들기
      </cp-button>
      <cp-button
        type="solid"
        :class-arr="['cp-text-head-4']"
        bg-color="#FFE8E8"
        text-color="var(--cp-color-black)"
        width="162px"
        height="66px"
        border-radius="12px"
      >
        편지쓰기
      </cp-button>
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
import CpButton from "@/components/commons/CpButton.vue";
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
