import { Component } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import CpButton from "./CpButton.vue";
import IconArrowLeft from "@/components/commons/images/IconArrowLeft.vue";

const meta: Meta<typeof CpButton> = {
  title: "CpButton",
  component: CpButton,
};

//👇 This default export determines where your story goes in the story list
export default meta;
// type Story = StoryObj<typeof CpButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Solid: StoryObj<{ type: string }> = {
  render: (args) => ({
    components: { CpButton },
    setup() {
      return { args };
    },
    template: '<cp-button v-bind="args">Solid</cp-button>',
  }),
  args: {
    type: "solid",
  },
};

export const Outlined: StoryObj<{ type: string }> = {
  render: (args) => ({
    components: { CpButton },
    setup() {
      return { args };
    },
    template: '<cp-button v-bind="args">Outlined</cp-button>',
  }),
  args: {
    type: "outlined",
  },
};

export const Icon: StoryObj<{
  type: string;
  textColor: string;
  icon: Component;
}> = {
  render: (args) => ({
    components: { CpButton },
    setup() {
      return { args };
    },
    template: '<cp-button v-bind="args">Icon</cp-button>',
  }),
  args: {
    type: "icon",
    textColor: "var(--cp-color-black)",
    icon: IconArrowLeft,
  },
};
