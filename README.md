# Build Tools

### Framework
- **Next.js**: v15 with app-routing, Server Components, and stream support.

### Formatter
- **Prettier**: Ensures consistent code formatting.  
  See: [`.prettierignore`](./.prettierignore), [`.prettierrc`](./.prettierrc).

### Linter
- **ESLint**: Utilizes Next.js' built-in implementation for linting.  
  See: [`eslint.config.mjs`](./eslint.config.mjs).

### Git Hooks
- **Husky**: Used to manage Git hooks.  
  See: [`.husky` folder](./.husky).
- **Lint-Staged**: Executes linting on staged files before committing.  
  See: [`lint-staged.config.ts`](./lint-staged.config.ts).

### Styling
- **CSS Modules**: Fully compatible with Next.js Server Components.  
  See: [Styling Documentation](./docs/styling.md) (if applicable).

### Internationalization
- **i18next**: Manages translations and internationalization.  
  See: [i18n Configuration](./docs/i18n.md) (if applicable).

### Storybook
- Provides an isolated environment for developing and documenting UI components.  
  Supports customizable stories for UI component development.  
  See: [Storybook Configuration](./docs/storybook.md) (if applicable).

### Containerization
- **Docker**: Utilizes multi-stage builds for efficient image creation.  
  See: [`Dockerfile`](./Dockerfile).

### Testing Setup
- **Jest**: For general TypeScript unit testing.  
  See: [Jest Configuration](./jest.config.ts) (if applicable).
- **Testing Library for React**: Simplifies component testing.
- **Snapshot Testing**: Captures UI snapshots for regression testing.

# Scripts

Below are the npm scripts included in the project, along with a brief explanation of their purpose:

### Development
- **`dev`**: Starts the development server using Turbopack for faster builds and updates.  

### Production Build
- **`build`**: Compiles the application for production, optimizing assets and generating static pages where applicable.  

- **`start`**: Runs the production build locally. Useful for testing the build output.  

### Code Quality
- **`lint`**: Runs ESLint to identify and fix potential code issues.  

- **`format`**: Formats the codebase using Prettier for consistent style. Targets all files under `src` and `app` with extensions `.js`, `.ts`, `.tsx`, `.css`, or `.json`.  

### Git Hooks
- **`prepare`**: Sets up Husky to manage Git hooks. Runs automatically during `npm install`.  

### Testing
- **`test`**: Executes all unit tests using Jest.  

- **`test:watch`**: Runs Jest in watch mode, re-executing tests on file changes.  

- **`test:coverage`**: Generates a coverage report for the test suite.  

### Storybook
- **`storybook`**: Starts the Storybook development server on port `6006`. Use this to develop and view UI components in isolation.  
  Command: `storybook dev -p 6006`

- **`build-storybook`**: Generates

