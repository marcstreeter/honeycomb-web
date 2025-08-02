import type { Preview } from '@storybook/react-vite';
import React from 'react';

// Ensure React is globally available for browser tests
if (typeof globalThis !== 'undefined') {
  globalThis.React = React;
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;
