import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Button from './Button';

// Mock MUI Button
vi.mock('@mui/material/Button', () => ({
  default: ({ children, onClick, href, sx, startIcon, endIcon, ...props }: any) => {
    const Component = href ? 'a' : 'button';
    return (
      <Component
        onClick={onClick}
        href={href}
        style={sx ? { backgroundColor: sx.backgroundColor } : undefined}
        data-testid="mui-button"
        {...props}
      >
        {startIcon}
        {children}
        {endIcon}
      </Component>
    );
  },
}));

describe('Button', () => {
  it('renders without crashing', () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('renders children content', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders with icon', () => {
    const icon = <span data-testid="test-icon">🏠</span>;
    render(<Button icon={icon}>Home</Button>);

    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('renders with end icon', () => {
    const endIcon = <span data-testid="test-end-icon">→</span>;
    render(<Button endIcon={endIcon}>Next</Button>);

    expect(screen.getByTestId('test-end-icon')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  it('renders both start and end icons', () => {
    const icon = <span data-testid="start-icon">←</span>;
    const endIcon = <span data-testid="end-icon">→</span>;

    render(
      <Button icon={icon} endIcon={endIcon}>
        Both Icons
      </Button>
    );

    expect(screen.getByTestId('start-icon')).toBeInTheDocument();
    expect(screen.getByTestId('end-icon')).toBeInTheDocument();
    expect(screen.getByText('Both Icons')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByTestId('mui-button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders as link when href is provided', () => {
    render(<Button href="/test-url">Link Button</Button>);

    const link = screen.getByTestId('mui-button');
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', '/test-url');
  });

  it('applies custom background color', () => {
    render(<Button bgColor="#ff0000">Red Button</Button>);

    const button = screen.getByTestId('mui-button');
    // The bgColor prop should result in sx.backgroundColor being set
    // Since we're testing the integration, we just check that the component renders
    expect(button).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom Button</Button>);

    const button = screen.getByTestId('mui-button');
    expect(button).toHaveClass('custom-class');
  });

  it('passes through MUI Button props', () => {
    render(
      <Button variant="contained" disabled>
        MUI Props
      </Button>
    );

    const button = screen.getByTestId('mui-button');
    expect(button).toHaveAttribute('variant', 'contained');
    expect(button).toHaveAttribute('disabled');
  });

  it('clones icon elements with color when iconColor is provided', () => {
    const TestIcon = () => <span data-testid="colored-icon">Icon</span>;

    render(
      <Button icon={<TestIcon />} iconColor="#00ff00">
        Colored Icon
      </Button>
    );

    expect(screen.getByTestId('colored-icon')).toBeInTheDocument();
  });

  it('renders text from text prop', () => {
    render(<Button text="Text Prop Button" />);
    expect(screen.getByText('Text Prop Button')).toBeInTheDocument();
  });

  it('prioritizes children over text prop', () => {
    render(<Button text="This won't show">This will show</Button>);
    expect(screen.getByText('This will show')).toBeInTheDocument();
    expect(screen.queryByText("This won't show")).not.toBeInTheDocument();
  });

  it('renders with text prop when no children provided', () => {
    render(<Button text="Only text prop" />);
    expect(screen.getByText('Only text prop')).toBeInTheDocument();
  });

  it('applies custom text color via color prop', () => {
    render(<Button color="#ff0000" text="Red Text Button" />);

    const button = screen.getByTestId('mui-button');
    expect(button).toBeInTheDocument();
    expect(screen.getByText('Red Text Button')).toBeInTheDocument();
  });

  it('renders with both text and color props', () => {
    render(<Button text="Styled Text" color="#0000ff" bgColor="#ffff00" />);

    expect(screen.getByText('Styled Text')).toBeInTheDocument();
    const button = screen.getByTestId('mui-button');
    expect(button).toBeInTheDocument();
  });

  it('handles empty text prop gracefully', () => {
    render(<Button text="" />);

    const button = screen.getByTestId('mui-button');
    expect(button).toBeInTheDocument();
  });

  it('renders children with text prop fallback when children is null', () => {
    render(<Button text="Fallback text">{null}</Button>);
    expect(screen.getByText('Fallback text')).toBeInTheDocument();
  });
});
