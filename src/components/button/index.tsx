import React from 'react'
import { StyledButton } from './styles'

type IButton = {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disable?: boolean
}

export const Button: React.FC<IButton> = ({
  children,
  onClick,
  type,
  disable = false
}) => {
  return (
    <StyledButton disable={disable} onClick={onClick} type={type}>
      {children}
    </StyledButton>
  )
}
