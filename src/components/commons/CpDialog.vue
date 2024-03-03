<template>
  <el-dialog
    :class="[
      'cp-dialog',
      !useHeader ? 'no-header' : '',
      !useFooter ? 'no-footer' : '',
    ]"
    v-bind="props"
    :style="innerStyle"
    v-on="dialogEmits"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template #header>
      <div class="header">
        <slot name="header" />
      </div>
    </template>
    <template #footer>
      <div class="footer">
        <slot name="footer" />
      </div>
    </template>
    <template #default>
      <slot name="default" />
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";
import { ElDialog, dialogProps, dialogEmits } from "element-plus";
import {
  LayoutType,
  useWindowSizeWrap,
} from "@/composables/use-window-size-wrap";

const { layoutType } = useWindowSizeWrap();

const props = defineProps({
  ...dialogProps,
  fullscreen: {
    type: Boolean,
    default: true,
  },
  marginTop: {
    type: String,
    default: "50px",
  },
  useHeader: {
    type: Boolean,
    default: true,
  },
  useFooter: {
    type: Boolean,
    default: true,
  },
});

defineEmits({ ...dialogEmits });

const innerStyle = computed(() => {
  const getMaxWidth = () => {
    if (
      layoutType.value === LayoutType.Web ||
      layoutType.value === LayoutType.Tablet
    ) {
      return "var(--cp-web-max-width)";
    } else {
      return "auto";
    }
  };

  return {
    "--el-dialog-margin-top": props.marginTop,
    "--el-dialog-width": getMaxWidth(),
  };
});
</script>

<style lang="scss">
.cp-dialog {
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  height: 90vh !important;

  .header,
  .footer {
    display: flex;
    flex-direction: column;
    text-align: start;
  }

  .el-dialog__body {
    flex: 1;
  }
}

.cp-dialog.no-header {
  & .el-dialog__header {
    display: none;
  }
}

.cp-dialog.no-footer {
  & .el-dialog__footer {
    display: none;
  }
}
</style>
