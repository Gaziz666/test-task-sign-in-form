import styled from 'styled-components'

export const Container = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: flex-start;
`

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + label span:first-child {
    border: 2px solid #0880ae;
    & svg {
      opacity: 1;
    }
  }
`

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const Rect = styled.span`
  display: inline-block;
  overflow: hidden;
  width: 28px;
  height: 28px;
  background: #ffffff;
  border: 1px solid #dbe2ea;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  border-radius: 4px;
  margin-right: 0.5rem;

  & svg {
    opacity: 0;
  }
`

export const LabelText = styled.span`
  color: #756f86;
`
