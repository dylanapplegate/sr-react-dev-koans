# GitHub Copilot Instructions for React Koans Project

This document provides context and guidelines for GitHub Copilot to ensure generated code aligns with project standards and goals.

## Core Principles:

1.  **Modern React & TypeScript Best Practices:**

    - Prioritize functional components and React Hooks (`useState`, `useEffect`, `useContext`, `useCallback`, `useMemo`, `useRef`).
    - Enforce strong TypeScript typing for props, state, and function arguments/returns. Aim for explicit types over implicit `any`.
    - Favor immutability for state updates and data transformations.
    - Adhere to a clean, readable, and maintainable coding style, guided by best practices such as those outlined in `https://dev.to/deepeshk1204/best-practices-of-reactjs-with-typescript-24p4`.

2.  **Design-Driven & Minimalist Aesthetic with Tailwind CSS:**

    - All styling must be implemented using Tailwind CSS utility classes. Avoid custom CSS files or inline styles where possible.
    - Aim for a minimalist, clean, and modern design aesthetic. Reference the provided UI screenshot for visual inspiration (dark theme, structured layouts, clear typography, attention to spacing and hierarchy).
    - Focus on creating highly reusable and composable UI components, especially for Design System elements.

3.  **Comprehensive but Pragmatic Testing:**

    - Implement unit and integration tests primarily using Jest and React Testing Library.
    - Strive for good code coverage, focusing on critical functionality, user interactions, and core component behaviors.
    - Avoid excessive or overly granular tests that provide diminishing returns; aim for effective and maintainable test suites.

4.  **High Readability & Documentation:**

    - Write self-documenting code with clear variable names, concise logic, and well-structured components.
    - Provide JSDoc comments for complex functions, components, and props to enhance clarity.
    - Ensure generated examples and solutions are clear and easy to understand for learning purposes.

5.  **Accessibility (A11y) First:**
    - Always consider accessibility in component design and implementation. Utilize semantic HTML, appropriate ARIA attributes when necessary, and ensure full keyboard navigability.
    - Generate examples that highlight and reinforce good accessibility practices.
