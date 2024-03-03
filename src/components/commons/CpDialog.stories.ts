import type { Meta, StoryObj } from "@storybook/vue3";
import CpButton from "./CpButton.vue";
import CpDialog from "./CpDialog.vue";
import { ref } from "vue";

const meta: Meta<typeof CpDialog> = {
  title: "CpDialog",
  component: CpDialog,
};

//👇 This default export determines where your story goes in the story list
export default meta;
// type Story = StoryObj<typeof CpDialog>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: StoryObj = {
  render: (args) => ({
    components: { CpDialog, CpButton },
    setup() {
      return { args };
    },
    data() {
      const visible = ref<boolean>(false);
      const updateVisible = (value: boolean) => {
        visible.value = value;
      };
      return {
        visible,
        updateVisible,
      };
    },
    template: `
      <cp-button type="text" @click="updateVisible(true)">Open</cp-button>
      <cp-dialog v-model="visible" margin-top="50px"> 123 </cp-dialog>
    `,
  }),
  args: {},
};

export const NotFullscreen: StoryObj = {
  render: (args) => ({
    components: { CpDialog, CpButton },
    setup() {
      return { args };
    },
    data() {
      const visible = ref<boolean>(false);
      const updateVisible = (value: boolean) => {
        visible.value = value;
      };
      return {
        visible,
        updateVisible,
      };
    },
    template: `
      <cp-button type="text" @click="updateVisible(true)">Open</cp-button>
      <cp-dialog v-model="visible" :fullscreen="false"> 123 </cp-dialog>
    `,
  }),
  args: {},
};

export const HeaderFooter: StoryObj = {
  render: (args) => ({
    components: { CpDialog, CpButton },
    setup() {
      return { args };
    },
    data() {
      const visible = ref<boolean>(false);
      const updateVisible = (value: boolean) => {
        visible.value = value;
      };
      return {
        visible,
        updateVisible,
      };
    },
    template: `
      <cp-button type="text" @click="updateVisible(true)">Open</cp-button>
      <cp-dialog v-model="visible">
        <template #header>
          <div class="header">Header</div>
        </template>
        <div>BODY</div>
        <template #footer>
          <div class="footer">Footer</div>
        </template>
      </cp-dialog>
    `,
  }),
  args: {},
};

export const NoHeader: StoryObj = {
  render: (args) => ({
    components: { CpDialog, CpButton },
    setup() {
      return { args };
    },
    data() {
      const visible = ref<boolean>(false);
      const updateVisible = (value: boolean) => {
        visible.value = value;
      };
      return {
        visible,
        updateVisible,
      };
    },
    template: `
      <cp-button type="text" @click="updateVisible(true)">Open</cp-button>
      <cp-dialog v-model="visible" :use-header="false" >
        <div>Body</div>
        <template #footer>
          <div class="footer">Footer</div>
        </template>
      </cp-dialog>
    `,
  }),
  args: {},
};

export const NoFooter: StoryObj = {
  render: (args) => ({
    components: { CpDialog, CpButton },
    setup() {
      return { args };
    },
    data() {
      const visible = ref<boolean>(false);
      const updateVisible = (value: boolean) => {
        visible.value = value;
      };
      return {
        visible,
        updateVisible,
      };
    },
    template: `
      <cp-button type="text" @click="updateVisible(true)">Open</cp-button>
      <cp-dialog v-model="visible" :use-footer="false" >
        <template #header>
          HEADER
        </template>
        <div>Body</div>
      </cp-dialog>
    `,
  }),
  args: {},
};
