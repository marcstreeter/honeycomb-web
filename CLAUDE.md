# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

The project uses a justfile for all development tasks. Run `just` to see all available commands.

### Primary Development Workflow
- `just setup` - Install dependencies and git hooks
- `just start` - Start containerized development with Tilt (recommended)
- `just start-local` - Start local development without Tilt
- `just stop` - Stop the development environment

### Code Quality Commands
- `npm run build` - Build the application (includes TypeScript compilation)
- `npm run lint` - Run Biome linter
- `npm run lint:fix` - Fix linting issues automatically
- `npm run format` - Format code with Biome
- `npm run check` - Run comprehensive Biome checks
- `npm run check:fix` - Fix all Biome issues

### Testing Commands
- `npm test` - Run tests once
- `npm run test:watch` - Run tests in watch mode
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage report

### Storybook Commands
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production

## Project Architecture

### Technology Stack
- **React 19** with TypeScript
- **Vite** for build tooling and development server
- **Material-UI (MUI)** and **Styled Components** for UI components
- **Vitest** for testing with React Testing Library
- **Storybook** for component development and documentation
- **Biome** for code quality (linting, formatting, type checking)
- **Lefthook** for git hooks

### Project Structure
- `src/layouts/` - Layout components organized by page/section
  - `MainLayout/` - Global layout components (Header, Nav, Footer)
  - `Home/` - Home page specific sections and components
- `src/components/` - Reusable UI components
- `src/assets/` - Static assets (icons, images)

### Code Organization Patterns
- **Layout-based Architecture**: Components are organized by layout sections rather than generic folders
- **Path Aliases**: Use `@components/*`, `@layouts/*`, and `@assets/*` for imports
- **Colocated Components**: Related components are grouped in section-specific folders
- **Icon Components**: SVG icons are converted to React components in `src/assets/icons/`

### Development Environment
- **Tilt Integration**: Containerized development with live reloading
- **GitHub Pages Deployment**: Configured with base path `/honeycomb-web/`
- **Git Hooks**: Pre-commit hooks run Biome checks and tests automatically

### Key Configuration Files
- `biome.json` - Code quality rules (2-space indentation, single quotes, trailing commas)
- `vite.config.ts` - Build configuration with path aliases and Storybook integration
- `lefthook.yml` - Git hooks configuration
- `justfile` - Development task runner with Tilt integration

### Testing Setup
- Tests use Vitest with browser mode and Playwright
- Storybook stories are automatically tested via the Vitest addon
- Coverage reports available via `npm run test:coverage`

## Development Guidelines

### React Development Rules
- Use functional components with TypeScript interfaces
- Prefix event handlers with 'handle': handleClick, handleSubmit
- Prefix boolean variables with verbs: isLoading, hasError, canSubmit
- Use PascalCase for components, camelCase for variables/functions
- Use early returns to improve code readability
- Implement proper accessibility features (tabindex, aria-label, keyboard navigation)
- Follow functional programming patterns; avoid classes
- Use consts instead of functions: `const toggle = () =>`
- Write JSDoc comments for documentation

### TypeScript Implementation
- Enable strict mode and define clear interfaces for props/state
- Use type guards for undefined/null values
- Prefer interface over type for object structures
- Use descriptive variable names (isLoading, hasPermission)
- Implement proper error handling and logging

### UI/UX Guidelines
- Follow Material Design guidelines (MUI is used in this project)
- Implement responsive design using media queries and flexible layouts
- Use semantic HTML elements (header, main, footer, article, section)
- Ensure sufficient color contrast and keyboard navigation
- Use ARIA roles and attributes for accessibility
- Implement proper loading states and user feedback

### Performance & Security
- Use React.memo(), useCallback, and useMemo strategically
- Implement proper cleanup in useEffect hooks
- Avoid inline function definitions in JSX
- Implement input sanitization to prevent XSS attacks
- Handle user data securely and follow CSP best practices

### Testing & Quality
- Write unit tests using React Testing Library
- Follow Arrange-Act-Assert patterns
- Use error boundaries for graceful error handling
- Test cross-browser compatibility
- Validate HTML/CSS using W3C validators