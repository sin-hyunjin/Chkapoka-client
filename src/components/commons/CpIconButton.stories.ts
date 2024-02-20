import type { Meta, StoryObj } from "@storybook/vue3";
import CpIconButton from "./CpIconButton.vue";
import IconEditButton from "./images/IconEditButton.vue";
import IconRefresh from "./images/IconRefresh.vue";

const meta: Meta<typeof CpIconButton> = {
  title: "CpIconButton",
  component: CpIconButton,
};

//👇 This default export determines where your story goes in the story list
export default meta;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Icon: StoryObj<{ type: string }> = {
  render: (args) => ({
    components: { CpIconButton, IconEditButton },
    setup() {
      return { args };
    },
    template:
      '<cp-icon-button v-bind="args"><icon-edit-button /></cp-icon-button>',
  }),
  args: {
    type: "icon",
  },
};

export const Text: StoryObj<{ type: string }> = {
  render: (args) => ({
    components: { CpIconButton, IconRefresh },
    setup() {
      return { args };
    },
    template:
      '<cp-icon-button v-bind="args"><icon-refresh/><span>선택 초기화</span></cp-icon-button>',
  }),
  args: {
    type: "text",
  },
};
