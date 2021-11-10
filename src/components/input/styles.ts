import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
`

export const StyledInput = styled.input`
  padding: 1rem 1rem;
  text-decoration: none;
  text-align: left;
  outline: none;
  white-space: nowrap;
  font-size: 1rem;
  line-height: 1.5rem;
  border: 1px solid #dbe2ea;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  border-radius: 6px;
  background: #fff;
  color: #2c2738;
  width: 100%;

  &:focus {
    border: 2px solid #0880ae;
  }

  &::placeholder {
    color: #7c9cbf;
  }
`

export const Label = styled.label`
  line-height: 1.5rem;
  color: #756f86;
  margin-bottom: 8px;
`
export const ErrorMessage = styled.span`
  display: block;
  font-size: 0.8rem;
  line-height: 1.1rem;
  color: #ff7171;
`
