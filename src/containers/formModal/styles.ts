import styled from 'styled-components'

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 1.65rem;
  width: 100%;

  & > div {
    margin-bottom: 1rem;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const DescriptionContainer = styled.div``

export const Description = styled.span`
  font-weight: normal;
  line-height: 1.4rem;
  color: #2c2738;
`

export const Link = styled.a`
  line-height: 1.4rem;
  color: #0880ae;
  cursor: pointer;
`
