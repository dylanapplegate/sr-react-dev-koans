# Ninja Koans Style Guide

This document outlines the foundational styling patterns and design tokens used in the Ninja Koans project. It serves as a reference for maintaining visual consistency throughout the application.

## Design Philosophy

The Ninja Koans design system follows a minimalist, dark-themed aesthetic that emphasizes readability, focused content, and a distraction-free learning experience. We embrace:

- **Simplicity**: Clean layouts with focused content
- **Clarity**: High contrast for readability and emphasis on important elements
- **Consistency**: Predictable patterns and reusable components
- **Accessibility**: Design choices that support inclusivity

## Color Palette

### Background Colors

Our dark theme provides a comfortable learning environment that reduces eye strain during extended coding sessions:

```jsx
// Primary dark backgrounds
<div className="bg-ninja-bg-base">Dark background (base)</div>
<div className="bg-ninja-bg-raised">Slightly elevated elements</div>
<div className="bg-ninja-bg-hover">Hover state</div>
```

| Token | Color Hex | Description |
|------|------|------|
| `ninja-bg-base` | `#111827` | Base page background |
| `ninja-bg-raised` | `#1F2937` | Cards, panels, elevated elements |
| `ninja-bg-hover` | `#374151` | Hover states for interactive elements |

### Accent Colors

Accent colors are used to highlight interactive elements, active states, and important information:

```jsx
// Accent colors
<div className="bg-ninja-accent-primary">Primary accent</div>
<div className="bg-ninja-accent-secondary">Secondary accent</div>
<div className="bg-ninja-accent-hover">Hover state</div>
```

| Token | Color Hex | Description |
|------|------|------|
| `ninja-accent-primary` | `#818CF8` | Primary accent (buttons, links, highlighted text) |
| `ninja-accent-secondary` | `#4F46E5` | Secondary accent (buttons, interactive elements) |
| `ninja-accent-hover` | `#4338CA` | Hover state for accented elements |

### Text Colors

Text colors are designed for optimal readability on dark backgrounds:

```jsx
// Text colors
<p className="text-ninja-text-primary">Primary text</p>
<p className="text-ninja-text-secondary">Secondary text</p>
<p className="text-ninja-text-muted">Muted text</p>
```

| Token | Color Hex | Description |
|------|------|------|
| `ninja-text-primary` | `#FFFFFF` | Primary text (headings, body) |
| `ninja-text-secondary` | `#E5E7EB` | Secondary text (supporting content) |
| `ninja-text-muted` | `#9CA3AF` | Muted text (captions, helper text) |

## Typography

### Font Families

We use a combination of fonts optimized for both readability and code display:

```jsx
<p className="font-sans">Inter for general UI text</p>
<p className="font-mono">Fira Code for monospaced code</p>
```

### Font Sizes

A consistent typographic scale ensures hierarchy and readability:

```jsx
<h1 className="text-5xl">Heading 1 (48px)</h1>
<h2 className="text-4xl">Heading 2 (36px)</h2>
<h3 className="text-3xl">Heading 3 (30px)</h3>
<h4 className="text-2xl">Heading 4 (24px)</h4>
<h5 className="text-xl">Heading 5 (20px)</h5>
<h6 className="text-lg">Heading 6 (18px)</h6>
<p className="text-base">Body text (16px)</p>
<p className="text-sm">Small text (14px)</p>
<p className="text-xs">Extra small text (12px)</p>
```

## Spacing

Our spacing system uses consistent increments to maintain visual harmony:

```jsx
<div className="p-4">Base padding (16px)</div>
<div className="m-4">Base margin (16px)</div>
<div className="gap-4">Base gap (16px)</div>
```

| Token | Value | Description |
|------|------|------|
| `1` | `0.25rem` (4px) | Minimal spacing (borders, tiny gaps) |
| `2` | `0.5rem` (8px) | Compact spacing |
| `4` | `1rem` (16px) | Base spacing unit |
| `6` | `1.5rem` (24px) | Medium spacing |
| `8` | `2rem` (32px) | Large spacing |
| `12` | `3rem` (48px) | Extra large spacing |
| `16` | `4rem` (64px) | 2x large spacing |
| `24` | `6rem` (96px) | 3x large spacing |

## Border Radius

Consistent border radius values create a cohesive look:

```jsx
<div className="rounded">Default (4px)</div>
<div className="rounded-md">Medium (6px)</div>
<div className="rounded-lg">Large (8px)</div>
<div className="rounded-xl">Extra large (12px)</div>
```

## Common UI Patterns

### Buttons

```jsx
<button className="px-4 py-2 bg-ninja-accent-secondary text-ninja-text-primary rounded-md hover:bg-ninja-accent-hover transition">
  Primary Button
</button>

<button className="px-4 py-2 border border-ninja-accent-primary text-ninja-accent-primary rounded-md hover:bg-ninja-bg-hover transition">
  Secondary Button
</button>
```

### Cards/Panels

```jsx
<div className="p-6 bg-ninja-bg-raised rounded-lg shadow-lg">
  <h3 className="text-xl text-ninja-text-primary mb-2">Card Title</h3>
  <p className="text-ninja-text-secondary">Card content goes here</p>
</div>
```

### Form Elements

```jsx
<label className="block text-ninja-text-secondary mb-2">Input Label</label>
<input 
  type="text" 
  className="w-full px-4 py-2 bg-ninja-bg-base border border-ninja-bg-hover rounded-md focus:outline-none focus:ring-2 focus:ring-ninja-accent-primary text-ninja-text-primary"
/>
```

## Best Practices

1. **Use the token system**: Always use the custom tokens defined in this guide rather than hardcoding colors or sizes.

2. **Maintain contrast ratios**: Ensure text has sufficient contrast with its background for accessibility.

3. **Responsive design**: Use the spacing system consistently across breakpoints.

4. **Semantic HTML**: Pair styling with appropriate semantic HTML elements.

5. **Accessibility first**: Ensure all UI elements are accessible and keyboard-navigable.