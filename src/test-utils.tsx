import { createTheme, ThemeProvider } from '@mui/material/styles';
import { type RenderOptions, render } from '@testing-library/react';
import type { ReactElement, ReactNode } from 'react';
import { HashRouter } from 'react-router-dom';
import { vi } from 'vitest';

// Create a default MUI theme for testing
const testTheme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#e00404',
    },
  },
});

// Custom render function that includes common providers
interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  initialEntries?: string[];
  theme?: typeof testTheme;
}

function customRender(
  ui: ReactElement,
  { initialEntries = ['/'], theme = testTheme, ...renderOptions }: CustomRenderOptions = {}
) {
  function Wrapper({ children }: { children: ReactNode }) {
    return (
      <HashRouter>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </HashRouter>
    );
  }

  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

// Mock data generators for consistent test data
export const mockNavProps = {
  acAnchor: null,
  setAcAnchor: vi.fn(),
  heatingAnchor: null,
  setHeatingAnchor: vi.fn(),
  iaqAnchor: null,
  setIaqAnchor: vi.fn(),
  handleMenuOpen: vi.fn(),
  handleMenuClose: vi.fn(),
};

export const mockMainLayoutProps = {
  ...mockNavProps,
  children: <div>Test Content</div>,
};

// Helper to test responsive behavior
export function setMobileViewport() {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 375,
  });

  // Mock matchMedia for mobile
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: query.includes('600px') || query.includes('sm'),
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
}

export function setDesktopViewport() {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 1920,
  });

  // Mock matchMedia for desktop
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: !query.includes('600px') && !query.includes('sm'),
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
}

// Custom assertions
export function expectButtonToHaveStyles(
  button: HTMLElement,
  expectedStyles: Record<string, string>
) {
  Object.entries(expectedStyles).forEach(([property, value]) => {
    expect(button).toHaveStyle({ [property]: value });
  });
}

// Re-export everything from testing-library
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

// Override render with our custom version
export { customRender as render };
