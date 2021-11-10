import React from 'react'
import { Container, Header, Body } from './styles'
import { MainHeader } from '../../containers/mainHeader'

interface IPageLayout {
  children: React.ReactNode
}

export const PageLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header>
        <MainHeader />
      </Header>
      <Body>{children}</Body>
    </Container>
  )
}
