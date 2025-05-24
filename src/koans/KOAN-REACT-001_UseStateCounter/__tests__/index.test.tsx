import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../index';

describe('Counter Component', () => {
  test('renders with initial count of 0', () => {
    render(<Counter />);
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
  });

  test('increments count when + button is clicked', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText('+'));
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
  });

  test('decrements count when - button is clicked', () => {
    render(<Counter initialCount={5} />);
    fireEvent.click(screen.getByText('-'));
    expect(screen.getByText(/count: 4/i)).toBeInTheDocument();
  });

  test('does not decrement below zero', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText('-'));
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
  });
});