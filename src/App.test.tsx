import { fireEvent, render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import App from './App';
import Button from './components/Button';

// Mock the MainLayout and HomeLayout components
vi.mock('./layouts/MainLayout/MainLayout', () => ({
  default: ({
    children,
    handleMenuOpen,
    handleMenuClose,
    acAnchor,
    heatingAnchor,
    iaqAnchor,
  }: any) => (
    <div
      data-testid="main-layout"
      data-ac-anchor={acAnchor ? 'present' : 'null'}
      data-heating-anchor={heatingAnchor ? 'present' : 'null'}
      data-iaq-anchor={iaqAnchor ? 'present' : 'null'}
    >
      <Button onClick={(e) => handleMenuOpen(e, vi.fn())} data-testid="menu-button">
        Open Menu
      </Button>
      <Button onClick={() => handleMenuClose(vi.fn())} data-testid="close-button">
        Close Menu
      </Button>
      {children}
    </div>
  ),
}));

vi.mock('./layouts/Home/HomeLayout', () => ({
  default: () => <div data-testid="home-layout">Home Layout Content</div>,
}));

const renderApp = () => {
  return render(
    <HashRouter>
      <App />
    </HashRouter>
  );
};

describe('App', () => {
  it('renders without crashing', () => {
    renderApp();
    expect(screen.getByTestId('main-layout')).toBeInTheDocument();
    expect(screen.getByTestId('home-layout')).toBeInTheDocument();
  });

  it('passes menu state props to MainLayout', () => {
    renderApp();
    const mainLayout = screen.getByTestId('main-layout');
    expect(mainLayout).toHaveAttribute('data-ac-anchor', 'null');
    expect(mainLayout).toHaveAttribute('data-heating-anchor', 'null');
    expect(mainLayout).toHaveAttribute('data-iaq-anchor', 'null');
  });

  it('handles menu open events', () => {
    renderApp();
    const menuButton = screen.getByTestId('menu-button');
    fireEvent.click(menuButton);
    // Test passes if no errors are thrown
    expect(menuButton).toBeInTheDocument();
  });

  it('handles menu close events', () => {
    renderApp();
    const closeButton = screen.getByTestId('close-button');
    fireEvent.click(closeButton);
    // Test passes if no errors are thrown
    expect(closeButton).toBeInTheDocument();
  });

  it('renders HomeLayout inside MainLayout', () => {
    renderApp();
    const mainLayout = screen.getByTestId('main-layout');
    const homeLayout = screen.getByTestId('home-layout');
    expect(mainLayout).toContainElement(homeLayout);
  });
});
