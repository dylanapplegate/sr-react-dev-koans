import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />)
    expect(screen.getByText(/Ninja Koans/i)).toBeInTheDocument()
  })

  it('increments the count when button is clicked', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /Count is 0/i })
    fireEvent.click(button)
    expect(screen.getByRole('button', { name: /Count is 1/i })).toBeInTheDocument()
  })
})