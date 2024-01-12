<template>
  <div :class="['init-container', !isInit ? 'linear-bg' : 'white-bg']">
    <div v-if="!isInit" ref="textRef" class="init-animation-text">
      <div class="init-animation-text__title cp-text-title">CHUKAPOKA</div>
      <div class="init-animation-text__description cp-text-sm-p">
        마음을 전하는 가장 따뜻한 방법
      </div>
    </div>
    <div v-else class="go-to-main">
      <div class="logo">
        <cp-logo />
      </div>
      <div class="bottom">
        <div class="text cp-text-xl-p">
          <div>따뜻한 이야기를</div>
          <div class="primary-text">간편하게</div>
        </div>
        <div class="buttons">
          <cp-button class="btn-start" type="solid" @click="$emit('start')"
            >시작하기</cp-button
          >
          <div class="more-info cp-text-sm">
            시작하기를 누르면
            <span>이용약관</span>
            /
            <span>개인정보 처리방침</span> 동의로 간주합니다.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChukaPokaInitForm",
});
</script>
<script setup lang="ts">
import { ref, onMounted, defineEmits } from "vue";
import CpLogo from "@/components/commons/images/CpLogo.vue";
import CpButton from "@/components/commons/CpButton.vue";
const textRef = ref<HTMLDivElement>();
const isInit = ref(false);

defineEmits<{
  (e: "start"): void;
}>();

onMounted(() => {
  textRef.value?.addEventListener("animationend", () => {
    // when fadeInRight animation finish
    isInit.value = true;
  });
});
</script>

<style scoped lang="scss">
@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  50% {
    opacity: 1;
    transform: translateZ(0);
  }
  100% {
    opacity: 0;
  }
}

@keyframes slowShow {
  0% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.init-container {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;

  .init-animation-text {
    animation: fadeInRight 1s;
    opacity: 0;

    &__title,
    &__description {
      color: var(--cp-color-white);
      text-align: center;
    }
  }

  .go-to-main {
    animation: slowShow 1s;
    opacity: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;

    .bottom {
      display: flex;
      flex-direction: column;
      flex: 1;

      .text {
        margin-top: auto;
        // margin-top: 128px;
        color: var(--cp-color-text-black);
        text-align: center;
      }

      .buttons {
        display: flex;
        flex-direction: column;
        align-items: center;

        .btn-start {
          margin-top: 62px;
        }

        .more-info {
          margin: 24px 0;
          color: var(--cp-text-color-grey-400);
          & span {
            text-decoration: underline;
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
    &::before {
      flex: 1;
      content: "";
    }
  }
}

.linear-bg {
  background: linear-gradient(
    168deg,
    #ffabab -5.73%,
    #ffd4ac -5.72%,
    #f55555 105.96%
  );
}
.white-bg {
  background-color: var(--cp-color-white);
}

.primary-text {
  color: var(--cp-primary-color);
}
</style>
