import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: all 0.3s ease;
  z-index: 100;
`
export const WrapperCenter = styled.div`
  margin: auto;
  z-index: 2;
  background-color: #69dadb;
  border-radius: 1rem;
  padding: 1rem;
  border: 2px solid black;
`

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`
