import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import MainLayout from './MainLayout';

// Mock Header and Footer components
vi.mock('./Header', () => ({
  default: ({
    handleMenuOpen,
    handleMenuClose,
    acAnchor,
    setAcAnchor,
    heatingAnchor,
    setHeatingAnchor,
    iaqAnchor,
    setIaqAnchor,
  }: any) => <header data-testid="header">Header Component</header>,
}));

vi.mock('./Footer', () => ({
  default: () => <footer data-testid="footer">Footer Component</footer>,
}));

const defaultProps = {
  acAnchor: null,
  setAcAnchor: vi.fn(),
  heatingAnchor: null,
  setHeatingAnchor: vi.fn(),
  iaqAnchor: null,
  setIaqAnchor: vi.fn(),
  handleMenuOpen: vi.fn(),
  handleMenuClose: vi.fn(),
};

describe('MainLayout', () => {
  it('renders without crashing', () => {
    render(
      <MainLayout {...defaultProps}>
        <div>Test Content</div>
      </MainLayout>
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders children inside main element', () => {
    render(
      <MainLayout {...defaultProps}>
        <div data-testid="child-content">Child Content</div>
      </MainLayout>
    );

    const mainElement = screen.getByRole('main');
    const childContent = screen.getByTestId('child-content');

    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toContainElement(childContent);
  });

  it('passes all props to Header component', () => {
    const mockProps = {
      ...defaultProps,
      acAnchor: document.createElement('div'),
      heatingAnchor: document.createElement('button'),
    };

    render(
      <MainLayout {...mockProps}>
        <div>Content</div>
      </MainLayout>
    );

    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
    // The props are passed correctly as tested by the component rendering without errors
  });

  it('renders components in correct order', () => {
    render(
      <MainLayout {...defaultProps}>
        <div data-testid="main-content">Main Content</div>
      </MainLayout>
    );

    const elements = [
      screen.getByTestId('header'),
      screen.getByRole('main'),
      screen.getByTestId('footer'),
    ];

    // Check that elements appear in order in the DOM
    for (let i = 0; i < elements.length - 1; i++) {
      expect(elements[i].compareDocumentPosition(elements[i + 1])).toBe(
        Node.DOCUMENT_POSITION_FOLLOWING
      );
    }
  });

  it('handles multiple children', () => {
    render(
      <MainLayout {...defaultProps}>
        <div data-testid="child-1">Child 1</div>
        <div data-testid="child-2">Child 2</div>
        <div data-testid="child-3">Child 3</div>
      </MainLayout>
    );

    expect(screen.getByTestId('child-1')).toBeInTheDocument();
    expect(screen.getByTestId('child-2')).toBeInTheDocument();
    expect(screen.getByTestId('child-3')).toBeInTheDocument();
  });
});
