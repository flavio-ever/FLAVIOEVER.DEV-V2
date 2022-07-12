import { render, screen } from '@testing-library/react'

import Button from '.'

describe('<Button/>', () => {
  it('should render Button', () => {
    const { container } = render(<Button>Botao teste</Button>)

    expect(
      screen.getByRole('button', {
        name: /Botao teste/i
      })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
