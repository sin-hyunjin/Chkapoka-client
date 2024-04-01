<template>
  <header class="header-wrap">
    <nav class="nav">
      <div class="left cp-text-head-4">CHUKAPOKA</div>
      <div class="right">
        <cp-icon-button
          type="icon"
          @click="updateVisibleNotificationDialog(true)"
        >
          <template #icon>
            <icon-notification fill-color="var(--cp-color-white)" />
          </template>
        </cp-icon-button>

        <!-- 현진 : menu 버튼  -->
        <cp-icon-button type="icon">
          <template #icon>
            <icon-menu
              fill-color="var(--cp-color-white)"
              @click="updateVisibleMenuModel(true)"
            >
            </icon-menu>
          </template>
        </cp-icon-button>
        <cp-menu-modal
          v-if="visibleMenuModel"
          :visible="visibleMenuModel"
          @close="updateVisibleMenuModel(false)"
        >
          <div class="menu-modal">
            <div><cp-button type="solid" width="100%">로그아웃</cp-button></div>
            <div>
              <cp-button type="solid" width="100%">개발진정보</cp-button>
            </div>
            <div>
              <cp-button type="solid" width="100%">개인정보처리방침</cp-button>
            </div>
          </div>
        </cp-menu-modal>
        <!-- 메뉴버튼  끝 -->
      </div>
    </nav>
    <div class="buttons">
      <cp-icon-button
        type="withText"
        text-align="start"
        @click="$emit('create:tree')"
      >
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
    <notification-dialog
      v-if="visibleNotificationDialog"
      :visible="visibleNotificationDialog"
    />
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
import CpButton from "@/components/commons/CpButton.vue";
import CpIconButton from "@/components/commons/CpIconButton.vue";
import IconNotification from "@/components/commons/images/IconNotification.vue";
import IconMenu from "@/components/commons/images/IconMenu.vue";
import IconTreeGreen from "@/components/commons/images/IconTreeGreen.vue";
import IconLetterPink from "@/components/commons/images/IconLetterPink.vue";
import CpMenuModal from "@/components/commons/CpMenuModal.vue";
import NotificationDialog from "@/components/main/NotificationDialog.vue";

const visibleMenuModel = ref(false);

const updateVisibleMenuModel = (visible: boolean) => {
  visibleMenuModel.value = visible;
};

const visibleNotificationDialog = ref<boolean>(false);

// if clicked, open notification dialog
const updateVisibleNotificationDialog = (visible: boolean) => {
  visibleNotificationDialog.value = visible;
};

defineEmits<{
  (e: "create:tree"): void;
}>();
</script>

<style scoped lang="scss">
header {
  position: relative;
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
