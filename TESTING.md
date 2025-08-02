# Testing Setup Guide

This project uses **Vitest** with a comprehensive test setup designed to make writing tests easier and more consistent.

## Test Configuration

### Files
- `src/setupTests.ts` - Global test configuration and mocks
- `src/test-utils.tsx` - Custom render functions and test utilities
- `src/components/Button.test.example.tsx` - Example showing new testing patterns

### What's Automatically Mocked

#### MUI Components
All MUI components are automatically mocked with consistent behavior:
```tsx
// No need to mock these manually in each test
<Button>, <AppBar>, <Toolbar>, <Menu>, <MenuItem>, etc.
```

#### Icon Component
The dynamic Icon component is mocked to avoid async loading:
```tsx
<Icon iconKey="phone" /> // Renders as <svg data-testid="icon-phone">
```

#### Browser APIs
- `IntersectionObserver` - For scroll-based components
- `ResizeObserver` - For responsive components  
- `window.matchMedia` - For responsive design testing
- CSS custom properties (--color-red, --font-size-button, etc.)

## Writing Tests

### Import from test-utils
```tsx
import { render, screen, fireEvent, userEvent } from '../test-utils';
// Instead of importing from @testing-library/react directly
```

### Basic Component Test
```tsx
import { render, screen } from '../test-utils';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

### Testing with Icons
```tsx
it('shows phone icon', () => {
  render(<Button icon={<Icon iconKey="phone" />}>Call</Button>);
  expect(screen.getByTestId('icon-phone')).toBeInTheDocument();
});
```

### Testing Responsive Behavior
```tsx
import { setMobileViewport, setDesktopViewport } from '../test-utils';

it('adapts to mobile viewport', () => {
  setMobileViewport();
  render(<ResponsiveComponent />);
  // Test mobile behavior
});
```

### Testing with Router
```tsx
// Router context is automatically provided
render(<ComponentWithLinks />);
```

### Testing Nav/Layout Components
```tsx
import { mockNavProps, mockMainLayoutProps } from '../test-utils';

render(<Nav {...mockNavProps} />);
render(<MainLayout {...mockMainLayoutProps} />);
```

## Running Tests

```bash
# All tests (unit + storybook)
npm test

# Unit tests only
npm run test:unit  

# Tests with UI
npm run test:ui

# Tests with coverage
npm run test:coverage

# Watch mode
npm run test:watch
```

## Test Organization

### Unit Tests (`*.test.tsx`)
- Component logic and behavior
- Props handling
- Event handling
- Rendering correctness

### Story Tests (`*.stories.tsx`)
- Visual regression testing
- Component variants
- Different prop combinations
- Accessibility testing

## Best Practices

### 1. Use Descriptive Test Names
```tsx
it('shows error message when form validation fails', () => {
  // Test implementation
});
```

### 2. Test User Interactions
```tsx
import { userEvent } from '../test-utils';

it('calls onClick when button is clicked', async () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  
  await userEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalledOnce();
});
```

### 3. Test Accessibility
```tsx
it('has proper ARIA labels', () => {
  render(<Button>Submit</Button>);
  expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
});
```

### 4. Test Error States
```tsx
it('shows error message when prop is invalid', () => {
  render(<Component invalidProp="bad-value" />);
  expect(screen.getByText(/error/i)).toBeInTheDocument();
});
```

## Debugging Tests

### View Test UI
```bash
npm run test:ui
```

### Debug Specific Test
```tsx
import { screen } from '../test-utils';

it('debug test', () => {
  render(<Component />);
  screen.debug(); // Prints DOM to console
});
```

### Check What's Rendered
```tsx
expect(screen.getByRole('button')).toBeInTheDocument();
// If this fails, run: screen.logTestingPlaygroundURL()
```

## Future Enhancements

As you add more tests, consider extending the setup with:

- **Custom matchers** for your specific use cases
- **Data factories** for generating test data
- **Page Object Models** for complex integration tests
- **Visual regression testing** with Storybook
- **E2E test helpers** for Playwright integration

## Common Patterns

### Testing Async Operations
```tsx
import { waitFor } from '../test-utils';

it('loads data asynchronously', async () => {
  render(<AsyncComponent />);
  await waitFor(() => {
    expect(screen.getByText('Loaded data')).toBeInTheDocument();
  });
});
```

### Testing Form Interactions
```tsx
it('submits form with correct data', async () => {
  const onSubmit = vi.fn();
  render(<Form onSubmit={onSubmit} />);
  
  await userEvent.type(screen.getByLabelText('Name'), 'John Doe');
  await userEvent.click(screen.getByRole('button', { name: 'Submit' }));
  
  expect(onSubmit).toHaveBeenCalledWith({ name: 'John Doe' });
});
```