import styled from 'styled-components'

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

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

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > div:first-child {
    margin-right: 1rem;
  }
`
