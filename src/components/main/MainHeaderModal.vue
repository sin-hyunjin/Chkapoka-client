<template>
  <div v-if="props.visible" class="modal-overlay">
    <div class="modal-content">
      <!-- <span class="text cp-text-head-4">Chukapoka</span> -->
      <el-button class="modal-close" type="danger" @click="closeModal">
        <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
        close
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, watchEffect } from "vue";
import { ElButton } from "element-plus";
import { CircleCloseFilled } from "@element-plus/icons-vue";

/** Props 정의 */
const props = defineProps({
  visible: Boolean,
});

/** close 이벤트를 발신하기 위한 emit 함수 정의 */
const emit = defineEmits(["close"]);
function closeModal() {
  emit("close");
}

/** 모달창이 활성화되면 스크롤 기능 비활성화 */
watchEffect(() => {
  if (props.visible) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});
</script>

<style scoped lang="scss">
.modal-overlay {
  position: absolute;
  top: 0;
  right: 0; /* 초기 위치를 오른쪽으로 설정 */
  width: 100%;
  height: 100vh;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명한 배경 */

  .modal-content {
    position: fixed;
    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    flex-direction: column;

    width: 13rem;
    min-width: 15vw;
    height: 100%;
    padding-top: 10px;

    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border: 1px rgba(0, 0, 0, 0.344) solid;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
    background-color: var(--cp-color-white);
    animation: modal-animation 0.4s ease;

    .modal-close {
      align-self: flex-end; /* 오른쪽 정렬 */
      margin-top: 1px;
      margin-right: 10px; /* 여백 추가 */
      padding: 10px;
      background-color: var(--cp-color-red);
    }

    span {
      margin: 15px;
      color: black;
    }
  }

  /** 모달 애니메이션 */
  @keyframes modal-animation {
    0% {
      right: -100%;
      opacity: 0; /* 시작할 때 투명도를 0으로 설정 */
    }

    100% {
      right: 0;
    }
  }
}
</style>
