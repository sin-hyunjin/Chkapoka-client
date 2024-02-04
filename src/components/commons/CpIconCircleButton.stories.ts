import { Component } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import CpIconCircleButton from "./CpIconCircleButton.vue";
import IconPlusVue from "./images/IconPlus.vue";
const meta: Meta<typeof CpIconCircleButton> = {
  title: "CpIconCircleButton",
  component: CpIconCircleButton,
};

//👇 This default export determines where your story goes in the story list
export default meta;
// type Story = StoryObj<typeof CpButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

// export const Solid: StoryObj<{ type: string }> = {
//   render: (args) => ({
//     components: { CpIconCircleButton },
//     setup() {
//       return { args };
//     },
//     template: '<cp-button circle v-bind="args">Solid</cp-button>',
//   }),
//   args: {
//     type: "solid",
//   },
// };


export const RedSolid: StoryObj<{
  type: string;
  icon: Component;
}> = {
  render: (args) => ({
    components: { CpIconCircleButton },
    setup() {
      return { args };
    },
    template: '<cp-icon-circle-button v-bind="args"></cp-icon-circle-button>',
  }),
  args: {
    type: "redSolid",
    icon: IconPlusVue,
  },
};
export const WhiteSolid: StoryObj<{
  type: string;
}> = {
  render: (args) => ({
    components: { CpIconCircleButton },
    setup() {
      return { args };
    },
    template: '<cp-icon-circle-button v-bind="args"></cp-icon-circle-button>',
  }),
  args: {
    type: "redSolid",
  },
};


