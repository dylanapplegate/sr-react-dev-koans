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

  - **Status:** [x]
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

  - **Status:** [x] Pending
  - **Description:** Initialize the React project using Vite with a TypeScript template _inside_ the Docker environment. Configure Tailwind CSS for styling. Install and configure Jest and React Testing Library. Set up the initial core project folder structure (`src/koans/`, `src/components/`, `src/utils/`, `src/styles/`, `src/assets/`).
  - **Output:** A working React + TypeScript + Tailwind project template configured within the `/app` directory inside the Docker containers.
  - **Dependencies:** SETUP-000.

- **Task ID:** DESIGN-001

  - **Status:** [x]
  - **Description:** Define a foundational basic styling pattern and a minimalist design token system for `ninja-koans`. This should directly inform and build upon the provided screenshot aesthetic (dark theme, clean typography, structured layouts).
  - **Requirements:** Specify the core color palette (primary dark, accent colors, neutral text colors), typography scale (font families, font sizes for headings/body), and key spacing units. These should be defined as Tailwind CSS theme extensions.
  - **Files to Generate/Modify:** `tailwind.config.js` (for theme extensions), and optionally a `docs/STYLE_GUIDE.md` for human readability and examples.
  - **Output:** A well-defined, minimalist styling foundation integrated into the Tailwind configuration.
  - **Dependencies:** SETUP-001.

- **Task ID:** SETUP-002

  - **Status:** [x]
  - **Description:** Implement the core CLI (Command Line Interface) runner for `ninja-koans`. This involves creating an `npm` script that, when executed (e.g., `npm run koan <KOAN_ID>`), will:
    1.  Parse the `KOAN_ID` argument.
    2.  Locate and display the content of the corresponding `KOAN.md` file in the terminal.
    3.  Provide basic instructions for the user to edit their `index.tsx` and run tests.
        _(Future iterations will expand this CLI for menu navigation and Professor AI interaction.)_
  - **Output:** A functional `npm run koan` script that displays koan prompts.
  - **Dependencies:** SETUP-001.

- **Task ID:** SETUP-003

  - **Status:** [x]
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
