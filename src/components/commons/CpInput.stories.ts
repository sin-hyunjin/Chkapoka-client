import type { Meta, StoryObj } from "@storybook/vue3";
import CpInput from "./CpInput.vue";
import { ref } from "vue";

const meta: Meta<typeof CpInput> = {
  title: "CpInput",
  component: CpInput,
};

//👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof CpInput>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args: { any: string }) => ({
    components: { CpInput },
    setup() {
      return { args };
    },
    data() {
      const modelValue = ref("");
      return {
        modelValue,
      };
    },
    template: '<cp-input v-model="modelValue" v-bind="args" />',
  }),
  args: {
    type: "text",
    placeholder: "please input text...",
  },
};
