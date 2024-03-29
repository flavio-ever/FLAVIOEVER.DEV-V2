import React, { ButtonHTMLAttributes } from 'react'

import * as S from './style'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <S.Container type="button" {...rest}>
    {children}
  </S.Container>
)

export default Button
