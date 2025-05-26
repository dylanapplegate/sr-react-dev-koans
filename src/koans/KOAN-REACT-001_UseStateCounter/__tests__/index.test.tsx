import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../index';

describe('KOAN-REACT-001: Counter', () => {
  it('renders the counter and buttons', () => {
    render(<Counter />);
    expect(
      screen.getByRole('button', { name: /decrement/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /increment/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('increments and decrements the counter', () => {
    render(<Counter />);
    const increment = screen.getByRole('button', { name: /increment/i });
    const decrement = screen.getByRole('button', { name: /decrement/i });
    const value = () => screen.getByText(/\d+/);

    fireEvent.click(increment);
    expect(value().textContent).toBe('1');
    fireEvent.click(increment);
    expect(value().textContent).toBe('2');
    fireEvent.click(decrement);
    expect(value().textContent).toBe('1');
  });

  it('resets the counter', () => {
    render(<Counter />);
    const increment = screen.getByRole('button', { name: /increment/i });
    const reset = screen.getByRole('button', { name: /reset/i });
    const value = () => screen.getByText(/\d+/);

    fireEvent.click(increment);
    fireEvent.click(increment);
    expect(value().textContent).toBe('2');
    fireEvent.click(reset);
    expect(value().textContent).toBe('0');
  });

  it('is accessible by keyboard', () => {
    render(<Counter />);
    const increment = screen.getByRole('button', { name: /increment/i });
    increment.focus();
    expect(increment).toHaveFocus();
  });
});
