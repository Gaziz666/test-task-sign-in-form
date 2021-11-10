import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Label = styled.span`
  line-height: 1.5rem;
  color: #756f86;
`
export const StyledButton = styled.button<{ isVisible: boolean }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border: ${({ isVisible }) =>
    isVisible ? '2px solid #0880AE' : '1px solid #dbe2ea'};
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  border-radius: 6px;
  font-size: 1rem;
  width: 100%;

  cursor: pointer;

  & span {
    padding: 1rem 1rem;
    text-decoration: none;
    text-align: left;
    outline: none;
    white-space: nowrap;
    font-size: 1rem;
    line-height: 1.5rem;
    display: inline-block;
    color: #2c2738;
  }
`

export const ListContainer = styled.ul`
  position: absolute;
  top: 105%;
  left: 0;
  z-index: 3;
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
  background: #fff;
  color: #756f86;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    background: #ebf4f8;
  }
`

export const Overlay = styled.div<{ isVisible: boolean }>`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
`
