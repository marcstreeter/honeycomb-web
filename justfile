# honeycomb-web justfile
# Run with: just <command>

# Variables
namespace := "default"
deployment := "honeycomb-web"
kubexec := "kubectl -n " + namespace + " exec deploy/" + deployment

# Default recipe to run when no arguments are provided
default:
    @just --list

# Check if tilt is installed
_check-tilt:
    #!/usr/bin/env bash
    if ! command -v tilt &> /dev/null; then
        echo "Error: tilt is not installed. Please install tilt first."
        echo "Visit: https://docs.tilt.dev/install.html"
        exit 1
    fi

# Check if docker is installed
_check-docker:
    #!/usr/bin/env bash
    if ! command -v docker &> /dev/null; then
        echo "Error: docker is not installed. Please install docker first."
        exit 1
    fi

# Check if kubectl is installed
_check-kubectl:
    #!/usr/bin/env bash
    if ! command -v kubectl &> /dev/null; then
        echo "Error: kubectl is not installed. Please install kubectl first."
        echo "Visit: https://kubernetes.io/docs/tasks/tools/"
        exit 1
    fi

setup: _check-docker _check-tilt _check-kubectl
    @echo "🔧 Setting up development environment..."
    @echo "Installing dependencies..."
    npm ci
    @echo "Installing git hooks..."
    npx lefthook install
    @echo "✅ Development setup complete!"

# Development with Tilt (recommended)
start: _check-docker _check-tilt _check-kubectl
    @echo "Starting development environment with Tilt..."
    @echo "This will start the app in a container with live reloading."
    @echo "Access the app at: http://localhost:"
    @echo "Access Storybook at: http://localhost:6006"
    @echo "Press Ctrl+C to stop"
    tilt up -vvv

# Local development (without Tilt)
start-local:
    @echo "Starting local development server..."
    @echo "Note: Use 'just dev' for containerized development with Tilt"
    npm run dev

stop: _check-tilt
    @echo "Stopping development environment..."
    tilt down

# Testing with Tilt
test: _check-tilt
    @echo "Running tests in the development container..."
    {{kubexec}} -- npm test

test-watch: _check-tilt
    @echo "Running tests in watch mode..."
    {{kubexec}} -- npm run test:watch

test-coverage: _check-tilt
    @echo "Running tests with coverage..."
    {{kubexec}} -- npm run test:coverage

# Linting and formatting with Tilt
lint: _check-tilt
    @echo "Running linter..."
    {{kubexec}} -- npm run lint

lint-fix: _check-tilt
    @echo "Fixing linting issues..."
    {{kubexec}} -- npm run lint:fix

format: _check-tilt
    @echo "Formatting code..."
    {{kubexec}} -- npm run format

format-check: _check-tilt
    @echo "Checking code formatting..."
    {{kubexec}} -- npm run format:check

check: _check-tilt
    @echo "Running Biome check..."
    {{kubexec}} -- npm run check

check-fix: _check-tilt
    @echo "Fixing Biome issues..."
    {{kubexec}} -- npm run check:fix

# Set or unset a custom base path variable for GitHub Pages build using GitHub CLI (useful with custom url's)
set-base-path:
    @echo "Setting custom base path for GitHub Pages build (using GitHub CLI)..."
    @read -p "Enter the custom base path (e.g. /custom/ or /, leave blank to unset): " custompath; \
    if [ -z "$$custompath" ]; then \
      uvx gh variable delete CUSTOM_BASE_PATH --confirm; \
      echo "❌ CUSTOM_BASE_PATH unset (will use repo name by default)"; \
    else \
      uvx gh variable set CUSTOM_BASE_PATH --body "$$custompath"; \
      echo "✅ CUSTOM_BASE_PATH set to '$$custompath'"; \
    fi

# Type checking with Tilt
type-check: _check-tilt
    @echo "Running type check..."
    {{kubexec}} -- npm run type-check

# Clean up
clean:
    @echo "Cleaning up build artifacts..."
    rm -rf node_modules/
    rm -rf dist/
    rm -rf .storybook-static/
    rm -rf coverage/