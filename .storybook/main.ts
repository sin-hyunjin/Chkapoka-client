import type { StorybookConfig } from "@storybook/vue3-vite";
import ElementPlus from "unplugin-element-plus/vite";
import path from "path";

import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  core: {
    builder: "@storybook/builder-vite",
  },
  // async viteFinal(config, { configType }) {
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [ElementPlus({})],
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../src"),
        },
      },
    });
  },
};
export default config;
