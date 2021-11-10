import React from 'react'
import { Container, Heading } from './styles'

type ITitle = {
  children: React.ReactNode
  size?: string
  center?: boolean
}

export const Title: React.FC<ITitle> = ({ children, size, center = true }) => {
  return (
    <Container center={center}>
      <Heading size={size}>{children}</Heading>
    </Container>
  )
}
