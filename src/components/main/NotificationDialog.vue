<template>
  <div>
    <cp-dialog v-model="visible" :use-footer="false">
      <template #header>
        <div class="cp-text-title-2">알림</div>
      </template>
      <div class="noti-list">
        <div class="noti-icon">
          <div class="type-icon"><icon-notification-tree /></div>
        </div>
        <div class="noti-content">
          <div class="noti-header">
            <div class="title cp-text-title-2">새로운 트리</div>
            <div class="header-right">
              <div class="type-circle"></div>
              <div class="type-text">트리</div>
            </div>
          </div>
          <div class="noti-body">친구에게서 공유된 새로운 트리가 있어요!</div>
          <div class="noti-footer">2024.01.03</div>
        </div>
      </div>
    </cp-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ChukaPokaMainHeader",
});
</script>
<script setup lang="ts">
import CpDialog from "../commons/CpDialog.vue";
import IconNotificationTree from "../commons/images/IconNotificationTree.vue";

const visible = ref<boolean>(true);
</script>

<style scoped lang="scss">
.noti-list {
  display: flex;
  padding: var(--cp-number-12) var(--cp-number-8);

  .noti-icon {
    margin-right: var(--cp-number-8);
  }

  .noti-content {
    width: 100%;

    .noti-header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .header-right {
        margin-left: auto;
        display: flex;
        align-items: center;

        .type-text {
          color: var(--cp-color-gray-500);
        }

        .type-circle {
          width: 6px;
          height: 6px;
          margin-right: var(--cp-number-8);
          background-color: var(--cp-color-red);
          border-radius: 100%;
        }
      }
    }

    .noti-body {
      margin: var(--cp-number-4) 0 var(--cp-number-8);
    }

    .noti-footer {
      display: flex;
      justify-content: flex-end;
      color: var(--cp-color-gray-500);
    }
  }
}
</style>
