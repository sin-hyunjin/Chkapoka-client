import type { Meta, StoryObj } from "@storybook/vue3";
import TreeEditSelectTreeCard from "./TreeEditSelectTreeCard.vue";
import IconTree from "@/components/commons/images/tree/IconTree.vue";

const meta: Meta<typeof TreeEditSelectTreeCard> = {
  title: "TreeEditSelectTreeCard",
  component: TreeEditSelectTreeCard,
};

//👇 This default export determines where your story goes in the story list
export default meta;
// type Story = StoryObj<typeof CpButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

export const TreeCard: StoryObj<{
  type: string;
}> = {
  render: (args) => ({
    components: { TreeEditSelectTreeCard, IconTree },
    setup() {
      return { args };
    },
    template: `<tree-edit-select-tree-card v-bind="args"><icon-tree/></tree-edit-select-tree-card`,
  }),
  args: {
    type: "treeCard",
  },
};
export const BackgroundCard: StoryObj<{
  type: string;
  bgColor: string;
}> = {
  render: (args) => ({
    components: { TreeEditSelectTreeCard },
    setup() {
      return { args };
    },
    template: `<tree-edit-select-tree-card v-bind="args"></tree-edit-select-tree-card>`,
  }),
  args: {
    type: "backgroundCard",
    bgColor: "var(--cp-color-pink)",
  },
};
