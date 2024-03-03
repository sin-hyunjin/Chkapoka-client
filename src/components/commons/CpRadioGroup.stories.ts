import type { Meta, StoryObj } from "@storybook/vue3";
import CpRadioGroup from "./CpRadioGroup.vue";
import { ref } from "vue";

const meta: Meta<typeof CpRadioGroup> = {
  title: "CpRadioGroup",
  component: CpRadioGroup,
};

//👇 This default export determines where your story goes in the story list
export default meta;
// type Story = StoryObj<typeof CpRadioGroup>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: StoryObj = {
  render: () => ({
    components: { CpRadioGroup },
    setup() {
      const activeTreeTab = ref("entire");
      const treeTabs = [
        { label: "전체", name: "entire" },
        { label: "혼자보는", name: "alone" },
        { label: "다같이 보는", name: "together" },
        { label: "새로만든", name: "new" },
      ];
      return { treeTabs, activeTreeTab };
    },
    template: `
      <cp-radio-group
        v-model="activeTreeTab"
        type="button"
        :items="treeTabs"
      />
    `,
  }),
};

export const NoStretch: StoryObj = {
  render: () => ({
    components: { CpRadioGroup },
    setup() {
      const activeTreeTab = ref("entire");
      const treeTabs = [
        { label: "전체", name: "entire" },
        { label: "혼자보는", name: "alone" },
        { label: "다같이 보는", name: "together" },
        { label: "새로만든", name: "new" },
      ];
      return { treeTabs, activeTreeTab };
    },
    template: `
      <cp-radio-group
        v-model="activeTreeTab"
        type="button"
        :items="treeTabs"
        :stretch="false"
      />
    `,
  }),
};
