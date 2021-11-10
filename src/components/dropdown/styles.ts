import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.span`
  line-height: 1.5rem;
  color: #756f86;
`
export const StyledButton = styled.input`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: #ffffff;
  border: 1px solid #dbe2ea;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  border-radius: 6px;

  & span {
    color: #2c2738;
  }
`

export const ListContainer = styled.ul`
  position: absolute;
  top: 105%;
  left: 0;
  z-index: 2;
  background: #ffffff;
  border: 1px solid #dbe2ea;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04),
    0px 20px 20px rgba(44, 39, 56, 0.04);
  border-radius: 6px;
  max-height: 12rem;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`
export const ListItem = styled.li`
  background: #ebf4f8;
  color: #756f86;
  padding: 1rem;

  &:hover {
    background: #ebf4f8;
  }
`
