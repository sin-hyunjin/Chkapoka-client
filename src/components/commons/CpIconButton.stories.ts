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
    template: `
        <cp-icon-button v-bind="args">
          <template #icon>
            <icon-edit-button />
          </template>
        </cp-icon-button>
      `,
  }),
  args: {
    type: "icon",
  },
};

export const withTextTop: StoryObj<{ type: string; textAlign: string }> = {
  render: (args) => ({
    components: { CpIconButton, IconRefresh },
    setup() {
      return { args };
    },
    template: `
    <cp-icon-button v-bind="args">
      <template #icon>
        <icon-refresh />
      </template>
      <template #text>
        선택 초기화
      </template>
    </cp-icon-button>
  `,
  }),
  args: {
    type: "withText",
    textAlign: "top",
  },
};

export const withTextBottom: StoryObj<{ type: string; textAlign: string }> = {
  render: (args) => ({
    components: { CpIconButton, IconRefresh },
    setup() {
      return { args };
    },
    template: `
    <cp-icon-button v-bind="args">
      <template #icon>
        <icon-refresh />
      </template>
      <template #text>
        선택 초기화
      </template>
    </cp-icon-button>
  `,
  }),
  args: {
    type: "withText",
    textAlign: "bottom",
  },
};

export const withTextStart: StoryObj<{ type: string; textAlign: string }> = {
  render: (args) => ({
    components: { CpIconButton, IconRefresh },
    setup() {
      return { args };
    },
    template: `
    <cp-icon-button v-bind="args">
      <template #icon>
        <icon-refresh />
      </template>
      <template #text>
        선택 초기화
      </template>
    </cp-icon-button>
  `,
  }),
  args: {
    type: "withText",
    textAlign: "start",
  },
};

export const withTextEnd: StoryObj<{ type: string; textAlign: string }> = {
  render: (args) => ({
    components: { CpIconButton, IconRefresh },
    setup() {
      return { args };
    },
    template: `
    <cp-icon-button v-bind="args">
      <template #icon>
        <icon-refresh />
      </template>
      <template #text>
        선택 초기화
      </template>
    </cp-icon-button>
  `,
  }),
  args: {
    type: "withText",
    textAlign: "end",
  },
};
