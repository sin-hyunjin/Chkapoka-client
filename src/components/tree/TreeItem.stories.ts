import type { Meta, StoryObj } from "@storybook/vue3";
import TreeItem from "./TreeItem.vue";

const meta: Meta<typeof TreeItem> = {
  title: "TreeItem",
  component: TreeItem,
};

//👇 This default export determines where your story goes in the story list
export default meta;
// type Story = StoryObj<typeof CpButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

export const Default: StoryObj<{
  text: string;
}> = {
  render: (args) => ({
    components: { TreeItem },
    setup() {
      return { args };
    },
    template: `<tree-item v-bind="args" />`,
  }),
  args: {
    text: "몇글자까지가능한지알려주세요",
  },
};
