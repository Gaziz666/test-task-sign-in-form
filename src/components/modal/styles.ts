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
  background: #ffffff;
  box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02),
    0px 32px 64px rgba(44, 39, 56, 0.04);
  border-radius: 24px;
  padding: 1.9rem 2.5rem;
  min-width: 460px;

  @media (max-width: 460px) {
    & {
      min-width: 360px;
    }
  }
`

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`
