import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};
`

export const Heading = styled.h2`
  font-size: ${({ size }) => (size ? size : '2.75rem')};
  font-weight: bold;
  font-size: 2.1rem;
`
