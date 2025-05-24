# Ninja Koans - UI Mockups & Wireframes

This document presents conceptual UI mockups and wireframes for the Ninja Koans web application. The focus is on structure, information hierarchy, and user flow rather than detailed visual design. All designs adhere to the minimalist, dark-themed aesthetic defined in the style guide.

## General Application Layout

The application follows a three-panel layout that optimizes the learning experience:

```
┌────────────────────────────────────────────────────────────────────────────┐
│                           HEADER / NAVIGATION BAR                          │
├────────────┬───────────────────────────────────┬───────────────────────────┤
│            │                                   │                           │
│            │                                   │                           │
│            │                                   │                           │
│            │                                   │                           │
│  SIDEBAR   │       KOAN CONTENT AREA          │    PROFESSOR AI PANEL     │
│            │                                   │                           │
│ (Koan List)│                                   │                           │
│            │                                   │                           │
│            │                                   │                           │
│            │                                   │                           │
├────────────┴───────────────────────────────────┴───────────────────────────┤
│                                 FOOTER                                     │
└────────────────────────────────────────────────────────────────────────────┘
```

*See full diagram in [docs/assets/main-layout.txt](assets/main-layout.txt)*

## Key Components

### 1. Navigation & Header

The top navigation bar provides application-wide controls and context:

```
┌────────────────────────────────────────────────────────────────────────────┐
│ ● NINJA KOANS logo                          Theme toggle   User settings   │
└────────────────────────────────────────────────────────────────────────────┘
```

**Features:**
- Logo and application name for branding
- Theme toggle for light/dark mode switching (defaulting to dark theme)
- User settings/profile access
- Clean, minimalist design with the project's signature dark theme

### 2. Sidebar - Koan Selection

The sidebar provides hierarchical access to all available koans:

```
┌────────────┐
│ KOANS      │
│            │
│ ▼ BASICS   │
│  ├ Koan 1  │
│  ├ Koan 2  │
│  └ Koan 3  │
│            │
│ ▼ HOOKS    │
│  ├ Koan 4  │
│  ├ Koan 5  │
│  └ Koan 6  │
│            │
│ ▼ ADVANCED │
│  ├ Koan 7  │
│  └ Koan 8  │
│            │
└────────────┘
```

*See full diagram in [docs/assets/sidebar.txt](assets/sidebar.txt)*

**Features:**
- Collapsible categories for organizing koans by topic
- Visual indicators for completed koans, current koan, and locked koans
- Search functionality for quickly finding specific koans
- Filters to show only incomplete koans, completed koans, or all koans

### 3. Koan Content Area

The main workspace where users interact with the current koan:

```
┌───────────────────────────────────────┐
│ KOAN TITLE                            │
├───────────────────────────────────────┤
│                                       │
│ DESCRIPTION                           │
│ - Explanation of the koan challenge   │
│ - Learning objectives                 │
│ - Hints and additional context        │
│                                       │
├───────────────────────────────────────┤
│                                       │
│ CODE EDITOR                           │
│ ┌───────────────────────────────────┐ │
│ │                                   │ │
│ │ // Your solution here             │ │
│ │                                   │ │
│ │                                   │ │
│ │                                   │ │
│ └───────────────────────────────────┘ │
│                                       │
├───────────────────────────────────────┤
│                                       │
│ TEST RESULTS                          │
│ ✓ Test 1 passed                       │
│ ✕ Test 2 failed                       │
│   Expected: true                      │
│   Received: false                     │
│                                       │
├───────────────────────────────────────┤
│                                       │
│ [RUN TESTS] [VIEW SOLUTION] [NEXT]    │
│                                       │
└───────────────────────────────────────┘
```

*See full diagram in [docs/assets/koan-content.txt](assets/koan-content.txt)*

**Features:**
- Clear koan title and description
- Embedded code editor with syntax highlighting
- Test results panel showing pass/fail status
- Action buttons for running tests, viewing solutions, and navigation
- Collapsible sections for optimal space utilization

### 4. Professor AI Interaction Panel

A chat-like interface for interacting with the AI mentor:

```
┌───────────────────────────────┐
│ PROFESSOR AI                  │
├───────────────────────────────┤
│                               │
│ ┌───────────────────────────┐ │
│ │ Welcome to Koan 3! This   │ │
│ │ koan focuses on state     │ │
│ │ management with useState. │ │
│ │                           │ │
│ └───────────────────────────┘ │
│                               │
│ ┌───────────────────────────┐ │
│ │ How can I help you with   │ │
│ │ this challenge?           │ │
│ │                           │ │
│ └───────────────────────────┘ │
│                               │
│ ┌───────────────────────────┐ │
│ │ I'm confused about when   │ │
│ │ to use useState vs        │ │
│ │ useRef.                   │ │
│ │                           │ │
│ └───────────────────────────┘ │
│                               │
│ ┌───────────────────────────┐ │
│ │ Great question! useState  │ │
│ │ is for values that when   │ │
│ │ changed should trigger a  │ │
│ │ re-render...              │ │
│ └───────────────────────────┘ │
│                               │
├───────────────────────────────┤
│ ┌─────────────────────────┐   │
│ │ Ask the Professor...    │   │
│ └─────────────────────────┘   │
│                               │
└───────────────────────────────┘
```

*See full diagram in [docs/assets/professor-ai.txt](assets/professor-ai.txt)*

**Features:**
- Chat-style interface with message history
- Context-aware responses based on the current koan
- Ability to ask questions, request hints, or deeper explanations
- Professor provides guidance without directly giving away solutions
- Option to share code snippets for specific advice

## User Flow

### Primary Flow

1. User logs in and sees the dashboard with available koans
2. User selects a koan from the sidebar
3. Koan content loads in the main content area
4. User reads the description and instructions
5. User implements a solution in the code editor
6. User runs tests to verify their solution
7. If tests pass: User can view the official solution and move to next koan
8. If tests fail: User can refine their solution or ask the Professor AI for help

### Professor AI Interaction Flow

1. User encounters difficulty with a koan
2. User formulates a question for the Professor AI
3. Professor AI provides contextual guidance, hints, or explanations
4. User applies this guidance to their solution
5. This cycle continues until the user successfully completes the koan

## Responsive Design Considerations

The layout adapts to different screen sizes:

- **Desktop**: Three-panel layout as shown in the main wireframe
- **Tablet**: Sidebar collapses to an expandable menu, Professor AI panel can be toggled
- **Mobile**: Single panel design with bottom navigation for switching between koans list, content, and Professor AI

```
MOBILE LAYOUT:
┌────────────────────────┐
│      HEADER/NAV        │
├────────────────────────┤
│                        │
│                        │
│  ACTIVE PANEL          │
│  (Koan List            │
│   OR                   │
│   Koan Content         │
│   OR                   │
│   Professor AI)        │
│                        │
│                        │
├────────────────────────┤
│ [KOANS] [CODE] [PROF]  │
└────────────────────────┘
```

*See full diagram in [docs/assets/mobile-layout.txt](assets/mobile-layout.txt)*

## Visual Style Reminder

All UI elements should follow the minimalist, dark-themed aesthetic defined in the Style Guide:

- Background colors: Dark theme (`ninja-bg-base`, `ninja-bg-raised`, `ninja-bg-hover`)
- Text colors: High contrast for readability (`ninja-text-primary`, `ninja-text-secondary`, `ninja-text-muted`)
- Accent colors: For interactive elements and emphasis (`ninja-accent-primary`, `ninja-accent-secondary`)
- Typography: Clean, readable fonts with consistent hierarchical scale
- Spacing: Consistent padding and margins for visual harmony
- Components: Follow established patterns for buttons, cards, and form elements