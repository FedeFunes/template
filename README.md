# Build Tools

### Framework

**Next.js**: v15 with app-routing, Server Components suport and Stream support.

- [`.next.config`](./next.config.ts)
- [`next-env.d.ts`](./next-env.d.ts)
- [`.next`](./.next)

### Formatter

**Prettier**: Ensures consistent code formatting.

- [`.prettierignore`](./.prettierignore)
- [`.prettierrc`](./.prettierrc)

### Linter

**ESLint**: Uses Next.js' built-in implementation for linting.

- [`eslint.config.mjs`](./eslint.config.mjs)

### Git Hooks

**Husky**: Manages Git hooks for the project.

- [`.husky`](./.husky)

**Lint-Staged**: Lints staged files before committing.

- [`lint-staged.config.ts`](./lint-staged.config.ts)

### Styling

**CSS Modules**: Scoped styles compatible with Next.js Server Components.

### Internationalization

**i18next**: Handles translations and localization.

### Storybook

Develop and document UI components in isolation.

- [`.storybook`](./.storybook)
- [`.stories`](./.stories)

For more information on the development and design of components:

- [Thinking in React](https://react.dev/learn/thinking-in-react)
- [Component-Driven Development (CDD)](https://www.componentdriven.org)
- [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com)

### Containerization

**Docker**: Uses multi-stage builds for efficient container creation.

- [`Dockerfile`](./Dockerfile)

### Testing Setup

- **Jest**: Runs unit tests for TypeScript and JavaScript.
- **Testing Library for React**: Simplifies component testing.
- **Snapshot Testing**: Captures UI snapshots for regression testing.

#### Configs

- [`jest.config.ts`](./jest.config.ts)
- [`jest.setup.ts`](./jest.setup.ts)

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

# Component Anatomy

We make a separation of concerns (SOC) in the component. This is just a guide to improve the SOC. nombrar la ventaja de c/u and why

### Files and Purpose

- **`.test.(ts|tsx)`**  
  Contains unit tests for the component to ensure expected behavior.  
  Example: `Button.test.tsx`, `ButtonHelper.test.ts`.

- **`.helper.ts`**  
  Helper functions specific to the component to simplify logic. You dont to learn testing-hooks tools. it ccan be surge a class of domain fro exanmple.
  Sometimes I used the format '.service.ts' or '<Component>Service', but I don't think it was liked very much because it is confusingly related to Angular and the Service pattern. Helper seems to be more familiar in this case. Another reason was the next: When I did testing, the test file was this: '<Component>.service.test.ts', the with .helper, now I prefer ButtonHelper.ts. The best practice is that ButtonHelper should only be used by the custom hook, but not by the UI, because it's not the responsibility of that layer, but if okay it's you that ;). It's more difficult to test a custom hook; you have to be more aware of asynchrony because of how state management works.
  Example: `Button.helper.ts`.

- **`.types.ts`**  
  Defines TypeScript types and interfaces for the component, custom hook, and helper.  
  Example: `Button.types.ts`.
- **`.module.css`**  
  Scoped CSS styles for the component to prevent conflicts.  
  Example: `Button.module.css`.

- **`use<ComponentName>.hook.ts`**  
  Custom hook encapsulating reusable stateful logic.  
  Example: `useButton.hook.ts`.
