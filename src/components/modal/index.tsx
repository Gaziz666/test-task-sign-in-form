import React from 'react'
import { Container, Overlay, WrapperCenter } from './styles'

type IModal = {
  children: React.ReactNode
  isOpen: boolean
  onClose: React.Dispatch<React.SetStateAction<boolean>>
}
export const Modal: React.FC<IModal> = ({ children, isOpen, onClose }) => {
  return (
    <Container isOpen={isOpen}>
      <WrapperCenter>{children}</WrapperCenter>
      <Overlay onClick={() => onClose(false)} />
    </Container>
  )
}
