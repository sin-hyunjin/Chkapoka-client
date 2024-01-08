import type { Meta, StoryObj } from "@storybook/vue3";
import CpButton from "./CpButton.vue";

const meta: Meta<typeof CpButton> = {
  title: "CpButton",
  component: CpButton,
};

//👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof CpButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Solid: Story = {
  render: (args: { any: string }) => ({
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

export const Outlined: Story = {
  render: (args: { any: string }) => ({
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
