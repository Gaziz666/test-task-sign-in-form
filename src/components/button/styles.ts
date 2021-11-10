import styled from 'styled-components'

export const StyledButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  text-decoration: none;
  text-align: center;
  line-height: 1.5rem;
  font-weight: lighter;
  outline: none;
  white-space: nowrap;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  background: #0880ae;
  color: #ebf4f8;
  cursor: pointer;
  transition: transform 0.3s ease;
  min-width: 180px;
  min-height: 56px;
  box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08),
    0px 4px 8px rgba(44, 39, 56, 0.08);

  &:hover {
    -webkit-box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.08),
      0px 24px 48px rgba(44, 39, 56, 0.16);
    box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.08),
      0px 24px 48px rgba(44, 39, 56, 0.16);
    transform: scale(1.05);
  }

  &:active {
    border: 2px solid rgba(44, 39, 56, 0.86);
  }

  &:disabled {
    background: #dbe2ea;
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.08);
    color: #2c2738;
    opacity: 0.5;
  }
`
