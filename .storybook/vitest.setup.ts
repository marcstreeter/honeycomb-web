import * as a11yAddonAnnotations from '@storybook/addon-a11y/preview';
import { setProjectAnnotations } from '@storybook/react-vite';
import * as React from 'react';
import * as projectAnnotations from './preview';

// Ensure React is available globally for browser tests
if (typeof globalThis !== 'undefined') {
  globalThis.React = React;
  // Also ensure it's on window for browser environments
  if (typeof window !== 'undefined') {
    // @ts-ignore
    window.React = React;
  }
}

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
setProjectAnnotations([a11yAddonAnnotations, projectAnnotations]);
