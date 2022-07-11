import { render, screen } from '@testing-library/react'

import Button from '.'

describe('<Button/>', () => {
  it('should render Button', () => {
    render(<Button>Botao teste</Button>)

    expect(
      screen.getByRole('button', {
        name: /Botao teste/i
      })
    ).toBeInTheDocument()
  })
})
