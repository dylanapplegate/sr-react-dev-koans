# KOAN-REACT-001: useState Hook & Basic State Management

## Challenge

Implement a simple counter component using React's `useState` hook. The component should display a number and have three buttons:

- **Increment**: Increases the counter by 1
- **Decrement**: Decreases the counter by 1
- **Reset**: Sets the counter back to 0

### Requirements

- Use a functional component and the `useState` hook for state management.
- Ensure state updates are immutable and use the functional update form.
- Style the component using Tailwind CSS for a minimalist, dark-themed look.
- Ensure accessibility: use semantic elements, proper button labels, and keyboard navigability.
- Use TypeScript for all props and state.

## Example

The counter should look and behave like this:

```
+---------+   +-----+   +---------+
|   -     |   |  0  |   |   +     |
+---------+   +-----+   +---------+
      [Reset]
```

- The number updates as you click + or -
- The Reset button sets the number to 0

---

**Learning objectives:**

- Understand and use the `useState` hook
- Practice immutable state updates
- Apply Tailwind CSS for UI
- Implement accessible, minimalist React components
