# Build Tools

### Framework
- **Next.js**: v15 with app-routing, Server Components, and stream support.

### Formatter
- **Prettier**: Ensures consistent code formatting.  
  - Configurations: [`.prettierignore`](./.prettierignore), [`.prettierrc`](./.prettierrc).

### Linter
- **ESLint**: Uses Next.js' built-in implementation for linting.  
  - Configuration: [`eslint.config.mjs`](./eslint.config.mjs).

### Git Hooks
- **Husky**: Manages Git hooks for the project.  
  - Configuration: [`.husky` folder](./.husky).
- **Lint-Staged**: Lints staged files before committing.  
  - Rules defined in: [`lint-staged.config.ts`](./lint-staged.config.ts).

### Styling
- **CSS Modules**: Scoped styles compatible with Next.js Server Components.  
  - Documentation: [Styling Guide](./docs/styling.md) (if applicable).

### Internationalization
- **i18next**: Handles translations and localization.  
  - Documentation: [i18n Guide](./docs/i18n.md) (if applicable).

### Storybook
- Develop and document UI components in isolation.  
  - Documentation: [Storybook Guide](./docs/storybook.md) (if applicable).

### Containerization
- **Docker**: Uses multi-stage builds for efficient container creation.  
  - Configuration: [`Dockerfile`](./Dockerfile).

### Testing Setup
- **Jest**: Runs unit tests for TypeScript and JavaScript.  
  - Configuration: [Jest Setup](./jest.config.ts) (if applicable).
- **Testing Library for React**: Simplifies component testing.
- **Snapshot Testing**: Captures UI snapshots for regression testing.

---

# Scripts

### Development
- **`dev`**: Starts the development server using Turbopack for fast builds and updates.

### Production
- **`build`**: Compiles the app for production with optimized assets.  
- **`start`**: Runs the production build locally for testing purposes.

### Code Quality
- **`lint`**: Executes ESLint to identify and fix issues.  
- **`format`**: Formats code using Prettier across the codebase.

### Git Hooks
- **`prepare`**: Sets up Husky for managing Git hooks during `npm install`.

### Testing
- **`test`**: Runs all unit tests using Jest.  
- **`test:watch`**: Watches for changes and reruns relevant tests.  
- **`test:coverage`**: Generates a code coverage report.

### Storybook
- **`storybook`**: Launches Storybook on port `6006` for UI development.  
- **`build-storybook`**: Builds the Storybook environment for deployment.

---

# Project Structure

### `lib`
- Non-React code for utilities, modules, and reusable logic.
  - **Utilities**: Helper functions and pure logic.
  - **Modules**: Domain-specific or business logic.
  - **Classes**: Encapsulated logic using object-oriented design.
  - **Enums**: Constants for consistency.

### `components`
- Houses all React components.
  - **`shared`**: Common, reusable components (e.g., buttons, inputs).
  - **`<Feature>`**: Feature-specific components organized by functionality.

### `hooks`
- Contains all custom React hooks for reusable logic.
  - Examples: `useFetch`, `useDebounce`, `useAuth`.

---

# Component Anatomy

We make a separation of concerns (SOC) in the component.

### Files and Purpose

- **`.test.(js|ts|tsx)`**  
  Contains unit tests for the component to ensure expected behavior.  
  Example: `Button.test.tsx`.

- **`.helper.(js|ts)`**  
  Helper functions specific to the component to simplify logic.  
  Example: `calculateButtonStyles.helper.ts`.

- **`.types.(ts)`**  
  Defines TypeScript types and interfaces for the component.  
  Example: `Button.types.ts`.

- **`.module.css`**  
  Scoped CSS styles for the component to prevent conflicts.  
  Example: `Button.module.css`.

- **`use<ComponentName>.hook.(js|ts)`**  
  Custom hook encapsulating reusable stateful logic.  
  Example: `useButton.hook.ts`.