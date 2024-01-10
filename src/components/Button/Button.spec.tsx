import { cleanup, render, screen } from '@testing-library/react'
import Button from './Button'

describe('<Button />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<Button />)

    const button = screen.getByTestId('button')

    expect(button).toBeInTheDocument()
  })
})
