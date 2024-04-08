<template>
  <header class="header-wrap">
    <nav class="nav">
      <div class="left cp-text-head-4">CHUKAPOKA</div>
      <div class="right">
        <!-- TODO: 알림버튼 일단 삭제, 추후 대응할 수 있으면 다시 추가할 예정 -->
        <!-- <cp-icon-button
          type="icon"
          @click="updateVisibleNotificationDialog(true)"
        >
          <template #icon>
            <icon-notification fill-color="var(--cp-color-white)" />
          </template>
        </cp-icon-button> -->
        <!-- 현진 : menu 버튼  -->
        <cp-icon-button type="icon">
          <template #icon>
            <icon-menu
              fill-color="var(--cp-color-white)"
              @click="updateVisibleMenuModal(true)"
            >
            </icon-menu>
          </template>
        </cp-icon-button>
        <cp-menu-modal
          v-if="visibleMenuModal"
          :visible="visibleMenuModal"
          @close="updateVisibleMenuModal(false)"
        >
          <div class="menu-modal">
            <div class="login-logout">
              <cp-icon-button
                type="withText"
                text-align="start"
                @click="$emit('logout')"
              >
                <template #icon><icon-arrow-right class="icon" /></template>
                <template #text>
                  <span class="cp-text-title-1">로그아웃 하기</span>
                </template>
              </cp-icon-button>
            </div>
            <div class="additions">
              <div>
                <cp-icon-button
                  type="withText"
                  text-align="end"
                  @click="openInGithubRepo"
                >
                  <template #icon>
                    <icon-developer-info class="icon" />
                  </template>
                  <template #text>
                    <span class="cp-text-title-1">개발진 정보</span>
                  </template>
                </cp-icon-button>
              </div>
              <div>
                <cp-icon-button
                  type="withText"
                  text-align="end"
                  @click="openTextDialog('tos')"
                >
                  <template #icon>
                    <icon-privacy-policy class="icon" />
                  </template>
                  <template #text>
                    <span class="cp-text-title-1">이용약관</span>
                  </template>
                </cp-icon-button>
              </div>
              <div>
                <cp-icon-button
                  type="withText"
                  text-align="end"
                  @click="openTextDialog('pp')"
                >
                  <template #icon>
                    <icon-privacy-policy class="icon" />
                  </template>
                  <template #text>
                    <span class="cp-text-title-1">개인정보처리방침</span>
                  </template>
                </cp-icon-button>
              </div>
            </div>
            <div class="rest">
              <div class="chukapoka cp-text-head-4">CHUKAPOKA</div>
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
    <text-dialog
      v-if="visibleTextDialog && textDialogTarget"
      :visible="visibleTextDialog"
      :type="textDialogTarget"
      @close="closeTextDialog"
    />
    <!-- notification dialog -->
    <!-- <notification-dialog
      v-if="visibleNotificationDialog"
      :visible="visibleNotificationDialog"
    /> -->
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
import IconArrowRight from "@/components/commons/images/IconArrowRight.vue";
import IconDeveloperInfo from "@/components/commons/images/IconDeveloperInfo.vue";
import IconPrivacyPolicy from "@/components/commons/images/IconPrivacyPolicy.vue";
import CpIconButton from "@/components/commons/CpIconButton.vue";
import IconMenu from "@/components/commons/images/IconMenu.vue";
import IconTreeGreen from "@/components/commons/images/IconTreeGreen.vue";
import IconLetterPink from "@/components/commons/images/IconLetterPink.vue";
import CpMenuModal from "@/components/commons/CpMenuModal.vue";
import TextDialog from "@/components/init/TextDialog.vue";

// import IconNotification from "@/components/commons/images/IconNotification.vue";
// import NotificationDialog from "@/components/main/NotificationDialog.vue";

defineEmits<{
  (e: "create:tree"): void;
  (e: "logout"): void;
}>();

// const visibleNotificationDialog = ref<boolean>(false);
// if clicked, open notification dialog
// const updateVisibleNotificationDialog = (visible: boolean) => {
//   visibleNotificationDialog.value = visible;
// };

const visibleMenuModal = ref(false);

const updateVisibleMenuModal = (visible: boolean) => {
  visibleMenuModal.value = visible;
};

const openInGithubRepo = () => {
  window.open("https://github.com/Chukapoka", "_blank")?.focus();
};

const visibleTextDialog = ref<boolean>(false);
const textDialogTarget = ref<"tos" | "pp" | undefined>(undefined);
const openTextDialog = (type: "tos" | "pp") => {
  visibleTextDialog.value = true;
  textDialogTarget.value = type;
};
const closeTextDialog = () => {
  visibleTextDialog.value = false;
  textDialogTarget.value = undefined;
};
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

  .menu-modal {
    display: flex;
    flex-direction: column;
    height: 100%;
    .login-logout {
      border-bottom: solid 1px var(--cp-color-gray-300);
      padding-bottom: var(--cp-number-16);
    }
    .additions {
      padding: var(--cp-number-16);
      display: flex;
      flex-direction: column;
    }
    .icon {
      width: 21px;
      height: 21px;
    }
    .rest {
      flex: 1;
      display: flex;
      justify-content: end;
      align-items: flex-end;

      .chukapoka {
        color: var(--cp-color-red);
      }
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
  }
}
</style>
