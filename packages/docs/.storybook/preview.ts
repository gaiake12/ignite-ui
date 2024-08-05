import type { Preview } from "@storybook/react";
import { background } from "storybook/internal/theming";
import { themes } from "storybook/internal/theming";


const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark
    }
  },
};

export default preview;
