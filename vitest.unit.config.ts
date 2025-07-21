/// <reference types="vitest/config" />

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(dirname, './src/components'),
      '@layouts': path.resolve(dirname, './src/layouts'),
      '@assets': path.resolve(dirname, './src/assets'),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.ts'],
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['src/**/*.stories.{js,jsx,ts,tsx}', 'node_modules/**/*'],
    globals: true,
  },
});
