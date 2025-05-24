# ninja-koans Development Tasks

This document outlines the sequential tasks for building the "ninja-koans" project. Each task represents a distinct development objective, designed to be picked up and executed by an AI agent (or a human developer).

## Task Status:

- [ ] **Pending:** Task is defined but not yet started.
- [ ] **In Progress:** Task is currently being worked on.
- [ ] **Awaiting Review:** Task is completed and ready for review.
- [x] **Completed:** Task has been reviewed and accepted.

---

## **Phase 1: Core Setup & Foundational React Koans**

This phase focuses on establishing the project's technical foundation and introducing the most fundamental React concepts through interactive koans. The primary interaction model for this phase is CLI-driven, with a future web UI in mind.

### **Project Setup & Core Infrastructure**

- **Task ID:** SETUP-000

  - **Status:** [ ] Pending
  - **Description:** Implement the Docker environment for the `ninja-koans` project. This includes creating the `Dockerfile` for the development environment and `docker-compose.yml` to orchestrate the `web` and `cli` services.
  - **Requirements:**
    - `Dockerfile` should build a `node:20-alpine` based image, copy `package.json`, run `npm install`, and copy the rest of the app code. It should prevent host `node_modules` from overriding.
    - `docker-compose.yml` should define:
      - A `web` service: builds from `Dockerfile`, exposes port `5173:5173`, mounts the project volume (`.:/app`), and runs `npm run dev -- --host 0.0.0.0`.
      - A `cli` service: builds from `Dockerfile`, mounts the same project volume (`.:/app`), keeps `stdin_open` and `tty` enabled for interactive shell access. It should ensure `npm install` runs on first boot within the container and keeps the container alive for `docker-compose exec` commands.
      - Both services must share the `/app` volume for the codebase.
  - **Files to Generate/Modify:** `Dockerfile`, `docker-compose.yml`.
  - **Output:** A working Docker environment that can be brought up with `docker-compose up --build -d`, providing both `web` and `cli` services accessible as per `README.md` instructions.
  - **Dependencies:** None.

- **Task ID:** SETUP-001

  - **Status:** [ ] Pending
  - **Description:** Initialize the React project using Vite with a TypeScript template _inside_ the Docker environment. Configure Tailwind CSS for styling. Install and configure Jest and React Testing Library. Set up the initial core project folder structure (`src/koans/`, `src/components/`, `src/utils/`, `src/styles/`, `src/assets/`).
  - **Output:** A working React + TypeScript + Tailwind project template configured within the `/app` directory inside the Docker containers.
  - **Dependencies:** SETUP-000.

- **Task ID:** DESIGN-001

  - **Status:** [ ] Pending
  - **Description:** Define a foundational basic styling pattern and a minimalist design token system for `ninja-koans`. This should directly inform and build upon the provided screenshot aesthetic (dark theme, clean typography, structured layouts).
  - **Requirements:** Specify the core color palette (primary dark, accent colors, neutral text colors), typography scale (font families, font sizes for headings/body), and key spacing units. These should be defined as Tailwind CSS theme extensions.
  - **Files to Generate/Modify:** `tailwind.config.js` (for theme extensions), and optionally a `docs/STYLE_GUIDE.md` for human readability and examples.
  - **Output:** A well-defined, minimalist styling foundation integrated into the Tailwind configuration.
  - **Dependencies:** SETUP-001.

- **Task ID:** SETUP-002

  - **Status:** [ ] Pending
  - **Description:** Implement the core CLI (Command Line Interface) runner for `ninja-koans`. This involves creating an `npm` script that, when executed (e.g., `npm run koan <KOAN_ID>`), will:
    1.  Parse the `KOAN_ID` argument.
    2.  Locate and display the content of the corresponding `KOAN.md` file in the terminal.
    3.  Provide basic instructions for the user to edit their `index.tsx` and run tests.
        _(Future iterations will expand this CLI for menu navigation and Professor AI interaction.)_
  - **Output:** A functional `npm run koan` script that displays koan prompts.
  - **Dependencies:** SETUP-001.

- **Task ID:** SETUP-003

  - **Status:** [ ] Pending
  - **Description:** Configure ESLint with **Airbnb's TypeScript rules** and integrate Prettier for consistent code formatting. Ensure ESLint rules that conflict with Prettier are disabled (`eslint-config-prettier`). The setup should enable linting and formatting of `.ts`, `.tsx`, `.js`, and `.jsx` files. Add corresponding `npm` scripts for `lint` and `format`.
  - **Output:** `.eslintrc.js`, `.prettierrc.js`, and `package.json` scripts configured for linting and formatting.
  - **Dependencies:** SETUP-001.

- **Task ID:** DESIGN-002

  - **Status:** [ ] Pending
  - **Description:** Create high-level, minimalist wireframes or conceptual UI mockups for the _future web application_ (`UI-001`'s target). This should visualize the main application layout, how koans are selected and displayed, and where the Professor AI interaction would occur. Focus on structure, information hierarchy, and user flow, not detailed visual design.
  - **Requirements:** Maintain the minimalist, dark-themed aesthetic. Show general layouts for: a main navigation/sidebar, a koan selection area, a dedicated koan content display, and a Professor AI interaction panel (e.g., chat window).
  - **Files to Generate/Modify:** `docs/UI_MOCKUPS.md` (with textual descriptions of layouts, potentially ASCII art, or links to very simple conceptual diagrams/images stored in `docs/assets/`).
  - **Output:** Conceptual UI guidance to inform the development of the web application.
  - **Dependencies:** UI-001 (conceptually, as this task defines its direction).

- **Task ID:** UI-001

  - **Status:** [ ] Pending
  - **Description:** Create the main application layout (`src/App.tsx`). This layout should display a sidebar (or navigation area) to list available koans and a main content area to render the currently selected koan or the Professor AI interface. Adhere to the minimalist, dark-themed aesthetic (reference the provided screenshot in `README.md`). Implement a simple routing mechanism (e.g., using React Router DOM, or a simple state-based conditional rendering for koan selection). This task is for the _future web UI_, but its basic structure is laid out now.
  - **Output:** Basic UI scaffold for the Koans web application with navigation and dynamic content area.
  - **Dependencies:** SETUP-001, DESIGN-001, DESIGN-002.

- **Task ID:** SETUP-005
  - **Status:** [ ] Pending
  - **Description:** Create a placeholder UI component for the "Professor AI Agent" (`src/components/ProfessorAI.tsx`). This component should have a simple chat-like interface (input field, display area for messages) and a static welcome message. No actual AI integration needed at this stage, just the visual representation. This component is part of the _future web UI_.
  - **Output:** `src/components/ProfessorAI.tsx` component.
  - **Dependencies:** SETUP-001, UI-001.

### **React Core Concepts Koans**

These koans focus on foundational React concepts, starting with the most common interview questions. Each koan will consist of an `index.tsx` (user's solution template), `solution.tsx` (official solution), `KOAN.md` (prompt), and `__tests__/index.test.tsx` (tests).

- **Task ID:** KOAN-REACT-001

  - **Status:** [ ] Pending
  - **Concept:** **`useState` Hook & Basic State Management**
  - **Description:** Create a koan that challenges the user to implement a simple counter component using the `useState` hook. The component should display a number and have two buttons: one to increment and one to decrement the number. It should also have a button to reset the counter.
  - **Requirements:**
    - Use functional components with `useState`.
    - Ensure immutability when updating state.
    - Apply Tailwind CSS for a minimalist, dark-themed button and counter display, adhering to `DESIGN-001`'s patterns.
    - Ensure basic accessibility (e.g., button labels, semantic elements, keyboard navigability).
    - Implement proper TypeScript types for props and state.
  - **Files to Generate/Modify:** `src/koans/KOAN-REACT-001_UseStateCounter/index.tsx`, `src/koans/KOAN-REACT-001_UseStateCounter/solution.tsx`, `src/koans/KOAN-REACT-001_UseStateCounter/KOAN.md`, `src/koans/KOAN-REACT-001_UseStateCounter/__tests__/index.test.tsx`.
  - **Output:** Fully implemented koan with template, solution, tests, and documentation.
  - **Dependencies:** SETUP-001, SETUP-002, SETUP-003, DESIGN-001.

- **Task ID:** KOAN-REACT-002

  - **Status:** [ ] Pending
  - **Concept:** **`useEffect` Hook (Mount, Update, Cleanup)**
  - **Description:** Create a koan that requires the user to implement a component that fetches data from a mock API (e.g., a simple in-memory function that returns a Promise) when it mounts, displays a loading state, and handles errors. It should also include a cleanup function to prevent memory leaks or cancel subscriptions if the component unmounts.
  - **Requirements:**
    - Use functional components with `useEffect`.
    - Implement loading, error, and success states.
    - Use TypeScript for data types and state.
    - Apply Tailwind CSS for UI elements (loading indicator, error message, data display), adhering to `DESIGN-001`'s patterns.
    - Include a cleanup mechanism within `useEffect`.
  - **Files to Generate/Modify:** `src/koans/KOAN-REACT-002_UseEffectDataFetch/index.tsx`, `src/koans/KOAN-REACT-002_UseEffectDataFetch/solution.tsx`, `src/koans/KOAN-REACT-002_UseEffectDataFetch/KOAN.md`, `src/koans/KOAN-REACT-002_UseEffectDataFetch/__tests__/index.test.tsx`, `src/utils/mockApi.ts`.
  - **Output:** Fully implemented koan with template, solution, tests, and documentation.
  - **Dependencies:** SETUP-001, SETUP-002, SETUP-003, DESIGN-001, KOAN-REACT-001 (conceptually relies on `useState`).

- **Task ID:** KOAN-REACT-003

  - **Status:** [ ] Pending
  - **Concept:** **Props, Component Composition & Type Safety**
  - **Description:** Create a koan that challenges the user to build a reusable `Card` component. This `Card` component should accept props for `title`, `content` (as `React.ReactNode` for composition), and optionally an `imageUrl`. The koan should demonstrate rendering multiple `Card` instances, including one with nested children.
  - **Requirements:**
    - Design clear TypeScript interfaces for `Card` component props.
    - Use component composition (`children` prop) effectively.
    - Apply Tailwind CSS for the `Card`'s styling (padding, shadow, dark background, etc.), adhering to `DESIGN-001`'s patterns.
    - Ensure props are passed correctly and types are enforced.
  - **Files to Generate/Modify:** `src/koans/KOAN-REACT-003_ComponentComposition/index.tsx`, `src/koans/KOAN-REACT-003_ComponentComposition/solution.tsx`, `src/koans/KOAN-REACT-003_ComponentComposition/KOAN.md`, `src/koans/KOAN-REACT-003_ComponentComposition/__tests__/index.test.tsx`, `src/components/Card.tsx`.
  - **Output:** Fully implemented koan with template, solution, tests, and documentation.
  - **Dependencies:** SETUP-001, SETUP-002, SETUP-003, DESIGN-001, KOAN-REACT-001 (conceptually).

- **Task ID:** KOAN-REACT-004
  - **Status:** [ ] Pending
  - **Concept:** **Conditional Rendering & List Rendering**
  - **Description:** Create a koan where the user builds a component that displays a list of items (e.g., a list of users or products). The component should:
    1.  Conditionally render a "No items found" message if the list is empty.
    2.  Render each item in the list, ensuring correct `key` prop usage.
    3.  Allow filtering the list based on a search input (using `useState` and `useEffect`).
  - **Requirements:**
    - Use functional components.
    - Demonstrate various conditional rendering techniques (ternary, `&&`, early return).
    - Properly use `map` with unique `key` props for list rendering.
    - Integrate a search input with state.
    - Apply Tailwind CSS for list styling and input elements, adhering to `DESIGN-001`'s patterns.
    - Implement TypeScript types for list items.
  - **Files to Generate/Modify:** `src/koans/KOAN-REACT-004_ConditionalListRendering/index.tsx`, `src/koans/KOAN-REACT-004_ConditionalListRendering/solution.tsx`, `src/koans/KOAN-REACT-004_ConditionalListRendering/KOAN.md`, `src/koans/KOAN-REACT-004_ConditionalListRendering/__tests__/index.test.tsx`.
  - **Output:** Fully implemented koan with template, solution, tests, and documentation.
  - **Dependencies:** SETUP-001, SETUP-002, SETUP-003, DESIGN-001, KOAN-REACT-001, KOAN-REACT-002.

---

### 2. `docs/TECHNOLOGY_PLATFORM.md`

```markdown
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
```
