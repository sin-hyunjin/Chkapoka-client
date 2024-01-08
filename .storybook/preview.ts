import type { Preview } from "@storybook/vue3";
import "@/assets/typography.scss";
import "@/assets/variables.scss";
import "@/assets/colors.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
