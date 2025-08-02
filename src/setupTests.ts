import '@testing-library/jest-dom';
import { beforeAll, vi } from 'vitest';

// Global test setup
beforeAll(() => {
  // Mock CSS custom properties that are used throughout the app
  Object.defineProperty(window, 'getComputedStyle', {
    value: () => ({
      getPropertyValue: (prop: string) => {
        const customProps: Record<string, string> = {
          '--color-red': '#e00404',
          '--color-blue': '#2196f3',
          '--color-yellow': '#ffd700',
          '--color-black': '#000000',
          '--color-white': '#ffffff',
          '--color-dark-yellow': '#b8860b',
          '--font-size-button': '14px',
          '--font-weight-semibold': '600',
          '--font-size-nav': '16px',
          '--font-size-base': '14px',
          '--font-size-lg': '18px',
          '--font-weight-bold': '700',
        };
        return customProps[prop] || '';
      },
    }),
  });

  // Mock IntersectionObserver (often needed for scroll-based components)
  global.IntersectionObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));

  // Mock ResizeObserver (often needed for responsive components)
  global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));

  // Mock window.matchMedia (for responsive design testing)
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // deprecated
      removeListener: vi.fn(), // deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

// Global MUI mocks (consistent across all tests)
vi.mock('@mui/material/Button', () => ({
  default: ({
    children,
    onClick,
    href,
    sx,
    startIcon,
    endIcon,
    className,
    ...props
  }: Record<string, unknown>) => {
    const Component = href ? 'a' : 'button';
    return {
      type: Component,
      props: {
        onClick,
        href,
        className,
        style: sx ? { backgroundColor: sx.backgroundColor || sx.background } : undefined,
        'data-testid': 'mui-button',
        ...props,
        children: [
          startIcon
            ? { type: 'span', props: { 'data-testid': 'start-icon', children: startIcon } }
            : null,
          children,
          endIcon
            ? { type: 'span', props: { 'data-testid': 'end-icon', children: endIcon } }
            : null,
        ].filter(Boolean),
      },
    };
  },
}));

vi.mock('@mui/material/AppBar', () => ({
  AppBar: ({ children, position, sx, className, ...props }: Record<string, unknown>) => ({
    type: 'header',
    props: {
      className,
      style: sx,
      'data-testid': 'mui-appbar',
      'data-position': position,
      ...props,
      children,
    },
  }),
}));

vi.mock('@mui/material/Toolbar', () => ({
  Toolbar: ({ children, sx, className, ...props }: Record<string, unknown>) => ({
    type: 'div',
    props: {
      className,
      style: sx,
      'data-testid': 'mui-toolbar',
      ...props,
      children,
    },
  }),
}));

// Mock the dynamic Icon component to avoid async loading issues in tests
vi.mock('./assets/icons/Icon', () => ({
  default: ({ iconKey, className, style, fill, ...props }: Record<string, unknown>) => ({
    type: 'svg',
    props: {
      className,
      style,
      fill,
      'data-testid': `icon-${iconKey}`,
      'data-icon-key': iconKey,
      ...props,
      children: { type: 'title', props: { children: `${iconKey} icon` } },
    },
  }),
}));

// Common test utilities - available globally
declare global {
  namespace Vi {
    interface JestAssertion<T = unknown> {
      toBeInTheDocument(): T;
      toHaveClass(className: string): T;
      toHaveStyle(style: Record<string, string | number>): T;
    }
  }
}
