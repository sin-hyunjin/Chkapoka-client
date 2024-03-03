import type { Meta, StoryObj } from "@storybook/vue3";
import CpTabs from "./CpTabs.vue";
import { ref } from "vue";

const meta: Meta<typeof CpTabs> = {
  title: "CpTabs",
  component: CpTabs,
};

//👇 This default export determines where your story goes in the story list
export default meta;
// type Story = StoryObj<typeof CpTabs>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: StoryObj = {
  render: (args) => ({
    components: { CpTabs },
    setup() {
      const activeTab = ref("myTree");
      return { args, activeTab };
    },
    template: `
      <cp-tabs v-bind="args" v-model="activeTab">
        <template #myTree>내트리</template>
        <template #notYetSendTree>공유받은트리</template>
        <template #myTreeItem>내트리아이템</template>
      </cp-tabs>
    `,
  }),
  args: {
    tabs: [
      {
        label: "내트리",
        name: "myTree",
      },
      {
        label: "공유받은트리",
        name: "notYetSendTree",
      },
      {
        label: "내트리아이템",
        name: "myTreeItem",
      },
    ],
    stretch: true,
  },
};
