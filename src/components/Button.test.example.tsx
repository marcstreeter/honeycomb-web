// Example showing how to use the new test setup
// This demonstrates the benefits for future test writing

import { describe, expect, it } from 'vitest';
import { render, screen } from '../test-utils'; // Custom render with providers
import Button from './Button';

describe.skip('Button Component (New Test Setup Example)', () => {
  it('renders with MUI mocking automatically handled', () => {
    render(<Button>Test Button</Button>);

    // No need to mock MUI components - handled globally
    const button = screen.getByTestId('mui-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Test Button');
  });

  it('handles icons with automatic Icon mocking', () => {
    render(
      <Button icon={<Icon iconKey="phone" />} endIcon={<Icon iconKey="calendar" />}>
        Call Now
      </Button>
    );

    // Icon component is automatically mocked - no async loading issues
    expect(screen.getByTestId('icon-phone')).toBeInTheDocument();
    expect(screen.getByTestId('icon-calendar')).toBeInTheDocument();
    expect(screen.getByTestId('start-icon')).toBeInTheDocument();
    expect(screen.getByTestId('end-icon')).toBeInTheDocument();
  });

  it('works with CSS custom properties', () => {
    render(
      <Button bgColor="var(--color-red)" textColor="var(--color-white)">
        Red Button
      </Button>
    );

    // CSS custom properties are mocked and work in tests
    const button = screen.getByTestId('mui-button');
    expect(button).toHaveStyle({ backgroundColor: 'var(--color-red)' });
  });

  it('integrates with routing automatically', () => {
    render(<Button href="/test-link">Link Button</Button>);

    // Router context is provided automatically
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/test-link');
  });
});

// Import the Icon component to demonstrate it's mocked
import Icon from '../assets/icons/Icon';
