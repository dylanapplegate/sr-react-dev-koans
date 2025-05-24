# TECHNOLOGY PLATFORM: ninja-koans

This document provides a comprehensive outline of the technology stack, tools, and architectural patterns employed in the `ninja-koans` project. It serves as a detailed reference for developers and AI agents contributing to the codebase, ensuring consistency and adherence to established standards.

## 1. Core Development

- **Language:**
  - **TypeScript (v5.x):** All new code should be written in TypeScript for static type checking, improved maintainability, and enhanced developer experience.
  - **ECMAScript (ESNext):** Utilize modern JavaScript features as appropriate, assuming transpilation by Vite/Babel.
- **Framework:**
  - **React (v18.x):** The primary UI library. Emphasis on functional components and Hooks.

## 2. Build & Tooling

- **Bundler/Dev Server:**
  - **Vite (v5.x):** Selected for its fast cold start, instant hot module replacement (HMR), and optimized production builds.
- **Linter:**
  - **ESLint (v8.x/v9.x if available):** Enforces code quality and style.
  - **Configuration:** **Airbnb's ESLint config** (`eslint-config-airbnb-typescript`) is the base. Rules will be extended and potentially overridden to integrate smoothly with Prettier and specific project needs.
- **Formatter:**
  - **Prettier (v3.x):** Used for consistent code formatting across the project.
  - **Conflict Resolution:** Prettier rules will take precedence over conflicting ESLint stylistic rules. ESLint will be configured to disable rules that conflict with Prettier (e.g., using `eslint-config-prettier`).
- **Package Manager:**
  - **npm (v10.x+):** Preferred package manager for consistency.
- **Version Control:**
  - **Git:** Standard version control system.
  - **GitHub:** Hosting for the repository, leveraging PR workflows.
- **Containerization:**
  - **Docker (latest stable):** For consistent development environments.
  - **Docker Compose (v3.x):** Orchestrates multi-service Docker applications (`web` and `cli` services).

## 3. Testing

- **Unit & Integration Testing:**
  - **Jest (v29.x+):** The test runner and assertion library.
  - **React Testing Library (v14.x+):** Preferred method for testing React components, focusing on user-centric interactions and behavior rather than internal component implementation details.
- **Component Storybook:**
  - **Storybook (v7.x+):** For isolated UI component development, documentation, and visual regression testing.

## 4. AI Integration

- **Professor AI Agent:**
  - **Google Jules API:** The underlying AI model powering the Professor's contextual explanations, hints, and learning guidance. Specific SDK/API version to be integrated as needed.
- **Development AI Assistant:**
  - **GitHub Copilot:** Utilized by developers during the coding process for autocompletion, code generation, and refactoring suggestions, adhering to the project's coding standards.

## 5. Architectural Patterns & Considerations

- **Component Structure:**
  - **Functional Components & Hooks:** Exclusive use of functional components and React Hooks for state, side effects, and custom logic.
  - **Component Composition:** Strong emphasis on composing smaller, single-responsibility components to build complex UIs.
- **State Management:**
  - **Local State (`useState`):** For component-specific, ephemeral state.
  - **Context API (`useContext`):** For application-wide or feature-specific state that doesn't require a full-fledged state management library.
  - _Potential future exploration:_ Lighter alternatives like Zustand or Jotai for more complex global state scenarios.
- **Data Handling:**
  - **Immutability:** All state updates and data transformations should adhere to immutability principles to prevent side effects and simplify debugging.
  - **API Mocking:** Initial phases will use simple in-memory mock functions or potentially `json-server` for data fetching simulations.
- **Design System Principles:**
  - Adherence to consistent design principles for UI components (e.g., spacing, typography, color palette).
  - Components developed should be robust, extensible, and accessible, suitable for a living design system.
- **User Experience (UX) & Accessibility (A11y):**
  - **WCAG (Web Content Accessibility Guidelines):** General principles to guide accessibility implementations.
  - Semantic HTML5, ARIA attributes, keyboard navigation, and focus management are critical considerations for every component.
  - Responsive and adaptive design (media queries, fluid layouts) to ensure optimal experience across devices.
- **Performance Optimization:**
  - **Memoization (`React.memo`, `useCallback`, `useMemo`):** Strategic use to prevent unnecessary re-renders.
  - **Code Splitting (`React.lazy`, `Suspense`):** For optimizing bundle sizes and initial load times (future consideration).
- **Code Quality & Maintainability:**
  - Emphasis on clean, readable, well-structured, and thoroughly tested code.
  - Proactive refactoring and continuous improvement.
