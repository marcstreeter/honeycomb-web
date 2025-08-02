# honeycomb-web

A react frontend for honeycomb-web.

## Related README's
- [Font System](./README.FONT_SYSTEM.md)
- [Testing System](./README.TESTING.md)

## Requirements

- [Node.js 18.x](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Tilt](https://docs.tilt.dev/install.html)
- [kubectl](https://kubernetes.io/docs/tasks/tools/) - for Kubernetes operations
- [asdf](https://asdf-vm.com) - for local installs (optional, see .tool-versions)
- [just](https://just.systems/man/en/) - For development commands (optional, can use npm/tilt directly)

## Development

### Getting Started

Run `just` to see all available commands.

```bash
# Useful for development
just dev
```

## Key Features

- **TypeScript**: Full type safety with proper interfaces
- **Vitest**: Fast unit testing with React Testing Library
- **Storybook**: Component documentation and development
- **Biome**: Code quality, linting, and formatting
- **Lefthook**: Git hooks for pre-commit checks
- **Colocated Tests**: Tests live next to source files
- **Tilt Integration**: Containerized reproducible development with live reloading


## Deployment

This project is meant for deployment with GitHub Actions CI/CD to Github Pages

## Enabling GitHub Pages

After your first successful deployment with the provided GitHub Actions workflow, enable GitHub Pages in your repository settings:

1. Go to your repository on GitHub.
2. Click on **Settings**.
3. In the sidebar, click **Pages**.
4. Under **Build and deployment**, set the source to **GitHub Actions**.
5. (Optional) If you want to use a custom domain, set it in the same section.

Your site will be available at `https://<your-username>.github.io/<your-repo>/` after the workflow completes.
