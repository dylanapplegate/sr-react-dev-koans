# React Koans Development Tasks

This document outlines the sequential tasks for building the "React Koans" project. Each task represents a distinct development objective, designed to be picked up and executed by an AI agent (or a human developer).

## Task Status:

- [ ] **Pending:** Task is defined but not yet started.
- [ ] **In Progress:** Task is currently being worked on.
- [ ] **Awaiting Review:** Task is completed and ready for review.
- [x] **Completed:** Task has been reviewed and accepted.

---

## **Project Setup & Core Infrastructure**

- **Task ID:** SETUP-001

  - **Status:** [ ] Pending
  - **Description:** Initialize the React project, configure TypeScript, Tailwind CSS, Jest, and React Testing Library. Set up basic folder structure for Koans.
  - **Output:** Working React app with configured tooling. Initial folder structure for `src/koans/`, `src/components/`, `src/utils/`, `src/styles/`.
  - **Dependencies:** None.

- **Task ID:** UI-001
  - **Status:** [ ] Pending
  - **Description:** Create the main application layout (`App.tsx`) to display a list of koans and a dynamic area for the selected koan/professor interface. Adhere to the minimalist, dark-themed aesthetic (reference the provided screenshot).
  - **Output:** Basic UI scaffold for the Koans application.
  - **Dependencies:** SETUP-001.

---

## **React Core Concepts Koans**

These koans focus on foundational React concepts, starting with the most common interview questions.

- **Task ID:** KOAN-REACT-001
  - **Status:** [ ] Pending
  - **Concept:** **`useState` Hook & Basic State Management**
  - **Description:** Create a koan that challenges the user to implement a simple counter component using the `useState` hook. The component should display a number and have two buttons: one to increment and one to decrement the number.
  - **Requirements:**
    - Use functional components with `useState`.
    - Ensure immutability when updating state.
    - Apply Tailwind CSS for a minimalist, dark-themed button and counter display.
    - Ensure basic accessibility (e.g., button labels).
  - **Files to Generate/Modify:**
    - `src/koans/KOAN-REACT-001_UseStateCounter/index.tsx` (User's solution template)
    - `src/koans/KOAN-REACT-001_UseStateCounter/solution.tsx` (Complete, correct solution)
    - `src/koans/KOAN-REACT-001_UseStateCounter/KOAN.md` (Koan prompt and concept explanation, referencing the Professor AI Agent)
    - `src/koans/KOAN-REACT-001_UseStateCounter/__tests__/index.test.tsx` (Tests for `index.tsx` using Jest and React Testing Library)
  - **Output:** Fully implemented koan with template, solution, tests, and documentation.
  - **Dependencies:** SETUP-001, UI-001 (optional, for integration into main app view)

---

### Discussion Points for `tasks.md`:

1.  **Task ID Naming:** Do you like the `CATEGORY-NNN` format (e.g., `SETUP-001`, `KOAN-REACT-001`)?
2.  **Status Tracking:** Is the simple `[ ] Pending` checklist sufficient, or would you prefer something else?
3.  **Level of Detail per Task:** Is the detail provided for `KOAN-REACT-001` (Description, Requirements, Files to Generate, Output, Dependencies) sufficient for an AI agent to proceed?
4.  **Order of Tasks:** Should we prioritize more setup tasks first, or mix in a few foundational koans as we go? I've started with a mix.
5.  **Adding More Koans:** What would be the next 2-3 koans we should define? (Thinking about `useEffect`, `props/component composition`, `conditional rendering`).
